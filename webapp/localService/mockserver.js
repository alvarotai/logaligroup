sap.ui.define([
	"sap/ui/core/util/MockServer",
	"sap/base/util/UriParameters"
], function (MockServer, UriParameters) {
	return {
		init: function () {
			//create;
			var oMockServer = new MockServer({
				/*eslint-disable sap-no-hardcoded-url */
				rootUri: "https://services.odata.org/V2/Northwind/Northwind.svc/"
			});
			//delay
			var oUriParameters = UriParameters.fromQuery(window.location.search);
			MockServer.config({
				autoRespond: true, // boolean
				autoRespondAfter: oUriParameters.get("serverDelay") || 500
			});
			//simule
			var sPath = "../localService/";
			oMockServer.simulate(sPath + "/test_metadata.xml", sPath + "/mockData");
			//start
			oMockServer.start();
		}
	};
});