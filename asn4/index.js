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
var porkichu = new Dejimon("porkichu", dejiType.Potbelly, 170, 60, 90);
var dogychu = new Dejimon("Doggy", dejiType.Lean, 50, 100, 70);
var dejimons = [];
dejimons.push(porkichu, dogychu);
function searchDejiIndex(name) {
    for (var deji in dejimons) {
        if (name == dejimons[deji].name) {
            return deji;
        }
    }
}
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
    table.innerHTML = s;
}
function handleMoreInfo(e) {
    var name = e.target.parentNode.parentNode.children[0].innerHTML;
    console.log(name);
    var index = searchDejiIndex(name);
    updateInfoTable(dejimons[index]);
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
    var abilityScore = document.getElementById("score");
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
function addDejimon() {
    var name = document.getElementById("addName");
    var height = document.getElementById("addHeight");
    var weight = document.getElementById("addWeight");
    var type = document.getElementById("addType");
    var description = document.getElementById("addDescription");
    var ability = document.getElementById("addAbility");
    var overall = document.getElementById("addOverall");
    if (typeof name.value != "string" && name == "") {
        return alert("Please enter a valid name. ");
    }
    if (typeof parseInt(height.value) != "number" && isNaN(parseInt(height.value)) != null) {
        return alert("Please enter a valid height.");
    }
    if (typeof parseInt(weight.value) != "number" && parseInt(weight.value) != null) {
        return alert("Please enter a valid weight.");
    }
    if (typeof parseInt(ability.value) != "number" && parseInt(ability.value) != null) {
        return alert("Please enter a valid ability score.");
    }
    var newDeji = new Dejimon(name.value, type.value, parseInt(height.value), parseInt(weight.value), parseInt(ability.value));
    console.log(name.value, type.value, parseInt(height.value), parseInt(weight.value), parseInt(ability.value));
    dejimons.push(newDeji);
    updateMainTable();
    console.log(typeof name.value, typeof type.value, typeof parseInt(height), typeof parseInt(weight.value), typeof parseInt(ability.value));
}
function updateAbilityDescription(e) {
    var type = e.target.value;
    var description = document.getElementById("addDescription");
    console.log(type, description);
    if (type == "yorkshire") {
        description === null || description === void 0 ? void 0 : description.innerHTML = abilityDescription.Yorkshire + " Ability";
    }
    else if (type == "lean") {
        description === null || description === void 0 ? void 0 : description.innerHTML = abilityDescription.Lean + " Ability";
    }
    else {
        description === null || description === void 0 ? void 0 : description.innerHTML = abilityDescription.Potbelly + " Ability";
    }
}
updateMainTable();
