const name = "Raka";
const surName = "Maharjan"; 

console.log(name + surName);

console.log(`Hello ! My name is ${name} ${surName}. I am 23 years old.`);

const gameName = new String("Football"); // not recommended 

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf("o"));

const newStr = gameName.substring(0,4);

console.log(newStr);

const anotherStr = gameName.slice(-8,4);

console.log(anotherStr);

const newString = "  Raka  ";

console.log(newString);
console.log(newString.trim());

const replaceStr = gameName.replace("Foot","Basket");

console.log(replaceStr);


