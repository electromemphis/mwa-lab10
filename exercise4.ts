class Person{

   private _firstname: string;
    
    get firstname(){
        return this._firstname;
    }

    set firstname(_firstname: string){
        this._firstname = _firstname;
    }
}

let person = new Person();
person.firstname = "James";

console.log(person.firstname);