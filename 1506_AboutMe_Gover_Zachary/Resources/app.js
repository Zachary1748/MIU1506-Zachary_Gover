var mainWindow = Ti.UI.createWindow ({
	title: "About Me",
	backgroundColor: "#f0f0f0",
});

var navWindow = Ti.UI.iOS.createNavigationWindow ({
	window: mainWindow
});

var aboutMeTable = Ti.UI.createTableView ({});

if (Ti.Platform.name === "iPhone OS") {
	aboutMeTable.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
}

var neededFiles = require("externalResources");

mainWindow.add(aboutMeTable);
navWindow.open();
