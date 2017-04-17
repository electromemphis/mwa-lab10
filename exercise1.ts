class BankAccount{
    money: number;

    deposit(value){
        this.money = value;
    }
}

class User{
    name: string;
    bankAccount: BankAccount;
    hobbies: string[];

    constructor(name:string,hobbies:string[]){
        this.bankAccount=new BankAccount();
        this.name=name;
        this.hobbies=hobbies;
    }
     
}

let mySelf = new User("James",["basketball"]);
mySelf.bankAccount.deposit(100000);

console.log(mySelf);