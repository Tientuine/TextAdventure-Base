TextAdventure-Base
=


An example that offers ideas on how to get started with a JavaScript-based HTML5 text adventure game.

Tips
-
* [11/25] __Ask yourself this question: How will I keep track of the where the player is currently located?__ There are several ways, but perhaps the player knows - that is, the player object could have a property that indicates the current location.
* [11/26] __Make sure the player can pick up only items that are nearby.__ Currently, the player can pick up anything they wish, even items that aren't in the game! Clearly this is silly - how can you fix the situation? As long as you have dealt with the question above (where is the player?), then you can modify the pickup function to check whether the desired item is in the contents of the player's current location - if so, the pick it up as before, but if not then display an appropriate message and return.
* [12/2] __Don't hesitate to add functions to your Location objects.__ For example, in order to support the player's pickup function, it might be convenient if each Location had functions that could (a) check whether a given item is present, (b) remove an item, or (c) put an item back into the location. Then, when the player tries to "pickup" an item, the pickup function could first check if current location "has" the item - if it does, then "remove" that item from the location before adding it to the player's items list.
* [12/3] __The player will need some way to change locations, perhaps a "move" or "goto" function.__ So the player could enter a command like "goto Beach". This function should do at least two basic things - check whether the desired location is adjacent to the current location (if not, then tell the user so), and then update the player's current location if appropriate. If you have other criteria (e.g., each room requires a certain key) then you will need to add some additional logic here.
* [12/3] __Consider presenting the user with a list of adjacent locations.__ At each step of the game, after describing the current location, you might also tell the user where they can go from here. You could use the adjancency matrix (like we did in lab) to get the list of all neighboring locations.
