"use strict";
function updateMainTable() {
    //populate the view table
    var table = document.getElementById("dejimons");
    var s = `<tr>
                <th scope="col">name</th>
                <th scope="col">Type</th>
                <th scope="col"> </th>
                <th scope="col"> </th>
            </tr>`;
    var dejiArray = dejimons.getAll();
    dejiArray.forEach(dejimon => {
        s += `
        <tr>
            <td id="${dejimon.id}">${dejimon.name}</td>
            <td>${dejimon.type}</td>
            <td><button onclick='handleMoreInfo(event)'>More Info</button></td>
            <td><button onclick='handleDelete(event)'>Delete</button></td>
        </tr>
        `;
    });
    table.innerHTML = s;
}
function updateInfoTable(dejimon) {
    //Get elements 
    var name = document.getElementById("name");
    var height = document.getElementById("height");
    var weight = document.getElementById("weight");
    var type = document.getElementById("type");
    var abilityDescription = document.getElementById("abilityDescription");
    var abilityScore = document.getElementById("score");
    var overall = document.getElementById("overall");
    //Update the elements
    name.innerHTML = dejimon.name;
    height.innerHTML = dejimon.height.toString();
    weight.innerHTML = dejimon.weight.toString();
    type.innerHTML = capitalizeFirstLetter(dejimon.type);
    abilityDescription.innerHTML = dejimon.getAbility() + " Ability";
    abilityScore.innerHTML = dejimon.ability.toString();
    overall.innerHTML = dejimon.overall.toString();
}
function addDejimon() {
    //Retrieve input from add Dejimon form
    var name = document.getElementById("addName");
    var height = document.getElementById("addHeight");
    var weight = document.getElementById("addWeight");
    var type = document.getElementById("addType");
    var ability = document.getElementById("addAbility");
    var overall = document.getElementById("addOverall");
    //Error handling for invalid text input
    if (name.value == "") {
        return alert("Please enter a valid name. ");
    }
    if ((height.value == "") || isNaN(parseInt(height.value))) {
        return alert("Please enter a valid height. ");
    }
    if ((weight.value == "") || isNaN(parseInt(weight.value))) {
        return alert("Please enter a valid weight. ");
    }
    if ((ability.value == "") || isNaN(parseInt(ability.value))) {
        return alert("Please enter a valid ability. ");
    }
    if (parseInt(ability.value) > 100 || parseInt(ability.value) < 0) {
        return alert("Please enter an ability value between 0 to 100.");
    }
    //create new Dejimon to add
    var newDeji = new Dejimon(generateId(), name.value, type.value, parseInt(height.value), parseInt(weight.value), parseInt(ability.value));
    //Add dejimon to local array
    dejimons.add(newDeji);
    //update view table
    updateMainTable();
    //reset the input boxes
    name.value = "";
    height.value = "";
    weight.value = "";
    ability.value = "";
    overall.innerHTML = "--Dynamic--";
    displayViewOnly();
}
function updateAbilityDescription(e) {
    //Dynamically update the ability description in Add Form
    var type = e.target.value;
    var description = document.getElementById("addDescription");
    console.log(type, description);
    if (type == "yorkshire") {
        description.innerHTML = abilityDescription.yorkshire + " Ability";
    }
    else if (type == "lean") {
        description.innerHTML = abilityDescription.lean + " Ability";
    }
    else {
        description.innerHTML = abilityDescription.potbelly + " Ability";
    }
}
//Update the overall score for the add dynamically
function updateOverallScore() {
    var height = document.getElementById("addHeight").value;
    var weight = document.getElementById("addWeight").value;
    var ability = document.getElementById("addAbility").value;
    var overall = document.getElementById("addOverall");
    //Calculate the overall score, then display it on the card
    var num = Math.round((parseInt(height) + parseInt(weight) + parseInt(ability)) / 3);
    if (isNaN(num)) {
        overall.innerHTML = "<p style='font-size:13px'>Please enter the height, weight, and the ability score to see the overall score.</p>";
    }
    else {
        overall.innerHTML = num.toString();
    }
}
