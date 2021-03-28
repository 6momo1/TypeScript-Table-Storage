class DejiStorage{
    //STORAGE MANAGEMENT FOR EASIER USE
    storage = window.localStorage

    add(deji:Dejimon){
        //add dejimon to local storage
        this.storage.setItem(`${deji.id}`, JSON.stringify(deji))
    }

    get(id:string){
        //return Dejimon object from a given name
        var deji:string = <string>this.storage.getItem(id)
        var obj = JSON.parse(deji)

        var newDeji:Dejimon = new Dejimon(obj.id,obj.name,obj.type,obj.height,obj.weight,obj.ability)
        
        
        return newDeji
    }

    delete(id:string){
        //delete a Dejimon from a given name
        this.storage.removeItem(id)
    }

    getAll(){
        //returns an array of Dejimons
        var dejimons:Array<Dejimon> = []
        for (let i = 0; i < this.storage.length; i++) {
            const key:string = <string>this.storage.key(i)
            const value:Dejimon = this.get(key)
            var deji = new Dejimon(value.id,value.name,value.type,value.height,value.weight,value.ability)
            dejimons.push(deji)
        }
        return dejimons
    }
} 