TextAdventure-Base
=


An example that offers ideas on how to get started with a JavaScript-based HTML5 text adventure game.

Tips
-
* [11/25] __Ask yourself this question: How will I keep track of the where the player is currently located?__ There are several ways, but perhaps the player knows - that is, the player object could have a property that indicates the current location.
* [11/26] __Make sure the player can pick up only items that are nearby.__ Currently, the player can pick up anything they wish, even items that aren't in the game! Clearly this is silly - how can you fix the situation? As long as you have dealt with the question above (where is the player?), then you can modify the pickup function to check whether the desired item is in the contents of the player's current location - if so, the pick it up as before, but if not then display an appropriate message and return.

