if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to QRScanPhonegap.";
  };

Template.hello.events({
    'click input': function () {
        // template data, if any, is available in 'this'
        if (typeof console !== 'undefined')
            console.log("You pressed the button");

        qrscanner = window.plugins.barcodeScanner;

        qrscanner.scan(
          function (result) {
              Meteor.call("printToConsole", JSON.stringify(result));
              console.log("We got a barcode\n" +
                    "Result: " + result.text + "\n" +
                    "Format: " + result.format + "\n" +
                    "Cancelled: " + result.cancelled);
          }, 
          function (error) {
              console.log("Scanning failed: " + error);
        });
    }
  });
}
