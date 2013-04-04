function openDetail(e)
{
    var bananaCreamPieDetailWindow = 
       	Alloy.createController('BananasCreamPieDetail', 
       	{title: e.rowData.title, price: e.rowData.price}).getView('bananaCreamPieDetailView');
	Alloy.Globals.navcontroller.open(bananaCreamPieDetailWindow);
}