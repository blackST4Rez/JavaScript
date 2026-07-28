const user = {
    name: "Raka", // Properties of the user object
    age: 21,

    greet() {
        console.log(`Hello, I'm ${this.name}`); // Method the user object
    }
};

user.greet();

// Lets take a website with a 100 users

// Example 1:
class Car{

    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }

}

const car1 = new Car("Tesla", "Red");
const car2 = new Car("Toyota", "Blue");
const car3 = new Car("Mazda", "White");

console.log(car1);
console.log(car2);
console.log(car3);

// Example 2
class Vehc{

    constructor(brand) {
        this.brand = brand;
    }

    start() {
        console.log(`${this.brand} started.`);
    }

}

const sup = new Vehc("Mazda");

sup.start();

// Example 2
class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        this.balance -= amount;
    }
}

const account = new BankAccount("Raka", 1000);

account.deposit(500);
account.withdraw(100);
console.log(account.balance);