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

function calcOverall(deji:Dejimon){
    var overall:number = Math.round((deji.height + deji.weight + deji.ability)/3)
    console.log(overall)
}

function searchDejiIndex(name:string){
    for(var deji in dejimons){
        if (name == dejimons[deji].name){
            return deji
        }
    }
    return -1
}

var porkichu = new Dejimon("porkichu",dejiType.Potbelly,170, 60, 90)
var dogychu = new Dejimon("Doggy",dejiType.Lean,50, 100, 70)
// calcOverall(porkichu)
// porkichu.getAbility()

var dejimons:Array<Dejimon> = []
dejimons.push(porkichu, dogychu)
// console.log(dejimons)
// searchDejiIndex("Doggy")
// console.log(dejimons[1].getAbility())

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
    table.innerHTML += s
}

function handleMoreInfo(e){
    console.log("more info button clicked")
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
    var abilityScore:Element | null = document.getElementById("abilityScore")
    var overall:Element | null = document.getElementById("overall")
    name.innerHTML = dejimon.name
    height.innerHTML = dejimon.height.toString()
    weight.innerHTML = dejimon.weight.toString()
    type.innerHTML = dejimon.type
    abilityDescription.innerHTML = dejimon.getAbility() + " Ability"
    abilityScore.innerHTML = dejimon.ability.toString()
    overall.innerHTML = dejimon.overall.toString()
}

function hideCard(sectionId){
    var view:Element | null = document.getElementById(sectionId)
    view.style.display = "none"
}

// updateInfoTable(dejimons[1])
updateMainTable()