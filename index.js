"use strict";
var dejiType;
(function (dejiType) {
    dejiType["Yorkshire"] = "Yorkshire";
    dejiType["Lean"] = "Lean";
    dejiType["Potbelly"] = "Potbelly";
})(dejiType || (dejiType = {}));
var abilityDescription;
(function (abilityDescription) {
    abilityDescription["Yorkshire"] = "Water and Ice";
    abilityDescription["Lean"] = "Fire and Charm";
    abilityDescription["Potbelly"] = "Electric";
})(abilityDescription || (abilityDescription = {}));
class Dejimon {
    constructor(name, t, height, weight, ability) {
        this.name = name;
        this.type = t;
        this.height = height;
        this.weight = weight;
        this.ability = ability;
        this.overall = Math.round((height + weight + ability) / 3);
    }
    getAbility() {
        if (this.type == "Yorkshire") {
            return abilityDescription.Yorkshire;
        }
        else if (this.type == "Lean") {
            return abilityDescription.Lean;
        }
        else if (this.type == "Potbelly") {
            return abilityDescription.Potbelly;
        }
    }
}
function calcOverall(deji) {
    var overall = Math.round((deji.height + deji.weight + deji.ability) / 3);
    console.log(overall);
}
function searchDejiIndex(name) {
    for (var deji in dejimons) {
        if (name == dejimons[deji].name) {
            return deji;
        }
    }
    return -1;
}
var porkichu = new Dejimon("porkichu", dejiType.Potbelly, 170, 60, 90);
var dogychu = new Dejimon("Doggy", dejiType.Lean, 50, 100, 70);
// calcOverall(porkichu)
// porkichu.getAbility()
var dejimons = [];
dejimons.push(porkichu, dogychu);
// console.log(dejimons)
// searchDejiIndex("Doggy")
// console.log(dejimons[1].getAbility())
function updateMainTable() {
    var table = document.getElementById("dejimons");
    var s = '';
    dejimons.forEach(dejimon => {
        s += `
        <tr>
            <td>${dejimon.name}</td>
            <td>${dejimon.type}</td>
            <td><button onclick='handleMoreInfo(event)'>More Info</button></td>
            <td><button onclick='handleDelete(event)'>Delete</button></td>
        </tr>
        `;
    });
    table.innerHTML += s;
}
function handleMoreInfo(e) {
    console.log("more info button clicked");
}
function handleDelete(e) {
    console.log("delete dejimon clicked");
}
function handleAdd(e) {
    console.log(e.target);
}
function updateInfoTable(dejimon) {
    console.log(dejimon);
    var name = document.getElementById("name");
    var height = document.getElementById("height");
    var weight = document.getElementById("weight");
    var type = document.getElementById("type");
    var abilityDescription = document.getElementById("abilityDescription");
    var abilityScore = document.getElementById("abilityScore");
    var overall = document.getElementById("overall");
    name.innerHTML = dejimon.name;
    height.innerHTML = dejimon.height.toString();
    weight.innerHTML = dejimon.weight.toString();
    type.innerHTML = dejimon.type;
    abilityDescription.innerHTML = dejimon.getAbility() + " Ability";
    abilityScore.innerHTML = dejimon.ability.toString();
    overall.innerHTML = dejimon.overall.toString();
}
function hideCard(sectionId) {
    var view = document.getElementById(sectionId);
    view.style.display = "none";
}
// updateInfoTable(dejimons[1])
updateMainTable();
