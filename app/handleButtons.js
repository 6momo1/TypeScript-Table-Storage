"use strict";
function handleMoreInfo(e) {
    //update Info Card
    var id = e.target.parentNode.parentNode.children[0].id;
    console.log(id);
    var deji = dejimons.get(id);
    updateInfoTable(deji);
    displayInfoOnly();
}
function handleDelete(e) {
    var id = e.target.parentNode.parentNode.children[0].id;
    dejimons.delete(id);
    updateMainTable();
}
function handleAdd() {
    displayAddOnly();
}
function handleReturn() {
    displayViewOnly();
}
