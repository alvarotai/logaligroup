	sap.ui.define([
		"logaligroup/SAPUI5/localService/mockserver",
		"sap/ui/test/opaQunit",
		"./pages/App"
	], function (mockserver) {
		"use strict";
		QUnit.module("Navigation");
		opaTest("Should open the Hello Dialog", function (Given, When, Then) {
			//Initialize the moch server
			mockserver.init();
			// Arrangements
			Given.iStartMyUIComponent({
				componentConfig: {
					name: "logaligroup.SAPUI5"
				}
			});
			When.onTheAppPage.iSayHelloDialogButton();
			// Assertions
			Then.onTheAppPage.iSeeTheHelloDialog();
			//Cleanup
			Then.iTeardownMyApp();
		});
	});