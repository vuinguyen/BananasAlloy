function Controller() {
    function openDetail(e) {
        if (e.rowData.title == "Grapes") {
            var grapesDetailWindow = Alloy.createController("GrapesDetail").getView("grapesDetailView");
            Alloy.Globals.navcontroller.open(grapesDetailWindow);
        } else if (e.rowData.title == "Bananas") {
            var bananasMasterWindow = Alloy.createController("BananasMaster").getView("bananasMasterView");
            Alloy.Globals.navcontroller.open(bananasMasterWindow);
        } else {
            var fruitDetailWindow = Alloy.createController("FruitDetail", {
                title: e.rowData.title,
                price: e.rowData.price
            }).getView("fruitDetailView");
            Alloy.Globals.navcontroller.open(fruitDetailWindow);
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.fruitMasterView = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "fruitMasterView",
        title: "Fruits"
    });
    $.addTopLevelView($.__views.fruitMasterView);
    $.__views.__alloyId0 = Ti.UI.createTableViewRow({
        color: "black",
        hasChild: "true",
        title: "Apples",
        price: "1.25",
        id: "__alloyId0"
    });
    var __alloyId1 = [];
    __alloyId1.push($.__views.__alloyId0);
    $.__views.__alloyId2 = Ti.UI.createTableViewRow({
        color: "black",
        hasChild: "true",
        title: "Grapes",
        price: "1.50",
        id: "__alloyId2"
    });
    __alloyId1.push($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createTableViewRow({
        color: "black",
        hasChild: "true",
        title: "Oranges",
        price: "2.50",
        id: "__alloyId3"
    });
    __alloyId1.push($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createTableViewRow({
        color: "black",
        hasChild: "true",
        title: "Bananas",
        price: "1.50",
        id: "__alloyId4"
    });
    __alloyId1.push($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createTableViewRow({
        color: "black",
        hasChild: "true",
        title: "Pears",
        price: "1.40",
        id: "__alloyId5"
    });
    __alloyId1.push($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createTableViewRow({
        color: "black",
        hasChild: "true",
        title: "Kiwis",
        price: "1.00",
        id: "__alloyId6"
    });
    __alloyId1.push($.__views.__alloyId6);
    $.__views.fruitTable = Ti.UI.createTableView({
        data: __alloyId1,
        id: "fruitTable"
    });
    $.__views.fruitMasterView.add($.__views.fruitTable);
    openDetail ? $.__views.fruitTable.addEventListener("click", openDetail) : __defers["$.__views.fruitTable!click!openDetail"] = !0;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.fruitTable!click!openDetail"] && $.__views.fruitTable.addEventListener("click", openDetail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;