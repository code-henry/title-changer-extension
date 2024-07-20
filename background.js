chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "changeTitle",
      title: "Change Tab Title",
      contexts: ["all"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "changeTitle") {
      executeScriptToChangeTitle(tab.id);
    }
  });
  
  chrome.commands.onCommand.addListener((command) => {
    if (command === "change-title") {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length > 0) {
          executeScriptToChangeTitle(tabs[0].id);
        }
      });
    }
  });
  
  function executeScriptToChangeTitle(tabId) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ['content.js']
    });
  }
  