enum dejiType {
    yorkshire = "yorkshire",
    lean = "lean",
    potbelly = "potbelly"
}

enum abilityDescription {
    yorkshire = "Water and Ice",
    lean = "Fire and Charm",
    potbelly = "Electric"
}

class Dejimon {
    name: string
    type: string
    height: number
    weight: number
    ability: number
    overall: number
    getAbility(){
        if (this.type == "yorkshire"){
            return abilityDescription.yorkshire
        } else if (this.type == "lean"){
            return abilityDescription.lean
        } else if (this.type == "potbelly"){
            return abilityDescription.potbelly
        }
    }
    constructor(name:string,t:string,height:number,weight:number,ability:number){
        this.name = name
        this.type = t
        this.height = height
        this.weight = weight
        this.ability = ability
        this.overall = Math.round((height + weight + ability)/3)
    }
}



class DejiStorage{
    //STORAGE MANAGEMENT FOR EASIER USE
    storage = window.localStorage

    add(deji:Dejimon){
        //add dejimon to local storage
        this.storage.setItem(deji.name, JSON.stringify(deji))
        console.log(`${deji.name} added to storage.`)
    }

    get(name:string){
        //return Dejimon object from a given name
        var deji:string = <string>this.storage.getItem(name)
        console.log(`${name} returned.`)
        var obj = JSON.parse(deji)
        var newDeji:Dejimon = new Dejimon(obj.name,obj.type,obj.height,obj.weight,obj.ability)
        return newDeji
    }
    delete(name:string){
        //delete a Dejimon from a given name
        this.storage.removeItem(name)
        console.log(`${name} deleted.`)
    }

    getAll(){
        //returns an array of Dejimons
        var dejimons:Array<Dejimon> = []
        for (let i = 0; i < this.storage.length; i++) {
            const key:string = <string>this.storage.key(i)
            const value:Dejimon = this.get(key)
            var deji = new Dejimon(value.name,value.type,value.height,value.weight,value.ability)
            dejimons.push(deji)
        }
        return dejimons
    }
}



function updateMainTable(){
    //populate the view table
    var table:Element = <Element>document.getElementById("dejimons")
    var s = `<tr>
                <th scope="col">name</th>
                <th scope="col">Type</th>
                <th scope="col"> </th>
                <th scope="col"> </th>
            </tr>`

    var dejiArray = dejimons.getAll()
    dejiArray.forEach(dejimon => {
        s += `
        <tr>
            <td>${dejimon.name}</td>
            <td>${dejimon.type}</td>
            <td><button onclick='handleMoreInfo(event)'>More Info</button></td>
            <td><button onclick='handleDelete(event)'>Delete</button></td>
        </tr>
        `
    });
    table.innerHTML = s
}




function handleMoreInfo(e:Element){
    //update Info Card
    var name:string = e.target.parentNode.parentNode.children[0].innerHTML
    var deji = dejimons.get(name)
    updateInfoTable(deji)
    displayInfoOnly()
}

function handleDelete(e:Element ){
    var name:string = e.target.parentNode.parentNode.children[0].innerHTML
    dejimons.delete(name)
    updateMainTable()
}

function handleAdd(e:Element){
    displayAddOnly()
}


function handleReturn(e:Element){
    displayViewOnly()
}



function updateInfoTable(dejimon:Dejimon){
    //Get elements 
    var name:Element = <Element>document.getElementById("name")
    var height:Element = <Element>document.getElementById("height") 
    var weight:Element = <Element>document.getElementById("weight")
    var type:Element = <Element>document.getElementById("type")
    var abilityDescription:Element = <Element>document.getElementById("abilityDescription")
    var abilityScore:Element = <Element>document.getElementById("score")
    var overall:Element = <Element>document.getElementById("overall")

    //Update the elements
    name.innerHTML = dejimon.name
    height.innerHTML = dejimon.height.toString()
    weight.innerHTML = dejimon.weight.toString()
    type.innerHTML = capitalizeFirstLetter(dejimon.type)
    abilityDescription.innerHTML = dejimon.getAbility() + " Ability"
    abilityScore.innerHTML = dejimon.ability.toString()
    overall.innerHTML = dejimon.overall.toString()
    console.log(typeof dejimon)
}




function addDejimon(){

    //Retrieve input from add Dejimon form
    var name:HTMLInputElement = (<HTMLInputElement>document.getElementById("addName"))
    var height:HTMLInputElement = (<HTMLInputElement>document.getElementById("addHeight"))
    var weight:HTMLInputElement = (<HTMLInputElement>document.getElementById("addWeight"))
    var type:HTMLInputElement = (<HTMLInputElement>document.getElementById("addType"))
    var ability:HTMLInputElement = (<HTMLInputElement>document.getElementById("addAbility"))    
    var overall:HTMLInputElement = (<HTMLInputElement>document.getElementById("addOverall"))


    //Error handling for invalid text input
    if (name.value == ""){
        return alert("Please enter a valid name. ")
    }
    if ((height.value == "") || isNaN(parseInt(height.value)) ){
        return alert("Please enter a valid height. ")
    }
    if ((weight.value == "") || isNaN(parseInt(weight.value)) ){
        return alert("Please enter a valid weight. ")
    }
    if ((ability.value == "") || isNaN(parseInt(ability.value)) ){
        return alert("Please enter a valid ability. ")
    }
    if(parseInt(ability.value) > 100 || parseInt(ability.value) < 0){
        return alert("Please enter an ability value between 0 to 100.")
    }
    


    //create new Dejimon to add
    var newDeji = new Dejimon(
        name.value,
        type.value,
        parseInt(height.value),
        parseInt(weight.value),
        parseInt(ability.value)
    )

    //Add dejimon to local array
    dejimons.add(newDeji)

    //update view table
    updateMainTable()
    
    //reset the input boxes
    name.value = ""
    height.value = ""
    weight.value = ""
    ability.value = ""
    overall.innerHTML = "--Dynamic--"

    displayViewOnly()
}



function updateAbilityDescription(e:Element){
    //Dynamically update the ability description in Add Form
    var type = e.target.value
    var description:Element | null = <HTMLInputElement>document.getElementById("addDescription")
    console.log(type, description)
    if (type == "yorkshire"){
        description.innerHTML = abilityDescription.yorkshire + " Ability"
    } else if (type == "lean"){
        description.innerHTML = abilityDescription.lean + " Ability"
    } else {
        description.innerHTML = abilityDescription.potbelly + " Ability"
    }
}

//Update the overall score for the add dynamically
function updateOverallScore(){
    var height = (<HTMLInputElement>document.getElementById("addHeight")).value
    var weight = (<HTMLInputElement>document.getElementById("addWeight")).value
    var ability = (<HTMLInputElement>document.getElementById("addAbility")).value
    var overall = <HTMLInputElement>document.getElementById("addOverall")

    //Calculate the overall score, then display it on the card
    var num = Math.round((parseInt(height) + parseInt(weight) + parseInt(ability))/3)
    overall.innerHTML = num.toString()
}


function capitalizeFirstLetter(string:string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }



function displayViewOnly(){
    var view:Element = <Element>document.getElementById("viewSection")
    var add:Element = <Element>document.getElementById("addSection")
    var info:Element = <Element>document.getElementById("infoSection")

    view.style.display = "block"
    add.style.display = "none"
    info.style.display = "none"

    
}

function displayAddOnly(){
    var view:Element = <Element>document.getElementById("viewSection")
    var add:Element = <Element>document.getElementById("addSection")
    var info:Element = <Element>document.getElementById("infoSection")

    add.style.display = "block"
    view.style.display = "none"
    info.style.display = "none"
}

function displayInfoOnly(){
    var view:Element = <Element>document.getElementById("viewSection")
    var add:Element = <Element>document.getElementById("addSection")
    var info:Element = <Element>document.getElementById("infoSection")

    info.style.display = "block"
    add.style.display = "none"
    view.style.display = "none"
}

let dejimons = new DejiStorage()
updateMainTable()


//run the following code to test storage
// var porkichu = new Dejimon("porkichu",dejiType.potbelly,170, 60, 90)
// var dogychu = new Dejimon("Doggy",dejiType.lean,50, 100, 70)
// dejimons.add(porkichu)
// dejimons.add(dogychu)