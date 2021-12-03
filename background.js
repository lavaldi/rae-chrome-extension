chrome.omnibox.onInputEntered.addListener(function (text) {
  var newURL = "https://dle.rae.es/?w=" + encodeURIComponent(text);
  chrome.tabs.update({ url: newURL });
});
