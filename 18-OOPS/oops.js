// const user = {
//     name: "Raka", // Properties of the user object
//     age: 21,

//     greet() {
//         console.log(`Hello, I'm ${this.name}`); // Method the user object
//     }
// };

// user.greet();

// Lets take a website with a 100 users

// Example 1:
// class Car{

//     constructor(brand, color) {
//         this.brand = brand;
//         this.color = color;
//     }

// }

// const car1 = new Car("Tesla", "Red");
// const car2 = new Car("Toyota", "Blue");
// const car3 = new Car("Mazda", "White");

// console.log(car1);
// console.log(car2);
// console.log(car3);

// Example 2
// class Vehc{

//     constructor(brand) {
//         this.brand = brand;
//     }

//     start() {
//         console.log(`${this.brand} started.`);
//     }

// }

// const sup = new Vehc("Mazda");

// sup.start();

// Example 2 - Constructor

// class User{

//     constructor(name, email, age, degree) {
//         this.name = name;
//         this.email = email;
//         this.age = age;
//         this.degree = degree;
//     }

// }

// const user1 = new User('Raka', 'raka2025@gmail.com', '23', 'CSIT');
// const user2 = new User('John', 'john2025@gmail.com', '22', 'BCA');

// console.log(user1);
// console.log(user2);


// Example 3 - Encapsulation
// class BankAccount {
//     constructor(owner, balance) {
//         this.owner = owner;
//         this.balance = balance;
//     }

//     deposit(amount) {
//         this.balance += amount;
//     }

//     withdraw(amount) {
//         this.balance -= amount;
//     }
// }

// const account = new BankAccount("Raka", 1000);

// account.deposit(500);
// account.withdraw(100);
// console.log(account.balance);

// Example 4 - Inheritance

// class User {

//     login() {
//         console.log("Logged in");
//     }

// }

// class Admin extends User {

//     deleteUser() {
//         console.log("User deleted");
//     }

// }

// const admin = new Admin();

// admin.login();

// admin.deleteUser();

// // and

// class Product {

//     constructor(name) {
//         this.name = name;
//     }

// }

// class Book extends Product {

// }


// const book = new Book("JavaScript Guide");

// console.log(book.name);

// Example 5 - Polymorphism
class Animal {

    speak() {
        console.log("Animal sound");
    }

}
class Dog extends Animal {

    speak() {
        console.log("Woof!");
    }

}

class Cat extends Animal {

    speak() {
        console.log("Meow!");
    }

}


const dog = new Dog();
const cat = new Cat();

dog.speak();
cat.speak();

class Notification {

    send() {
        console.log("Sending notification");
    }

}

class EmailNotification extends Notification {

    send() {
        console.log("Sending Email");
    }

}
class SMSNotification extends Notification {

    send() {
        console.log("Sending SMS");
    }

}

const email = new EmailNotification();
const sms = new SMSNotification();

email.send();
sms.send();