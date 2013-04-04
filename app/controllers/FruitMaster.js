function openDetail(e) {  
    //alert(e.rowData.title);
    //alert('$' + e.rowData.price);
    if (e.rowData.title == 'Grapes')
    {
    	var grapesDetailWindow =  
    		Alloy.createController('GrapesDetail').getView('grapesDetailView');
   		Alloy.Globals.navcontroller.open(grapesDetailWindow);
    }
    else if (e.rowData.title == 'Bananas')
    {
    	var bananasMasterWindow =  
    		Alloy.createController('BananasMaster').getView('bananasMasterView');
   		Alloy.Globals.navcontroller.open(bananasMasterWindow);
    }
    else
    {
    	var fruitDetailWindow = 
       		Alloy.createController('FruitDetail', {title: e.rowData.title, price: e.rowData.price}).getView('fruitDetailView');
		Alloy.Globals.navcontroller.open(fruitDetailWindow);
	}
}

/*
var data = [];
var fruitTitles = ['Apples', 'Grapes', 'Oranges', 'Bananas', 'Pears', 'Kiwis'];
var fruitPrices = ['1.25', '1.50', '2.50', '1.50', '1.40', '1.00'];
var numTitles = fruitTitles.length;

for (var i = 0; i < numTitles; i++)
{
	var args = { title: fruitTitles[i], price: fruitPrices[i]};
	var row = Alloy.createController('Row', args).getView('tableRow');
	data.push(row);
}

$.fruitTable.setData(data);
*/
