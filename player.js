/*
NOTES:
    All comments inside each function body should
map closely to individual JavaScript statements.
    Also provided are suggested helper functions that
make it easier to write the functions below.
    These are just suggestions - your specific game
may or may not have each function shown here - that
will depend on your vision for how the game will work.
*/

// Global player object (can you make this not global?)
var player = {
    name: "", // set this when the player enters a name
    location: null, // set this when game starts, or set it here
    items: [],
    // add any othe properties as necessary here
}

// player functions - these are commands in the game

/*
    Take an item from the world and add it to the player.
    Helpful functions: Location.has, Location.remove, displayFeedback
*/
player.pickup = function(item) {
    // check whether the current location has the item
        // remove the item from the current location
        this.items.push(item);
    // otherwise
        // display feedback indicating that the item is not present
};

/*
  Put an item back into the world, removing it from the player.
  Helpful functions: Location.put, displayFeedback
*/
player.drop = function(item) {
    var pos = this.items.indexOf(item);
    if (pos >= 0) {
        this.items.splice(pos, 1);
        // after removing item from the player, add it to the current location
    } else {
        // display feedback indicating that the player doesn't have item
    }
};

/*
    Move the player around the map.
    Helpful functions: indexOfLocation, isConnected, displayFeedback
*/
player.go = function(locName) {
    var locNum; // set this to be the index of the new location
    // check whether the desired location is in the list of locations in the map
        // check if the player is already at the location they asked for
            // display feedback indicating the player is already here
        // otherwise check if the desired location is connected to the current location
            // if so, set the current location to be the new location
            // or... you might first perform other checks, like whether the player has the required items
        // otherwise
            // display feedback indicating that the new location is not reachable from the current location
    // otherwise
        // display feedback indicating that it is not a valid location
};

/*
    Uses and item in the player's possession.
    Examples might be using a crowbar to open a door, using a
    weapon to slay a zombie, using a key to unlock a door, etc.
*/
player.use = function(item) {
    // check first that the user has the item
        // then "use" the item... what this means or how it works depends on your game
    // otherwise
        // display feedback indicating that the player doesn't have this item
}
