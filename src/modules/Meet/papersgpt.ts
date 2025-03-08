import { Document } from "langchain/document";
import { Views, sleep } from "../views";
import { config } from "../../../package.json";

export class ModelConfig {
	public models: string[] = [];
	public hasApiKey: boolean = true;
	public apiKey: string = "";
        public areModelsReady: Map<string, boolean> = new Map();
        public defaultModelIdx: number = 0;
        public apiUrl: string = "";	
        public displayName: string = "";
}


export async function search(publisher: string, model: string,
			     docid: string, queryText: string, 
			     topn: number, embeddingModel: string,
			     packFields: string) {
  var relatedDocs: Document[] = []
  const url = `http://localhost:9080/search`
  let res 
  const views = Zotero.PapersGPT.views as Views

  try {
      res = await Zotero.HTTP.request(
          "POST",
          url,
          {
            responseType: "json",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
	      publisher: publisher,  
		model: model,
                doc_id: docid,
                query: queryText,
		topn: topn,
		show_fields: packFields
            }),
          }
        )
  } catch (error: any) {
	try {
          error = error.xmlhttp.response?.error
          views.setText(`# ${error.code}\n> ${url}\n\n**${error.type}**\n${error.message}`, true)
          new ztoolkit.ProgressWindow(error.code, { closeOtherProgressWindows: true })
            .createLine({ text: error.message, type: "default" })
            .show()
        } catch {
          new ztoolkit.ProgressWindow("Error", { closeOtherProgressWindows: true })
            .createLine({ text: error.message, type: "default" })
            .show()
        }
  }

  if (res?.response?.Fields) {
      var fields_array = packFields.split(':')
      const fields_num = fields_array.length
      if (fields_num > 0) {
	     const docs_num = res.response.Fields[fields_array[0]].length
	     if (fields_num == 3) { // selected items
		     for (let i = 0; i < docs_num; i++) {
			     relatedDocs.push(
				     new Document({
					     pageContent: res.response.Fields["text-string"][i],
					     metadata: {
						     type: res.response.Fields["type-string"][i],
						     id: res.response.Fields["id-int"][i], 
					     },
				     }))
		     }
	     } else if (fields_num == 7) { // pdf2documents
		     for (let i = 0; i < docs_num; i++) {
			     relatedDocs.push(
				     new Document({
					     pageContent: res.response.Fields["text-string"][i],
					     metadata: {
						     type: res.response.Fields["type-string"][i],
						     box: { page: res.response.Fields["box_page-int"][i], 
							    left: res.response.Fields["box_left-float"][i], 
							    right: res.response.Fields["box_right-float"][i], 
							    top: res.response.Fields["box_top-float"][i], 
							    bottom: res.response.Fields["box_bottom-float"][i] },
					     }
				     }))
		     }
	     }
      }
  }
  return relatedDocs 
}

export async function isDocumentExist(key: string) {
  let res 
  const views = Zotero.PapersGPT.views as Views
  const url = `http://localhost:9080/isDocumentExist` 
  try {
        res = await Zotero.HTTP.request(
          "POST",
          url,
          {
            responseType: "json",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              doc_id: key,
            }),
          }
        )
  } catch (error: any) {
	try {
          error = error.xmlhttp.response?.error
          views.setText(`# ${error.code}\n> ${url}\n\n**${error.type}**\n${error.message}`, true)
          new ztoolkit.ProgressWindow(error.code, { closeOtherProgressWindows: true })
            .createLine({ text: error.message, type: "default" })
            .show()
        } catch {
          new ztoolkit.ProgressWindow("Error", { closeOtherProgressWindows: true })
            .createLine({ text: error.message, type: "default" })
            .show()
        }
  }

  if (res?.response["Exist"]) {
        return res.response["Exist"]
  }
  return false
}

export async function addDoc(key: string, docs: Document[], type: string) {
  let res 
  const views = Zotero.PapersGPT.views as Views
  var textsArray: string[] = []
  var typesArray: string[] = []
  var idsArray: number[] = []
  var boxPageArray: number[] = []
  var boxLeftArray: number[] = []
  var boxRightArray: number[] = []
  var boxTopArray: number[] = []
  var boxBottomArray: number[] = [] 
  for (let i = 0; i < docs.length; i++) {
    textsArray.push(docs[i].pageContent)
    typesArray.push(type) 
    if (type == "box") {
	   boxPageArray.push(docs[i].metadata.box.page) 
	   boxLeftArray.push(docs[i].metadata.box.left) 
	   boxRightArray.push(docs[i].metadata.box.right) 
	   boxTopArray.push(docs[i].metadata.box.top) 
	   boxBottomArray.push(docs[i].metadata.box.bottom) 
    } else if (type == "id") {
	   idsArray.push(docs[i].metadata.id)
    } 
  }
  
  const url = `http://localhost:9080/add` 
  try {
	if (type == "id") {
		res = await Zotero.HTTP.request(
			"POST",
			url,
			{
				responseType: "json",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					doc_id: key,
					text$string: textsArray,
					type$string: typesArray,
					id$int: idsArray
				}),
			}
		)
	} else if (type == "box") {
	        res = await Zotero.HTTP.request(
			"POST",
			url,
			{
				responseType: "json",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					doc_id: key,
					text$string: textsArray,
					type$string: typesArray,
					box_page$int: boxPageArray,
					box_left$float: boxLeftArray,
					box_right$float: boxRightArray,
					box_top$float: boxTopArray,
					box_bottom$float: boxBottomArray
				}),
			}
		)
	}
  } catch (error: any) {
	try {
          error = error.xmlhttp.response?.error
          views.setText(`# ${error.code}\n> ${url}\n\n**${error.type}**\n${error.message}`, true)
          new ztoolkit.ProgressWindow(error.code, { closeOtherProgressWindows: true })
            .createLine({ text: error.message, type: "default" })
            .show()
        } catch {
          new ztoolkit.ProgressWindow("Error", { closeOtherProgressWindows: true })
            .createLine({ text: error.message, type: "default" })
            .show()
        }
  }

  if (res?.response?.Code) {
	if (res.response.Code == 200) {
		return true
	}
  }
  return false
}


export async function selectModel(publisher: string, model: string) {
  let res 
  const views = Zotero.PapersGPT.views as Views
  const url = `http://localhost:9080/selectModel` 
  try {
        res = await Zotero.HTTP.request(
          "POST",
          url,
          {
            responseType: "json",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              publisher: publisher,
	      model: model 
            }),
          }
        )
  } catch (error: any) {
	try {
          error = error.xmlhttp.response?.error
          views.setText(`# ${error.code}\n> ${url}\n\n**${error.type}**\n${error.message}`, true)
          new ztoolkit.ProgressWindow(error.code, { closeOtherProgressWindows: true })
            .createLine({ text: error.message, type: "default" })
            .show()
        } catch {
          new ztoolkit.ProgressWindow("Error", { closeOtherProgressWindows: true })
            .createLine({ text: error.message, type: "default" })
            .show()
        }
  }

  if (res?.response["Code"]) {
        return res.response["Code"] == 200 ? true : false
  }
  return false
}


export async function getLocalModelDownloadProgress(model: string) {
  let res
   
  const views = Zotero.PapersGPT.views as Views
  const url = `http://localhost:9080/getLocalModelDownloadProgress` 
  try {
        res = await Zotero.HTTP.request(
          "POST",
          url,
          {
            responseType: "json",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              publisher: "Local LLM",
	      model: model 
            }),
          }
        )
  } catch (error: any) {
	try {
          error = error.xmlhttp.response?.error
          views.setText(`# ${error.code}\n> ${url}\n\n**${error.type}**\n${error.message}`, true)
          new ztoolkit.ProgressWindow(error.code, { closeOtherProgressWindows: true })
            .createLine({ text: error.message, type: "default" })
            .show()
        } catch {
          new ztoolkit.ProgressWindow("Error", { closeOtherProgressWindows: true })
            .createLine({ text: error.message, type: "default" })
            .show()
        }
  }

  if (res?.response["Code"]) {
      if (res.response["Code"] == 203) {
	  var downloadingValue = res.response["DownloadingPercent"]
          return (downloadingValue > 100 || downloadingValue < 0 ) ? 0 : downloadingValue 
      } else if (res.response["Code"] == 200 
		 || res.response["Code"] == 201
		 || res.response["Code"] == 202) {
	  return res.response["Code"]
      } else {
        return -1 
      }
  }
  return -1
}	

export async function setApiKey(publisher: string, apiKey: string) {
  let res 
  const views = Zotero.PapersGPT.views as Views
  const url = `http://localhost:9080/setLLMApiKey` 
  try {
        res = await Zotero.HTTP.request(
          "POST",
          url,
          {
            responseType: "json",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              publisher: publisher,
	      API_KEY: apiKey 
            }),
          }
        )
  } catch (error: any) {
	try {
          error = error.xmlhttp.response?.error
          views.setText(`# ${error.code}\n> ${url}\n\n**${error.type}**\n${error.message}`, true)
          new ztoolkit.ProgressWindow(error.code, { closeOtherProgressWindows: true })
            .createLine({ text: error.message, type: "default" })
            .show()
        } catch {
          new ztoolkit.ProgressWindow("Error", { closeOtherProgressWindows: true })
            .createLine({ text: error.message, type: "default" })
            .show()
        }
  }

  
  if (res?.response["Code"]) {
	  return res.response["Code"]
  }
  return -1
}

function parseJsonResults(publisher2models: Map<string, ModelConfig>, publishers: string[], supportedLLMsJson: []) {

  const try_url = Zotero.Prefs.get(`${config.addonRef}.customModelApiUrl`)
  Zotero.log(try_url)
  if (!try_url) {
    Zotero.log("Setting default values for custom model")
    Zotero.Prefs.set(`${config.addonRef}.customModelApiUrl`, "https://api.openai.com/v1/chat/completions")
    Zotero.Prefs.set(`${config.addonRef}.customModelApiKey`, "xxxx2552xxxx41xxxx58xxxxc31xxxx7")
    Zotero.Prefs.set(`${config.addonRef}.customModelApiModel`, "gpt-4o")
  }

  // get base_url, api_key, model from Zotero.Prefs
  const curAPIUrl = Zotero.Prefs.get(`${config.addonRef}.customModelApiUrl`)
  const curAPIKey = Zotero.Prefs.get(`${config.addonRef}.customModelApiKey`)
  const curModel = Zotero.Prefs.get(`${config.addonRef}.customModelApiModel`)


  Zotero.Prefs.set(`${config.addonRef}.usingAPIKEY`, curAPIKey as string)
  Zotero.Prefs.set(`${config.addonRef}.usingAPIURL`, curAPIUrl as string)
  Zotero.Prefs.set(`${config.addonRef}.usingModel`, curModel as string)





  // var curPublisher = Zotero.Prefs.get(`${config.addonRef}.usingPublisher`)
  // for (var i = 0; i < supportedLLMsJson.length; i++) {
  //   const publisher = supportedLLMsJson[i]["Publisher"]
  //   var models = []
  //   var modelsAreReady = new Map()

  //   models = supportedLLMsJson[i]["Models"]

  //   // pref("extensions.zotero.__addonRef__.customModelApiUrl", "https://api.openai.com/v1/chat/completions");
  //   // pref("extensions.zotero.__addonRef__.customModelApiKey", "xxxx2552xxxx41xxxx58xxxxc31xxxx7");
  //   // pref("extensions.zotero.__addonRef__.customModelApiModel", "gpt-4o");

  //   // try get url. if url is not set, then set all above three to default value
  //   const try_url = Zotero.Prefs.get(`${config.addonRef}.customModelApiUrl`)
  //   if (try_url.length == 0) {
  //     Zotero.Prefs.set(`${config.addonRef}.customModelApiUrl`, "https://api.openai.com/v1/chat/completions")
  //     Zotero.Prefs.set(`${config.addonRef}.customModelApiKey`, "xxxx2552xxxx41xxxx58xxxxc31xxxx7")
  //     Zotero.Prefs.set(`${config.addonRef}.customModelApiModel`, "gpt-4o")
  //   }


  //   var customizedModel = Zotero.Prefs.get(`${config.addonRef}.customModelApiModel`)
  //   if (customizedModel.length > 0 && models.length == 0) {
  //     models.push(customizedModel)
  //   } else if (customizedModel.length > 0 && models.length > 0) {
  //     models[0] = customizedModel
  //   }


  //   // var apiKey = supportedLLMsJson[i].hasOwnProperty("API_KEY") ? supportedLLMsJson[i]["API_KEY"] : ""
  //   // if (apiKey.length == 0) {
  //   //   if (publisher == "OpenAI") {
  //   //     apiKey = Zotero.Prefs.get(`${config.addonRef}.openaiApiKey`)
  //   //   } else if (publisher == "Claude-3") {
  //   //     apiKey = Zotero.Prefs.get(`${config.addonRef}.claudeApiKey`)
  //   //   } else if (publisher == "Gemini") {
  //   //     apiKey = Zotero.Prefs.get(`${config.addonRef}.geminiApiKey`)
  //   //   } else if (publisher == "Customized") {
  //   //     apiKey = Zotero.Prefs.get(`${config.addonRef}.customModelApiKey`)
  //   //   }
  //   // }

  //   // var apiUrl = supportedLLMsJson[i]["API_URL"]
  //   // if (publisher == "Customized" && apiUrl.length == 0) {
  //   //   apiUrl = Zotero.Prefs.get(`${config.addonRef}.customModelApiUrl`)
  //   // }


  //   let modelConfig: ModelConfig = {
  //     models: models,
  //     hasApiKey: true,
  //     apiKey: curAPIKey as string,
  //     areModelsReady: modelsAreReady,
  //     defaultModelIdx: 0,
  //     apiUrl: apiUrl
  //   }

  //   if (publisher == curPublisher && supportedLLMsJson[i].hasOwnProperty("API_KEY") && supportedLLMsJson[i]["API_KEY"].length > 0) {
  //     Zotero.Prefs.set(`${config.addonRef}.usingAPIKEY`, supportedLLMsJson[i]["API_KEY"])
  //   }

  //   var temp = publisher2models.get(publisher)
  //   if (temp == null) {
  //     publishers.push(publisher)
  //   }
  //   publisher2models.set(publisher, modelConfig)
  // }
}


export async function getSupportedLLMs(publisher2models: Map<string, ModelConfig>, publishers:string[], email: string, token: string) {
  Zotero.log("Getting supported LLMs!")
  const supportedLLMsJson = [
    {
      "Publisher": "Customized",
      "Models": ["gpt-4o"],
      "API_URL": "",

    },
  ]
  Zotero.Prefs.set(`${config.addonRef}.isLicenseActivated`, true)
  Zotero.Prefs.set(`${config.addonRef}.supportedLLMs`, JSON.stringify(
    supportedLLMsJson
  ))
  parseJsonResults(publisher2models, publishers, supportedLLMsJson)

  // var httpRequestError = false 
  // let res 
  // const views = Zotero.PapersGPT.views as Views

  // var url = ""
  // var trycount = 0 

  // let isActivated = Zotero.Prefs.get(`${config.addonRef}.isLicenseActivated`)
  // isActivated = true
  // const supportedLLMs = Zotero.Prefs.get(`${config.addonRef}.supportedLLMs`) as string
  

  // //! TODO: hack this
  // if (isActivated 
  //   && supportedLLMs.length > 0) {
  //   var supportedLLMsJson = JSON.parse(supportedLLMs)
  //   if (supportedLLMsJson.length > 0) {
  //     parseJsonResults(publisher2models, publishers, supportedLLMsJson)
  //     return 
  //   } 
  // }
    

  // var trycount = 0 
  
  // do { 
  //   url = `https://www.papersgpt.com/api/supportmodels`
  //   try {
  //     res = await Zotero.HTTP.request(
  //       "POST",
  //       url,
  //       {
  //         responseType: "json",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //   body: JSON.stringify({
  //     email: email,
  //           token: token,
  //         }),
  //   timeout: 2000
  //       }
  //     )
  //   } catch (error: any) {
  //     try {
  //       httpRequestError = true
  //       error = error.xmlhttp.response?.error
  // Zotero.log(error.message)
  //     } catch {
  // Zotero.log(error)
  // httpRequestError = true
  //     }
  //   }
  //   trycount = trycount + 1
  // } while (trycount < 2 && httpRequestError)
  


  // if (httpRequestError) {
  //     Zotero.log("request error")
  //     return
  // }

  // if (res?.response.Code) {
  //   if (res.response.Code != 200) {
  //     return
  //   } 
  //   Zotero.Prefs.set(`${config.addonRef}.isLicenseActivated`, true)
  //   var allElements = res?.response.SupportedLLMs as []
  //   var supportedLLMsStr = JSON.stringify(allElements)
    

  //   parseJsonResults(publisher2models, publishers, allElements)
  // }
}

