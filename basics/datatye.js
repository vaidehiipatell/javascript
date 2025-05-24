// premetive - call by value (use the stack memory // change will in  the copy)
// -> string ,number,boolean , null ,undefined , symobole , bigInt

// js is the dynamically type 

//non premetive (use the heap memory // change in the original value )
// -> reference type
// array , objects , function 

const name = ["vaidehi" , "jenil" , "jay"];

const obj = {
    name : "vaidehi",
    age : 19,
    isTeen : false
};

const myfunction = function(){
    console.log("heyy guys");
};

console.log(myfunction());

let nameStudent = 'jenil';
console.log(nameStudent);

let myName = "vaidehipatel";
let anotherName = myName;
anotherName = "patel_vaidehi";

console.log(myName);
console.log(anotherName);
