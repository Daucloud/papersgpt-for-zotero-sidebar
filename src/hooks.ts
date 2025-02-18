import { config } from "../package.json";
import { getString, initLocale } from "./modules/locale";
import Views from "./modules/views";
import Utils from "./modules/utils";
import { createZToolkit } from "./ztoolkit"
import { Prompt, default_prompt_list } from "./modules/prompts";

async function onStartup() {
  await Promise.all([
    Zotero.initializationPromise,
    Zotero.unlockPromise,
    Zotero.uiReadyPromise,
  ]);
  initLocale();
  ztoolkit.ProgressWindow.setIconURI(
    "default",
    `chrome://${config.addonRef}/content/icons/favicon.ico`
  );

  Zotero.Prefs.set(`${config.addonRef}.supportedLLMs`, "")  //! [c7w] change this...
  Zotero[config.addonInstance].views = new Views();
  Zotero[config.addonInstance].utils = new Utils();
  
  await Promise.all(
    Zotero.getMainWindows().map((win) => onMainWindowLoad(win)),
  );
  
}


async function onMainWindowLoad(win: Window): Promise<void> {
  // Create ztoolkit for every window
  addon.data.ztoolkit = createZToolkit();


  //! [c7w] core view functions!
  // Zotero[config.addonInstance].views.registerInToolbar()
  
  Zotero[config.addonInstance].views.registerWindowAppearance()

  Zotero[config.addonInstance].views.registerInSidebar()

  Zotero[config.addonInstance].views.registerInMenupopup()


  //! [c7w] core view functions!

  //Guide.showGuideInMainWindowIfNeed(win);

  const callback = {
    notify: async (
      event: string,
      type: string,
      ids: number[] | string[],
      extraData: { [key: string]: any },
    ) => {
      onNotify(event, type, ids, extraData);
    },
  };

  var notifierID = Zotero.Notifier.registerObserver(callback, ["tab", "item", "file"]); 
}

async function onMainWindowUnload(win: Window): Promise<void> {
  //ztoolkit.unregisterAll();
  addon.data.ztoolkit.unregisterAll();
  Zotero.getMainWindow().document.querySelector("#papersgpt")?.remove();
}

export function sleep(time) {
    return new Promise((resolve) => window.setTimeout(resolve, time));
}

async function onNotify(
  event: string,
  type: string,
  ids: Array<string | number>,
  extraData: { [key: string]: any },
) {
  if (extraData?.skipAutoSync) return 
   
  if (event === "select" && type === "tab") {
      await Zotero[config.addonInstance].views.registerInMenupopup()
    return
  }
}


export async function downloadFile(url, filename) {
    await Zotero.File.download(url, filename)
    var signFile = filename + ".done"
    var execCmd = [signFile];
    var exec = "/usr/bin/touch"
    try {
        await Zotero.Utilities.Internal.exec(exec, execCmd);
    } catch {
	Zotero.log("touch error")
    } 
}

export async function checkFileExist(filename) {
    return await IOUtils.exists(filename)
}

export async function startLocalLLMEngine(filename) {
    var execCmd = ['attach', filename];
    var exec = "/usr/bin/hdiutil"
    try {
        await Zotero.Utilities.Internal.exec(exec, execCmd);
    } catch {
	Zotero.log("hdiutil command error!")
    } 

    if (await checkFileExist("/Volumes/ChatPDFLocal/ChatPDFLocal.app")) {
        execCmd = ['/Volumes/ChatPDFLocal/ChatPDFLocal.app', '--args', 'appLaunchType', 'backend']
        exec = "/usr/bin/open"
        try { 
	    await Zotero.Utilities.Internal.exec(exec, execCmd);
	} catch {
	}
    }
}

export async function shutdownLocalLLMEngine() {
    var execCmd = ['-9', 'ChatPDFLocal']
    var exec = "/usr/bin/killall"
    try { 
        await Zotero.Utilities.Internal.exec(exec, execCmd);
    } catch {
    }

    execCmd = ['-9', 'chatpdflocal-llama-server']
    exec = "/usr/bin/killall"
    try {
        await Zotero.Utilities.Internal.exec(exec, execCmd);
    } catch {
    } 
    
    execCmd = ['-9', 'chatpdflocal-llama-server-x86']
    try { 
        await Zotero.Utilities.Internal.exec(exec, execCmd);
    } catch {
    }

    execCmd = ['-9', 'huggingface_download']
    try { 
        await Zotero.Utilities.Internal.exec(exec, execCmd);
    } catch {
    }

    execCmd = ['detach', '/Volumes/ChatPDFLocal'];
    exec = "/usr/bin/hdiutil"
    try { 
        await Zotero.Utilities.Internal.exec(exec, execCmd);
    } catch {
    }
}

function onShutdown(): void {
  if (Zotero.isMac) {
      Zotero.Prefs.set(`${config.addonRef}.startLocalServer`, false)

      shutdownLocalLLMEngine()

      // @ts-ignore
      const temp = Zotero.getTempDirectory();
      var filename = "ChatPDFLocal"

      filename = PathUtils.join(temp.path.replace(temp.leafName, ""), `${filename}.dmg`);

      var execCmd = [filename];
      var exec = "/bin/rm"
      try {
          Zotero.Utilities.Internal.exec(exec, execCmd);
      } catch {
      }
  
      var signFile = filename + ".done"
      execCmd = [signFile];
      try {
          Zotero.Utilities.Internal.exec(exec, execCmd);
      } catch {
      }
  } 
	
  ztoolkit.unregisterAll();

  addon.data.alive = false;
  delete Zotero[config.addonInstance];
  Zotero.Prefs.set(`${config.addonRef}.papersgptState`, "Offline")
}

export default {
  onStartup,
  onShutdown,
  onMainWindowLoad,
  onMainWindowUnload,
};
