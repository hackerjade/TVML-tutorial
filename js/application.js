App.onLaunch = function(options) {
  // 1
  var javascriptFiles = [
    `${options.BASEURL}js/Prsenter.js`
  ];
// 2
evaluateScripts(javascriptFiles, function (success) {
    if (success) {
      var alert = createAlert("Hello World!", "");
      Presenter.modalDialogPresenter(alert);
    } else {
      var alert = createAlert("Error", "");
      navigationDocument.presentModal(alert);
    };
  });
};
var createAlert = function(title, description) {
  var alertString = `<?xml version="1.0" encoding="UTF-8" ?>
    <document>
      <alertTemplate>
        <title>${title}</title>
        <description>${description}</description>
        <button>
         <text>OK</text>
       </button>
      </alertTemplate>
    </document>`
    var parser = new DOMParser();
    var alertDoc = parser.parseFromString(alertString, "application/xml");
    return alertDoc
};
