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
    static count = 0
    id: string
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
    constructor(id:string, name:string,t:string,height:number,weight:number,ability:number){
        this.id = id
        this.name = name
        this.type = t
        this.height = height
        this.weight = weight
        this.ability = ability
        this.overall = Math.round((height + weight + ability)/3)
    }
}