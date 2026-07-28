const user = {
    name: "Raka",

    showName() {
        console.log(this.name);
    }
};

user.showName();

const user = {
    name: "Raka",

    showName() {
        console.log(this.name);
    }
};

const fn = user.showName;

fn();

const person = {
    name: "Emma",

    greet() {
        const sayHi = () => {
            console.log(this.name);
        };

        sayHi();
    }
};

person.greet();

const person = {
    name: "Emma",

    greet() {
        function sayHi() {
            console.log(this.name);
        }

        sayHi();
    }
};

person.greet();

const dog = {
    name: "Buddy",

    bark() {
        console.log(this.name);
    }
};

const cat = {
    name: "Whiskers",
    bark: dog.bark
};

cat.bark();

const person = {
    name: "Emma",

    greet: () => {
        console.log(this.name);
    }
};

person.greet();