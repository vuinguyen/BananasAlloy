function Controller() {
    function openDetail(e) {
        var bananaCreamPieDetailWindow = Alloy.createController("BananasCreamPieDetail", {
            title: e.rowData.title,
            price: e.rowData.price
        }).getView("bananaCreamPieDetailView");
        Alloy.Globals.navcontroller.open(bananaCreamPieDetailWindow);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.bananaCreamPieView = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "bananaCreamPieView",
        title: "Banana Cream Pies"
    });
    $.addTopLevelView($.__views.bananaCreamPieView);
    openDetail ? $.__views.bananaCreamPieView.addEventListener("click", openDetail) : __defers["$.__views.bananaCreamPieView!click!openDetail"] = !0;
    $.__views.bananaCreamPieTable = Ti.UI.createTableView({
        id: "bananaCreamPieTable"
    });
    $.__views.bananaCreamPieView.add($.__views.bananaCreamPieTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var data = [], bananaSizes = [ "Small", "Medium", "Large" ], bananaPrices = [ "1.25", "1.50", "2.50" ], length = bananaSizes.length;
    for (var i = 0; i < length; i++) {
        var args = {
            title: bananaSizes[i],
            price: bananaPrices[i]
        }, row = Alloy.createController("Row", args).getView("tableRowView");
        data.push(row);
    }
    $.bananaCreamPieTable.setData(data);
    __defers["$.__views.bananaCreamPieView!click!openDetail"] && $.__views.bananaCreamPieView.addEventListener("click", openDetail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;