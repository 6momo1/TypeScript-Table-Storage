function handleMoreInfo(e:any){
    //update Info Card
    var id:string = e.target.parentNode.parentNode.children[0].id
    console.log(id)
    var deji = dejimons.get(id)
    updateInfoTable(deji)
    displayInfoOnly()
}

function handleDelete(e:any){
    var id:string = e.target.parentNode.parentNode.children[0].id
    dejimons.delete(id)
    updateMainTable()
}

function handleAdd(){
    displayAddOnly()
}


function handleReturn(){
    displayViewOnly()
}