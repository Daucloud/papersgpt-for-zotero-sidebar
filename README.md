# 📚 PapersGPT for Zotero - Modified Version by c7w

## ✨ Features

### 🖥️ **Chatbot in the Sidebar**  
- The chatbot has been moved from the popup menu to the **sidebar** for a smoother, more integrated experience.

### ✋ **Drag-and-Query on the Fly**  
- Simply **drag and select** text within Zotero to instantly query the chatbot. No extra steps needed! ⚡

### 🔒 **Offline-Only LLM API Support**  
- All external LLM API support and online authentication mechanisms of PapersGPT have been **disabled**.  
- Retains only the OpenAI configuration format with the following options:  
  - `base_url`  
  - `model_name`  
  - `api_key`  

### 🛠️ **Customizable Prompt Design**  
- Create and use your own **custom prompts** via the configuration settings. 🎨

## ⚙️ Configuration

### 🔍 Where Can I Find the Configuration?

The configuration file for this modified version of PapersGPT is located in Zotero's **profile directory**. You can find your Zotero profile directory in the following locations, depending on your operating system:

| 🖥️ **Operating System** | 📂 **Path to Profile Directory**                                                                                                                                                                                                                 |
|--------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Mac**                 | `/Users/<username>/Library/Application Support/Zotero/Profiles/<randomstring>` <br> **Note:** The `/Library` folder is hidden by default. To access it, click on your desktop, hold down the `Option` key, and click **Go > Library** in the menu. |
| **Windows 11/10/8/7/Vista** | `C:\Users\<User Name>\AppData\Roaming\Zotero\Zotero\Profiles\<randomstring>` <br> **Note:** If `AppData` is hidden, open the search bar (or Start menu in older versions), type `%appdata%`, and press Enter to navigate to the `AppData\Roaming` directory. |
| **Windows XP/2000**      | `C:\Documents and Settings\<username>\Application Data\Zotero\Zotero\Profiles\<randomstring>`                                                                                                                                                |
| **Linux**                | `~/.zotero/zotero/<randomstring>`            |


Locate `prefs.js` within that folder with random string.


### 🛠️ How to Modify the Configuration

After installing the plugin and restart Zotero (you can look at the dev console to see a prompt like `Setting default values for custom model`), you can modify the user profile (located above). These fields can be modified:

Here’s a concise version with just four lines:

1. **API Key**: Set your custom API key for authentication.  
   ```javascript
   user_pref("extensions.zotero.PapersGPT.customModelApiKey", "your-api-key-here");
   ```

2. **Model Name**: Specify the LLM model to use (e.g., `gpt-4o`).  
   ```javascript
   user_pref("extensions.zotero.PapersGPT.customModelApiModel", "gpt-4o");
   ```

3. **API URL**: Define the endpoint of your custom LLM server.  
   ```javascript
   user_pref("extensions.zotero.PapersGPT.customModelApiUrl", "http://your-server-url/v1/chat/completions");
   ```

4. **Custom Prompts**: Add or edit JSON-based prompts for tasks like summarization, translation, etc.  
   ```javascript
   user_pref("extensions.zotero.PapersGPT.prompts", "[{\"name\":\"Summary\",\"prompt\":\"Summarize the text...\"}]");
   ```

### Customized Prompt in Detail

The value must be a list of `interface Prompt`:

```typescript
interface Prompt {
  name: string
  read_selection: boolean
  description: string
  prompt: string
  display: {
    color: string
    priority: number
  }
}

```

Below is an example of a customized prompt designed to summarize the abstract of a research paper. This prompt provides detailed instructions for the chatbot's behavior.

```typescript
{
  name: "Abstract",  // Task name
  read_selection: true,  // Reads selected text in Zotero. If this is false, only the prompt below will be sent to the GPT, and selection wont be considered.
  description: "Given abstract, summarize it.",  // Brief description of the task
  prompt: `# 角色
你是文献摘要助手，具备快速阅读和理解机器学习文献的能力。
# 工作任务
你的输入是文献的摘要部分，或简介部分，或两者均有。
1. 理解工作的背景与应用价值。
2. 分析之前方法的做法与挑战。
3. 概述采用的方法与对应的解决挑战。
4. 汇总实验过程与结论。
5. 归纳其他摘要中提到的点。
6. 输出完所有要点后，请根据你的理解，提出几个在这一部分还没有写清楚的问题，以及你认为可以进一步探讨的方向。
# 注意事项
- 确保文献内容准确无误。
- 输出格式需遵循Markdown规范。
- 分点作答，分点作答，分点作答！（把每一点放到四级标题里）
- 保持英文输出。
- 输出尽可能简洁明了，同一个点表达出意思即可，不必过多展开。
- 当你遇到数学公式时，请使用 $...$ 包裹行内公式，使用 $...$ 包裹块公式。注意不要使用 \(...\) 和 \[...\]。
# 输入摘要`,
  display: {
    color: "#0EA293",  // Display color in the UI
    priority: 10  // Priority for ordering in the interface (lower appears first)
  }
}
```

Note that the `Send` button in sidebar can also be viewed as an instance of Prompt with prompt dynamically read from the input element. The `read_selection` can be regarded as set to true.


## Development

```bash
npm install

# Modify scripts/zotero-cmd.json to put your zotero executable here. (you may install one in Unix development environment and use X11 forwarding)

node scripts/build.js && npm run start-z7   # build and debug

# Relase your built plugin from builds/papersgpt.xpi

```

Feel free to contribute, report issues, or suggest features! 😊


# Original README
<h1 align="center">
PapersGPT For Zotero
</h1>
It is a zotero AI plugin for improving your papers reading and research efficently with ChatGPT, Gemini, Claude, DeepSeek, Phi 4, Llama 3.2, Gemma and Mistral. It offers users the ability to ask questions, extract insights, and converse with PDFs directly, providing a powerful research assistant for scholars, researchers, and anyone who deals with large amounts of text in PDF format.

## Key Features

**Lots of SOTA Business LLMs For Choosing:**

- Powered by the smartest cutting-edge LLMs, offering high accuracy to assist you effectively reading papers. Now support the following latest SOTA models:  
  *DeepSeek* Beats Claude 3.5 Sonnet + GPT-4o, now the price almost 1/20 of GPT-4o :sparkles: :fire:   
  *gemini-2.0-flash-thinking* :sparkles: :fire:   
  *gemini-2.0-flash-exp* :sparkles: :fire:   
  *gemini-exp-1206*  **#1 on Chatbot Arena** :sparkles: :fire:   
  *gemini-exp-1121*   
  *LearnLM-1.5* :fire:  
  *gemini-1.5-pro*  
  *gemini-1.5-flash*  
  *gpt-4o-2024-11-20* :fire:  
  *gpt-4o-mini*  
  *claude-3.5-sonnet*  
  *claude-3.5-haiku*  

**Lots of the Latest SOTA Open Source Freely Local LLMs For Mac Users:**

- There are many SOTA free and open source models built in, Now support the following models:  
  *Phi-4* :sparkles: :fire:   
  *Llama3.2*  
  *QwQ-32B-Preview* :fire:   
  *Marco-o1* :fire:  
  *Gemma2*   
  *Mistral*   
  After free registration, these models can be automatically downloaded, installed and used with just one click on the plugin page, models are all locally stored, ensuring not sending your data to remote LLMs.  
  Of course, these models can be switched as your will, and smarter Open Source LLMs in the future would be accessed as soon as possible.
- 100% Privacy and Safe of Your Personal Data. Besides local LLMs, the RAG modules of embeddings, vector database and rerank are all built and runned locally, There will be no data leakage and it can be used normally even on the plane when the internet can't be connected.
- Notice: As reasoning models respond slowly, recommend just to use them to solve hard problems. If you choose QwQ-32B-Preview, ensure your Mac's memory at least 12G 

**Seamless Zotero Integration:**

- Syncs directly with your Zotero library, making it easy to manage and chat your documents without leaving the Zotero interface.
  
## How to Use  

**Installation:** 

- First download papersgpt.xpi plugin [here](https://github.com/papersgpt/papersgpt-for-zotero/releases/download/papersgpt-v0.0.1/papersgpt.xpi). 
  Open Zotero in the top menu bar, click on `Tools > Add-ons`.  Click on the gear icon at the top right of the window.  
  Click on `Install Add-on From File` and open the downloaded plugin file papersgpt.xpi.

**Startup:**

- In Zotero, press the keys to start the plugin, MacOS(command + enter), Windows(ctrl + enter). 

**Select LLM models:**
 
- For Windows users, after registration the OpenAI, Claude, and Gemini models can all be accessed and switched by one click.  
- For Mac users, after registration besides the above excellent business models, Phi 4, Llama 3.2, Gemma 2 and Mistral can all be choosed by just one click in plugin without manualy installing many boring additional tools or softwares.
- Now the registration is open and free!
 
**Chat PDFs in Zotero:** 

- Open any PDF and start asking questions. PapersGPT will process the document and provide insightful responses.

**Manage Insights:** 

- Save, export, or share the extracted insights, answers, and annotations from your conversations.

**Quit:**  

- Press esc key to exit. 


## Build the plugin

If you like to build the plugin by yourself, do as the below commands:

```bash
git clone https://github.com/papersgpt/papersgpt-for-zotero.git
cd papersgpt-for-zotero
npm install
npm run build
```
The plugin file(papersgpt.xpi) will be built and generated into the build directory
 
## Use Cases

**Research Assistance:**  

- Summarize research papers, identify key concepts, and quickly get answers to your questions.

**Academic Writing:** 

- Generate insights for literature reviews or dive deep into specific sections of papers.  

**Collaborative Projects:** 

- Share annotated PDFs and responses with colleagues and teams for smoother collaboration.
  
## Contributions

Contributions to PapersGPT are welcome! Please follow the standard GitHub process for submitting pull requests or reporting issues.

## Acknowledgements

Inspired by [zotero-gpt](https://github.com/MuiseDestiny/zotero-gpt.git), PapersGPT for Zotero has developed lots of unique, significant features based on it.
