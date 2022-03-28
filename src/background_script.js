chrome.browserAction.onClicked.addListener(function () {
  chrome.runtime.openOptionsPage();
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  const protocol = new URL(tab.url).protocol;
  if (protocol === 'http:' || protocol === 'https:') {
    chrome.tabs.sendMessage(tab.id, {});
  }
});

// start
chrome.contextMenus.removeAll(function () {
  chrome.contextMenus.create({
    id: 'view-html-source',
    title: 'View HTML Source',
  });
});
