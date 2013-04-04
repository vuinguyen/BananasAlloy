function Controller() {
    function openDetail(e) {
        if (e.rowData.title == "Banana Cream Pie") {
            var bananaCreamPieMasterWindow = Alloy.createController("BananasCreamPieMaster").getView("bananaCreamPieView");
            Alloy.Globals.navcontroller.open(bananaCreamPieMasterWindow);
        } else alert("Price: $" + e.rowData.price);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.bananasMasterTable = Ti.UI.createTableView({
        id: "bananasMasterTable"
    });
    $.addTopLevelView($.__views.bananasMasterTable);
    openDetail ? $.__views.bananasMasterTable.addEventListener("click", openDetail) : __defers["$.__views.bananasMasterTable!click!openDetail"] = !0;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var data = [], bananasData = [ {
        title: "Banana Cream Pie",
        price: "2.50",
        color: "black",
        hasChild: !0
    }, {
        title: "Banana Bread",
        price: "5.00",
        color: "black",
        hasChild: !0
    }, {
        title: "Strawberries and Bananas",
        price: "4.00",
        color: "black",
        hasChild: !0
    }, {
        title: "Banana Split",
        price: "6.00",
        color: "black",
        hasChild: !0
    } ];
    $.bananasMasterTable.setData(bananasData);
    __defers["$.__views.bananasMasterTable!click!openDetail"] && $.__views.bananasMasterTable.addEventListener("click", openDetail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;