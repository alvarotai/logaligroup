sap.ui.define([
	"sap/ui/core/control",
	"sap/m/RatingIndicator",
	"sap/m/Label",
	"sap/m/Button"
], function (Control, RatingIndicator, Label, Button) {
	return Control.extend("logaligroup.SAPUI5.control.ProductRating", {
		metadata: {
			propesties: {
				value: {
					type: "float",
					defaultValue: 0
				}
			},
			aggregattions: {
				_rating: {
					type: "sap.m.RatingIndicator",
					multiple: false,
					visibility: "hidden"
				},
				_label: {
					type: "sap.m.Label",
					multiple: false,
					visibility: "hidden"
				},
				_button: {
					type: "sap.m.Button",
					multiple: false,
					visibility: "hidden"
				}
			},
			events: {
				change: {
					parameter: {
						value: {
							type: "int"
						}
					}
				}
			}

		},
		init: function () {
			this.setAggregation("_rating", new RatingIndicator({
				value: this.getValue(),
				iconSize: "2rem",
				visualMode: "Half",
				liveChange: this._onRate.Bind(this)
			}));
			this.setAggregation("_label", new Label({
				text: "productRatingLabelInitial"
			}));
			this.setAggregation("_button", new Button({
				text: "productRatingButton",
				press: this._onSubmit.bind(this)
			}));
		},
		_onRate: function (oEvent) {
			var oResourceBundle = this.getModel("i18n").getResourceBundle();
			var fValue = oEvent.getParameter("value");
			this.setProperty("value", fValue, true);
			this.getAggregation("_label").setText(oResourceBundle.getText("productRatingIndicator", [fValue, oEvent.getSource().getMaxValue()]));
			this.getAggregation("_label").setDesing("Bold");
		},
		_onSubmit: function (oEvent) {
			var oResourceBundle = this.getModel("i18n").getResourceBundle();
			this.getAggregation("_rating").setEnabled(false);
			this.getAggregation("_label").setText(oResourceBundle.getText("productRatingLabelFinal"));
			this.getAggregation("_button").setEnabled(false);
			this.fireEvent("change", {
				value: this.getValue()
			});
		},
		render: function (oRe, oControl) {

		}
	});
});