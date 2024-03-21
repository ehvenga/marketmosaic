// Inside popup.js
document.addEventListener('DOMContentLoaded', function () {
  chrome.storage.local.get('onGoogleDoc', function (data) {
    if (data.onGoogleDoc) {
      document.getElementById('message').textContent =
        'Detected you are in a Google Document, would you like to track this file?';
      // Reset the flag
      chrome.storage.local.set({ onGoogleDoc: false });
    } else {
      document.getElementById('message').textContent =
        'Not viewing a Google Document.';
    }
  });
});
