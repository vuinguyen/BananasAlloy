function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.bananasMasterView = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "bananasMasterView",
        title: "Bananas"
    });
    $.addTopLevelView($.__views.bananasMasterView);
    $.__views.bananasMasterTable = Alloy.createController("BananasMasterTable", {
        id: "bananasMasterTable"
    });
    $.__views.bananasMasterTable.setParent($.__views.bananasMasterView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;