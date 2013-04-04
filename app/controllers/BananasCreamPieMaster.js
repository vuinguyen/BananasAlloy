function openDetail(e)
{
	alert('Price: $' + e.rowData.price);
	/*
	alert('Title: ' + e.rowData.title + 
	'\nPrice: ' + e.rowData.customValue);*/
	//alert('Title: ' + e.source.parent.children[0].customValue);
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