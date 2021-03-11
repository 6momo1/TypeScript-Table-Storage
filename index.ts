enum dejiType {
    Yorkshire,
    Lean,
    Potbelly  
}

class Dejimon {
    name: string
    dejiType: dejiType
    height: number
    weight: number
    ability: number
    constructor(name:string,t:number,height:number,weigth:number,ability:number){
        this.name = name
        this.dejiType = t
        this.height = height
        this.weight = weigth
        this.ability = ability
    }
}

var porkichu = new Dejimon("porkichu",dejiType.Potbelly,170, 60, 90)
console.log(porkichu)

// class Yorkshire extends Dejimon{
//     //water and ice
//     ability: number
//     constructor(n:string,t:number,h:number,w:number,a:number){
//         super(n,t,h,w)
//         this.ability = a
//     }
// }
// class Lean extends Dejimon{
//     //fire and charm
//         ability: number
//     constructor(n:string,t:number,h:number,w:number,a:number){
//         super(n,t,h,w)
//         this.ability = a
//     }
// }
// class Potbellies extends Dejimon{
//     //electric 
//         ability: number
//     constructor(n:string,t:number,h:number,w:number,a:number){
//         super(n,t,h,w)
//         this.ability = a
//     }
// }