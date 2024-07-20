chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "changeTitle",
      title: "Change Tab Title",
      contexts: ["all"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "changeTitle") {
      chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ['content.js']
      });
    }
  });
  