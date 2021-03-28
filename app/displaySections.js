"use strict";
function displayViewOnly() {
    var view = document.getElementById("viewSection");
    var add = document.getElementById("addSection");
    var info = document.getElementById("infoSection");
    view.style.display = "block";
    add.style.display = "none";
    info.style.display = "none";
}
function displayAddOnly() {
    var view = document.getElementById("viewSection");
    var add = document.getElementById("addSection");
    var info = document.getElementById("infoSection");
    add.style.display = "block";
    view.style.display = "none";
    info.style.display = "none";
}
function displayInfoOnly() {
    var view = document.getElementById("viewSection");
    var add = document.getElementById("addSection");
    var info = document.getElementById("infoSection");
    info.style.display = "block";
    add.style.display = "none";
    view.style.display = "none";
}
