function Location(name, descrip) {
    this.name = name;
    this.description = function() {
        return descrip;
    }
    this.items = [];
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
        new Location("Beach", "You are on a warm, sandy beach."),
        new Location("Cliffs", "Above you tower sheer cliffs 100 feet high."),
        new Location("Shack", "Before you is a shack, seemingly abandoned.")
    ],
    connections: [ [0, 0, 0], [0, 0, 0], [0, 0, 0] ]
};

// example of a different way to build the adjacency matrix
connect(map, 0, 1);
connect(map, 1, 2);
connect(map, 2, 0);

function testMap() {
    var j;
    console.log("The " + map.locations[0].name + " is adjacent to:");
    for (j in map.connections[0]) {
        if (map.connections[0][j] === 1) {
            console.log(" the " + map.locations[j].name);
        }
    }
}

testMap();

