var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.dumpAll = function(obj) {
    for (var x in obj) Ti.API.log(x + ":" + obj[x]);
};

Alloy.createController("index");