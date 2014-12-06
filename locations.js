/*
NOTES:
    All functions in this file are suggestions and use of the code below
is permissible and even encouraged. However, feel free to add/change/remove
anything you see here in your own games. And, if you decide you want to
write your own code from scratch, you are not required to use my code at all.
*/

/*
    Constructor used to create all the locations in the game.
    Notice that I have added an initialItems parameter so that
    we can start the location out with some items in it.
    You might need to add more parameters to this constructor
    if there are other properties that need initial values.
*/
function Location(name, descrip, initialItems) {
    this.name = name;
    this.description = function() {
        return descrip;
    }
    this.items = initialItems;
    // add any additional properties that you need, suggested ideas include:
    //  - a list of prerequisite items needed to enter the location
    //  - boolean variable to indicate locked/unlocked
    //  - boolean variable to indicate dark/illuminated
    //  - list of monsters/enemies/etc. in the location
    //  - anything else you can think of that work for your story!
}

// The Location functions below are a good start, buy you might well
// decide you need other functions to support additional properties,
// such as any prereqs, monsters, etc. that you add to your game.

Location.prototype.has = function(item) {
    // this will be like player.has from earlier examples
}

Location.prototype.remove = function(item) {
    // this will be a lot like player.drop
}

Location.prototype.put = function(item) {
    // this will be similar to the original version of player.pickup
}

/*
    NOTE: For the functions below, we could instead make them methods of our
    map object - then we could call them as map.connect(from,to)
*/ 

function indexOfLocation = function(map, locName) {
    // this should work like indexOf, but searches for a location whose name matches
}

function isConnected(map, from, to) {
    // check if there is a 1 in the corresponding cell of connections
}

// example - how to write a function that makes a path between two locations
function connect(map, from, to) {
    map.connections[from][to] = 1;
    map.connections[to][from] = 1;
}

function disconnect(map, from, to) {
    map.connections[from][to] = 0;
    map.connections[to][from] = 0;
}

// sample map - like the one you created during lab
var map = {
    locations: [
        new Location("Beach", "You are on a warm, sandy beach.", ["fishing net"]),
        new Location("Cliffs", "Above you tower sheer cliffs 100 feet high.", ["backpack", "handkerchief"]),
        new Location("Shack", "Before you is a shack, seemingly abandoned.", ["rope"])
    ],
    connections: [ [0, 0, 0], [0, 0, 0], [0, 0, 0] ]
};

// example of a different way to build the adjacency matrix
connect(map, 0, 1);
connect(map, 1, 2);
connect(map, 2, 0);

// little test function so we can get used to the matrix and see if it works
function testMap() {
    var j;
    console.log("The " + map.locations[0].name + " is adjacent to:");
    for (j in map.connections[0]) {
        if (map.connections[0][j] === 1) {
            console.log(" the " + map.locations[j].name);
        }
    }
}

//testMap(); // no need to have this anymore once we've tested it
