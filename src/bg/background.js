// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

 //var settings = new Store("settings", {
  //   "sample_setting": "This is how you use Store.js to remember values"
 //});
//Only operation is to load localstorage options
console.log('Listening');
var settings = new Store("settings", {

});
chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  if (request.action == 'settings') {
    sendResponse(settings.toObject());
  }
});