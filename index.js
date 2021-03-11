"use strict";
var dejiType;
(function (dejiType) {
    dejiType[dejiType["Yorkshire"] = 0] = "Yorkshire";
    dejiType[dejiType["Lean"] = 1] = "Lean";
    dejiType[dejiType["Potbelly"] = 2] = "Potbelly";
})(dejiType || (dejiType = {}));
class Dejimon {
    constructor(name, t, height, weigth, ability) {
        this.name = name;
        this.dejiType = t;
        this.height = height;
        this.weight = weigth;
        this.ability = ability;
    }
}
var porkichu = new Dejimon("porkichu", dejiType.Potbelly, 170, 60, 90);
console.log(porkichu);
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
