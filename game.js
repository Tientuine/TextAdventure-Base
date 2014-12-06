/*
NOTES:
    This file contains the overall game logic - including
functions that display output, drive the game loop, etc.
    You are not required to have all of these functions, nor
any of them - that is up to you. However, you are permitted to
use any of this code in your own solution, with whatever changes
and additions you need to make.
*/

/*
    Before starting the game proper, we might ask the user to enter some info.
    Note that this takes advantage of adding and removing event listeners.
    If we want the player to go through more than one intro screen, then
    instead of calling gameStart() we could call the next intro function.
    We can set up a series of these functions, and sort of bounce from one
    to the next through clever use of the listeners.
*/
function gameIntro() {
	var inputBox = document.querySelector("input");
	var listener = function(event){
		if (event.keyCode === 13) {
		    // remove this listener before continuing so it only runs once
		    event.target.removeEventListener(listener);
			customizePlayer(this.value);
			gameStart();
		}
	};
	inputBox.addEventListener("keyup", listener);
}

/*
    Start the main game loop.
*/
function gameStart() {
	var inputBox = document.querySelector("input");
	inputBox.addEventListener("keyup", function(event){
		if (event.keyCode === 13) {
			gameStep(this.value);
		}
	});
}

/*
    Run one pass of the game loop.
*/
function gameStep (input) {
	var cmd = interpret(input); // parse the user input
	var result = execute(cmd); // run the desired command
	report(result); // display the results on the screen
}

/*
    Parse the user's input and use it to customize certain player properties.
*/
function customizePlayer(input) {
    // here we should set the player's name and/or other properties
}

/*
    Parse and normalize the user input string.
*/
function interpret (input) {
    console.log("calling interpret"); // remove when finished debugging

    var cmd = {}, tokens = input.trim().toLowerCase().split(" ");
    cmd.action = tokens.shift();
    cmd.target = tokens.join(" ");
	return cmd;
}

/*
    Perform the desired player action.
*/
function execute (command) {
	console.log("calling execute"); // remove when finished debugging

	player[command.action](command.target);
}

/*
    Display any results/changes on the page.
*/
function report (result) { // note: parameter not currently used
	console.log('calling report'); // remove when finished debugging
	
	displayActions();
	displayInventory();
	displayScene();
}

/*
    Loop over each player method and add it to the Web page.
*/
function displayActions() {
    var field, action, actionList;

    actionList = document.querySelector("#help > ul");
    clearContent(actionList);

    for (field in player) {
        if (player[field] instanceof Function) {
            action = document.createElement("li");
            action.textContent = field;
            actionList.appendChild(action);
        }
    }
}

/*
    Loop over each inventory item and add it to the Web page.
*/
function displayInventory() {
    var i, item, inventory;

    inventory = document.querySelector("#inventory > ul");
    clearContent(inventory);

    for (i in player.items) {
        item = document.createElement("li");
        item.textContent = player.items[i];
        inventory.appendChild(item);
    }
}

/*
    Get the description of the player's current location and write it to the page.
*/
function displayScene() {
    // Hmmm... need to implement this function...
}

/*
    This is an example of recognizing the need for a helper function and then writing it!
    We could just set innerHTML to empty string - but this is better (more efficient)!
*/
function clearContent(node) {
    while (node.hasChildNodes()) {
        node.removeChild(node.firstChild);
    }
}

window.onload = gameStart; // game starts only after the page is loaded
