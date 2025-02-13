var languageData = {
	"About Me Questions":{
		"Attribute List":[
			{
				"name": "Question 1",
				"question": "What is your name?",
				"answer": "Zachary Gover",
			},
			{
				"name": "Question 2",
				"question": "What is your chat user name, including the host?",
				"answer": "Skype: zachary1748",
			},
			{
				"name": "Question 3",
				"question": "In which time zone do you reside?",
				"answer": "Central Standard Time",
			},
			{
				"name": "Question 4",
				"question": "Why are you in the Mobile Development Program?",
				"answer": "Society is moving towards mobile and everyone wants to be able to takes things on the go.",
			},
			{
				"name": "Question 5",
				"question": "How comfortable are you with Javascript?",
				"answer": "Very comfortable",
			},
			{
				"name": "Question 6",
				"question": "How comfortable are you with Titanium?",
				"answer": "Comfortable; Growing everyday.",
			},
			{
				"name": "Question 7",
				"question": "What is your favorite food?",
				"answer": "Pizza and BBQ",
			},
			{
				"name": "Question 8",
				"question": "Do you have any pets?",
				"answer": "2 Bearded Dragons; One male and one female.",
			},
			{
				"name": "Question 9",
				"question": "What are your hobbies?",
				"answer": "Web Design & Development, Mobile Development, Frisbee Golf and Video Games.",
			},
			{
				"name": "Question 10",
				"question": "What are your hobbies?",
				"answer": "Web Design & Development, Mobile Development, Frisbee Golf and Video Games.",
			},
			{
				"name": "Question 11",
				"question": "What are your hobbies?",
				"answer": "Web Design & Development, Mobile Development, Frisbee Golf and Video Games.",
			},
			{
				"name": "Question 12",
				"question": "What is your favorite movie?",
				"answer": "Forrest Gump.",
			},
			{
				"name": "Question 13",
				"question": "Who is your favorite actor/actress?",
				"answer": "Jason Statham",
			},
			{
				"name": "Question 14",
				"question": "What is your favorite TV show?",
				"answer": "Rules of Engagment",
			},
			{
				"name": "Question 15",
				"question": "What is your favorite group or who is your favorite musician?",
				"answer": "Jason Aldean",
			}
		]
	}
};

var showDescription = function(dataSource){
	var descriptionWindow = Ti.UI.createWindow ({
		title: dataSource.winTitle,
		backgroundColor: "fff",
		layout: "vertical"
	});
	var questionText = Ti.UI.createLabel ({
		text: dataSource.title,
		top: 30,
		left: 20,
		right: 20,
		color: "333",
		font: {fontSize: "16", fontFamily: "Arial",fontWeight: "bold"}
	});
	var answerText = Ti.UI.createLabel ({
		text: dataSource.answer,
		top: 30,
		left: 20,
		right: 20,
		color: "333",
		font: {fontSize: "16", fontFamily: "Arial"}
	});
	descriptionWindow.add(questionText,answerText);
	navWindow.openWindow(descriptionWindow);
};

var aboutMeSections = [];
for (var n in languageData){
	// Custom Header
	var customHeader = Ti.UI.createView ({
		height: 40
	});
	var chText = Ti.UI.createLabel ({
		text: n,
		left: 10,
		font: {fontWeight: "bold"}
	});
	customHeader.add(chText);
	
	// Custom Footer
	var customFooter = Ti.UI.createView ({
		height: 30
	});
	var cfText = Ti.UI.createLabel ({
		text: "List of Question and Answers",
		left: 10,
		font: {fontSize: 13},
		color: 333
	});
	customFooter.add(cfText);
	
	// Create Section and rows
	var currentSection = Ti.UI.createTableViewSection ({
		headerView: customHeader,
		footerView: customFooter
	});
	for(var item in languageData[n]){
		for (var i = 0; i<languageData[n][item].length; i++){
			var currentRow = Ti.UI.createTableViewRow ({
				title: languageData[n][item][i].question,
				winTitle: languageData[n][item][i].name,
				answer: languageData[n][item][i].answer,
				hasChild: true
			});
			
			currentSection.add(currentRow);
		}
	}
	aboutMeSections.push(currentSection);
}
aboutMeTable.setData(aboutMeSections);
aboutMeTable.addEventListener("click", function(event){
	showDescription(event.source);
});