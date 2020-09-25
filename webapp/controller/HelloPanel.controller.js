sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/core/Fragment"
], function (Controller, MessageToast, Fragment) {
	"use strict";

	return Controller.extend("logaligroup.SAPUI5.controller.HelloPanel", {
		onInit: function () {},
		onShowHello: function () {
			//read text from i18n / model
			var sHello = this.getView().getModel("i18n").getResourceBundle().getText("sayHello");
			var sName = this.getView().getModel().getProperty("/recipient/name");
			var sMesg = sHello.concat(" ").concat(sName);
			MessageToast.show(sMesg);
		},
		onOpenDialog: function () {
			this.getOwnerComponent().openHelloDialog();
		}
	});
});