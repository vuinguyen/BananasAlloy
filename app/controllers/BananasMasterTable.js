function openDetail(e) {
	//alert('Selected: ' + e.rowData.title);
	if (e.rowData.title == 'Banana Cream Pie')
	{
		var bananaCreamPieMasterWindow =  
    		Alloy.createController('BananasCreamPieMaster').getView('bananaCreamPieView');
   		Alloy.Globals.navcontroller.open(bananaCreamPieMasterWindow);
	}
	else
	{
		alert('Price: $' + e.rowData.price);
	}
}


var data = [];
var bananasData = [
	{ title: 'Banana Cream Pie', price: '2.50', color: 'black', hasChild: true},
	{ title: 'Banana Bread', price: '5.00', color: 'black', hasChild: true},
	{ title: 'Strawberries and Bananas', price: '4.00', color: 'black', hasChild: true},
	{ title: 'Banana Split', price: '6.00', color: 'black', hasChild: true},
];
$.bananasMasterTable.setData(bananasData);

// Note: when we dynamically create the data this way instead of through the XML,
//  the rows do not get the styling automatically via app.tss