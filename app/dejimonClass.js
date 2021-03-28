"use strict";
var dejiType;
(function (dejiType) {
    dejiType["yorkshire"] = "yorkshire";
    dejiType["lean"] = "lean";
    dejiType["potbelly"] = "potbelly";
})(dejiType || (dejiType = {}));
var abilityDescription;
(function (abilityDescription) {
    abilityDescription["yorkshire"] = "Water and Ice";
    abilityDescription["lean"] = "Fire and Charm";
    abilityDescription["potbelly"] = "Electric";
})(abilityDescription || (abilityDescription = {}));
class Dejimon {
    constructor(id, name, t, height, weight, ability) {
        this.id = id;
        this.name = name;
        this.type = t;
        this.height = height;
        this.weight = weight;
        this.ability = ability;
        this.overall = Math.round((height + weight + ability) / 3);
    }
    getAbility() {
        if (this.type == "yorkshire") {
            return abilityDescription.yorkshire;
        }
        else if (this.type == "lean") {
            return abilityDescription.lean;
        }
        else if (this.type == "potbelly") {
            return abilityDescription.potbelly;
        }
    }
}
Dejimon.count = 0;
