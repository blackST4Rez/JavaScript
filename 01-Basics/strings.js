/*
const name = "Raka";
const surName = "Maharjan";

console.log(name + surName);
*/

/*
Template Literals
console.log(`Hello ! My name is ${name} ${surName}. I am 23 years old.`); 
there is string interpolation , here we inject straight variable name.
*/

/*
Prototype and Methods
const gameName = new String("Football"); // not recommended 

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf("o"));
*/

/*
Substring and Slice ()
gamename = 'Football'
Normal String  : F  o  o  t  b  a  l  l
Positive Index : 0  1  2  3  4  5  6  7
Negative Index :-8 -7 -6 -5 -4 -3 -2 -1

const newStr = gameName.substring(0,4); -- counts the first index(0) but does not count the last index(4) only upto index before it 
const anotherStr = gameName.slice(-8,4)
console.log(newStr);
console.log(anotherStr)

Trim
const newString = '    raka    ' -- there are spaces on the side of the word raka
console.log(newString);
console.log(newString.trim())-- trim method removes unrequired space

Replace
const replaceStr = gameName.replace("Foot","Basket")
console.log(replaceStr)

URL Replace
const url = "https://www.rakamaharjan.com.np/"
url.replace("https://","")
console.log(url);
console.log(url.replace("https://","").replace("/",""))

Split
const splitStr = "apple, banana, mango, orange"
const fruits = splitStr.split("-")
console.log(splitStr);
console.log(fruits)
*/


