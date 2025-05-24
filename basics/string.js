let name = "vaidehi";
let age = 19;
 
// not preferable
//console.log("my name is"+" vaidehi" + " I am " + age + " old");

// preferable 
console.log(`my name is ${name} and i am ${19} years old`);

const gameName = "cricket";

console.log(gameName[0]);
// console.log(gameName.__proto__.);

console.log(gameName.length);
console.log(gameName.toLocaleLowerCase());
console.log(gameName.toLocaleUpperCase());
//check the position of the char 
console.log(gameName.charAt(2));
// reverse of char at 
console.log(gameName.indexOf("t"));

// slice the string last index will be not print 
const newString = gameName.slice(2,4);
console.log(newString);
// also can start from the negative value
// it will start from the end 
const anotherString = gameName.slice(-6,3);
console.log(anotherString);

//substring 
const newSting = gameName.substring(2,5);
console.log(newSting);

