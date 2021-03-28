"use strict";
class DejiStorage {
    constructor() {
        //STORAGE MANAGEMENT FOR EASIER USE
        this.storage = window.localStorage;
    }
    add(deji) {
        //add dejimon to local storage
        this.storage.setItem(`${deji.id}`, JSON.stringify(deji));
    }
    get(id) {
        //return Dejimon object from a given name
        var deji = this.storage.getItem(id);
        var obj = JSON.parse(deji);
        var newDeji = new Dejimon(obj.id, obj.name, obj.type, obj.height, obj.weight, obj.ability);
        return newDeji;
    }
    delete(id) {
        //delete a Dejimon from a given name
        this.storage.removeItem(id);
    }
    getAll() {
        //returns an array of Dejimons
        var dejimons = [];
        for (let i = 0; i < this.storage.length; i++) {
            const key = this.storage.key(i);
            const value = this.get(key);
            var deji = new Dejimon(value.id, value.name, value.type, value.height, value.weight, value.ability);
            dejimons.push(deji);
        }
        return dejimons;
    }
}
