chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.onGoogleDoc) {
    chrome.action.setPopup({ popup: 'popup.html' }); // Ensure popup is set
    chrome.storage.local.set({ onGoogleDoc: true }); // Save state
  }
});
