function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.tableRowView = Ti.UI.createTableViewRow({
        color: "black",
        hasChild: "true",
        id: "tableRowView"
    });
    $.addTopLevelView($.__views.tableRowView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    Ti.API.info("args.title is: " + args.title);
    $.tableRowView.title = args.title || "";
    $.tableRowView.price = args.price || "";
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;