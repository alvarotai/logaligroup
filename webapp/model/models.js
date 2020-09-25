sap.ui.define([
	"sap/ui/model/json/JSONModel"
], function (JSONModel) {
	"use strict";

	return {
		createRecipient: function () {
			//set model on view
			var oData = {
				recipient: {
					name: "Word"
				}
			};
			//var oModel = new JSONModel(oData);
			return new JSONModel(oData);
		}
	};
});