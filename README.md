TextAdventure-Base
=


An example that offers ideas on how to get started with a JavaScript-based HTML5 text adventure game.

Tips
-
* [11/25] ~~Ask yourself this question: How will I keep track of the where the player is currently located?~~ There are several ways, but perhaps the player knows - that is, could the player object have a property that indicates the current location?
* [11/26] ~~The player should only be able to pick up items that are present at the current location.~~ For example, how can you ensure that the player can only pick up a flashlight if there is one nearby? If you have already answered the question above (where is the player?) then you can use that... Modify the pickup function so that it checks it the target item is present in the player's current location, and only adds it to the list of items if it is present.

