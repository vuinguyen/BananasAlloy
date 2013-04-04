function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.bananaCreamPieDetailView = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "bananaCreamPieDetailView",
        title: "Banana Cream Pie Price"
    });
    $.addTopLevelView($.__views.bananaCreamPieDetailView);
    $.__views.bananaCreamPieDetailLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        text: "Default Text",
        id: "bananaCreamPieDetailLabel"
    });
    $.__views.bananaCreamPieDetailView.add($.__views.bananaCreamPieDetailLabel);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    Ti.API.info("args.price is: " + args.price);
    $.bananaCreamPieDetailLabel.text = "$" + args.price;
    $.bananaCreamPieDetailView.title = args.title;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;