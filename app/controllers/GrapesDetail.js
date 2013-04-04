$.grapesDetailView.title = 'Window ' + Alloy.Globals.navcontroller.windowStack.length;

function addClick(e) 
{  
	Alloy.Globals.navcontroller.open(Alloy.createController('GrapesDetail').getView());
}

function homeClick(e)
{
	Alloy.Globals.navcontroller.home();
}

function addfhClick(e)
{
	Alloy.Globals.navcontroller.openFromHome(Alloy.createController('GrapesDetail').getView());
}