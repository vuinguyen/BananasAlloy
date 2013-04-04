function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.fruitDetailView = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "fruitDetailView",
        title: "Fruit Price"
    });
    $.addTopLevelView($.__views.fruitDetailView);
    $.__views.fruitDetailLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        text: "Default Text",
        id: "fruitDetailLabel"
    });
    $.__views.fruitDetailView.add($.__views.fruitDetailLabel);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    Ti.API.info("args.price is: " + args.price);
    $.fruitDetailLabel.text = "$" + args.price;
    $.fruitDetailView.title = args.title;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;