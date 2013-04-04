function Controller() {
    function addClick(e) {
        Alloy.Globals.navcontroller.open(Alloy.createController("GrapesDetail").getView());
    }
    function homeClick(e) {
        Alloy.Globals.navcontroller.home();
    }
    function addfhClick(e) {
        Alloy.Globals.navcontroller.openFromHome(Alloy.createController("GrapesDetail").getView());
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.grapesDetailView = Ti.UI.createWindow({
        layout: "vertical",
        backgroundColor: "white",
        id: "grapesDetailView"
    });
    $.addTopLevelView($.__views.grapesDetailView);
    $.__views.add = Ti.UI.createButton({
        color: "black",
        top: 20,
        width: 200,
        height: 50,
        id: "add",
        title: "Add A New Window"
    });
    $.__views.grapesDetailView.add($.__views.add);
    addClick ? $.__views.add.addEventListener("click", addClick) : __defers["$.__views.add!click!addClick"] = !0;
    $.__views.home = Ti.UI.createButton({
        color: "black",
        top: 20,
        width: 200,
        height: 50,
        id: "home",
        title: "Go to the Home Window"
    });
    $.__views.grapesDetailView.add($.__views.home);
    homeClick ? $.__views.home.addEventListener("click", homeClick) : __defers["$.__views.home!click!homeClick"] = !0;
    $.__views.addfh = Ti.UI.createButton({
        color: "black",
        top: 20,
        width: 200,
        height: 50,
        id: "addfh",
        title: "Open New From Home"
    });
    $.__views.grapesDetailView.add($.__views.addfh);
    addfhClick ? $.__views.addfh.addEventListener("click", addfhClick) : __defers["$.__views.addfh!click!addfhClick"] = !0;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.grapesDetailView.title = "Window " + Alloy.Globals.navcontroller.windowStack.length;
    __defers["$.__views.add!click!addClick"] && $.__views.add.addEventListener("click", addClick);
    __defers["$.__views.home!click!homeClick"] && $.__views.home.addEventListener("click", homeClick);
    __defers["$.__views.addfh!click!addfhClick"] && $.__views.addfh.addEventListener("click", addfhClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;