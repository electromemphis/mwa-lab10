var BankAccount = (function () {
    function BankAccount() {
    }
    BankAccount.prototype.deposit = function (value) {
        this.money = value;
    };
    return BankAccount;
}());
var Person = (function () {
    function Person(name, hobbies) {
        this.bankAccount = new BankAccount();
        this.name = name;
        this.hobbies = hobbies;
    }
    return Person;
}());
var mySelf = new Person("James", ["basketball"]);
mySelf.bankAccount.deposit(100000);
console.log(mySelf);
