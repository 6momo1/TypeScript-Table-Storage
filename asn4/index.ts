enum dejiType {
    Yorkshire = "Yorkshire",
    Lean = "Lean",
    Potbelly = "Potbelly"
}

enum abilityDescription {
    Yorkshire = "Water and Ice",
    Lean = "Fire and Charm",
    Potbelly = "Electric"
}

class Dejimon {
    name: string
    type: string
    height: number
    weight: number
    ability: number
    overall: number
    getAbility(){
        if (this.type == "Yorkshire"){
            return abilityDescription.Yorkshire
        } else if (this.type == "Lean"){
            return abilityDescription.Lean
        } else if (this.type == "Potbelly"){
            return abilityDescription.Potbelly
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






var porkichu = new Dejimon("porkichu",dejiType.Potbelly,170, 60, 90)
var dogychu = new Dejimon("Doggy",dejiType.Lean,50, 100, 70)

var dejimons:Array<Dejimon> = []
dejimons.push(porkichu, dogychu)









function searchDejiIndex(name:string){
    for(var deji in dejimons){
        if (name == dejimons[deji].name){
            return deji
        }
    }
}



function updateMainTable(){
    var table = document.getElementById("dejimons")
    var s = ''
    dejimons.forEach(dejimon => {
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




function handleMoreInfo(e){
    var name:string = e.target.parentNode.parentNode.children[0].innerHTML
    console.log(name)
    var index:number = searchDejiIndex(name)
    updateInfoTable(dejimons[index])
}

function handleDelete(e){
    console.log("delete dejimon clicked")
}

function handleAdd(e){
    console.log(e.target);
}

function updateInfoTable(dejimon:Dejimon){
    console.log(dejimon)
    var name:Element | null = document.getElementById("name")
    var height:Element | null = document.getElementById("height") 
    var weight:Element | null = document.getElementById("weight")
    var type:Element | null = document.getElementById("type")
    var abilityDescription:Element | null = document.getElementById("abilityDescription")
    var abilityScore:Element | null = document.getElementById("score")
    var overall:Element | null = document.getElementById("overall")
    name.innerHTML = dejimon.name
    height.innerHTML = dejimon.height.toString()
    weight.innerHTML = dejimon.weight.toString()
    type.innerHTML = dejimon.type
    abilityDescription.innerHTML = dejimon.getAbility() + " Ability"
    abilityScore.innerHTML = dejimon.ability.toString()
    overall.innerHTML = dejimon.overall.toString()
}

function hideCard(sectionId:string){
    var view:Element | null = document.getElementById(sectionId)
    view.style.display = "none"
}

function addDejimon(){
    var name:Element = (<HTMLInputElement>document.getElementById("addName"))
    var height:Element | null = (<HTMLInputElement>document.getElementById("addHeight"))
    var weight:Element | null = (<HTMLInputElement>document.getElementById("addWeight"))
    var type:Element | null = (<HTMLInputElement>document.getElementById("addType"))
    var description:Element | null = (<HTMLInputElement>document.getElementById("addDescription"))
    var ability:Element | null = (<HTMLInputElement>document.getElementById("addAbility"))    
    var overall:Element | null = (<HTMLInputElement>document.getElementById("addOverall"))

    if (typeof name.value != "string" && name == ""){
        return alert("Please enter a valid name. ")
    }
    if (typeof parseInt(height.value) != "number" && isNaN(parseInt(height.value))   != null){
        return alert("Please enter a valid height.")
    }
    if (typeof parseInt(weight.value) != "number" && parseInt(weight.value) != null){
        return alert("Please enter a valid weight.")
    }
    if (typeof parseInt(ability.value) != "number" && parseInt(ability.value) != null){
        return alert("Please enter a valid ability score.")
    }
    


    var newDeji = new Dejimon(
        name.value,
        type.value,
        parseInt(height.value),
        parseInt(weight.value),
        parseInt(ability.value)
    )
    
    console.log(
        name.value,
        type.value,
        parseInt(height.value),
        parseInt(weight.value),
        parseInt(ability.value)
    )

    dejimons.push(newDeji)


    updateMainTable()   


    console.log(
        typeof name.value,
        typeof type.value,
        typeof parseInt(height),
        typeof parseInt(weight.value),
        typeof parseInt(ability.value)
        )

}


function updateAbilityDescription(e){
    var type = e.target.value
    var description:Element | null = document.getElementById("addDescription")
    console.log(type, description)
    if (type == "yorkshire"){
        description?.innerHTML = abilityDescription.Yorkshire + " Ability"
    } else if (type == "lean"){
        description?.innerHTML = abilityDescription.Lean + " Ability"
    } else {
        description?.innerHTML = abilityDescription.Potbelly + " Ability"
    }
}

updateMainTable()