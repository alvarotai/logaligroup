sap.ui.define([
	"../localService/mockserver"
], function (mockserver) {
	//initalize the mock server
	mockserver.init();
	//initialize the embedded component on the HTML page
	sap.ui.require(["sap/ui/core/ComponentSupport"]);
});