function capitalizeFirstLetter(string:string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function generateId(){
    return "id" + Math.random().toString(16).slice(2)
}