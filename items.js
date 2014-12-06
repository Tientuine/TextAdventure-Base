/*
NOTES:
    This file may not be required in your game!
    This is a suggestion in response to some students' questions, such as
    how to make some items have "limited uses" or how to have weapons with
    different power/damage values.
    Depending on your own vision for your game, you might be just fine
    using Strings for your items (as we have up until now) and not using
    the ideas from this file at all.
*/

/*
    Constructor for an Item object.
    Feel free to add/change/remove properties and parameters as needed for your game.
*/
function Item(name, numUses, power) {
    this.name = name;
    this.uses = numUses;
    this.power = power;
}

// You might want to have some functions for your items... here are just a few suggestions.

Item.prototype.use = function() {
    this.uses--;
}

Item.prototype.usable = function() {
    return this.uses > 0;
}
