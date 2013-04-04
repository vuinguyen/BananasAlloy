var NavigationController = require('NavigationController'); // use the NavigationController library
var navController = new NavigationController();
Alloy.Globals.navcontroller = navController;

var fruitMasterControl = Alloy.createController('FruitMaster');
var fruitMasterWindow = fruitMasterControl.getView('fruitMasterView');
Alloy.Globals.navcontroller.open(fruitMasterWindow);



/*
function doClick(e) {  
    alert($.label.text);
}

$.index.open();
*/
