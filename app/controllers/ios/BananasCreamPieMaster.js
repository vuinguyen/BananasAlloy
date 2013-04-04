function openDetail(e)
{
    var bananaCreamPieDetailWindow = 
       	Alloy.createController('BananasCreamPieDetail', 
       	{title: e.rowData.title, price: e.rowData.price}).getView('bananaCreamPieDetailView');
	Alloy.Globals.navcontroller.open(bananaCreamPieDetailWindow);
}

var data = [];
var bananaSizes = ['Small', 'Medium', 'Large'];
var bananaPrices = ['1.25', '1.50', '2.50'];
var length = bananaSizes.length;

for (var i = 0; i < length; i++)
{
	var args = { title: bananaSizes[i], price: bananaPrices[i] };
	var row = Alloy.createController('Row', args).getView('tableRowView');
	data.push(row);
}

$.bananaCreamPieTable.setData(data);