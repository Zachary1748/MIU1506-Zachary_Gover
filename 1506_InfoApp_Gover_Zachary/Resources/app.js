var mainWindow = Ti.UI.createWindow ({
	title: "Informational App",
	backgroundColor: "#f0f0f0",
});

var navWindow = Ti.UI.iOS.createNavigationWindow ({
	window: mainWindow
});

var listings = Ti.UI.createTableView ({
	
});

if (Ti.Platform.name === "iPhone OS") {
	listings.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
}

var neededFiles = require("externalResources");

mainWindow.add(listings);
navWindow.open();
