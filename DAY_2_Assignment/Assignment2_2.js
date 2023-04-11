// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log(typeof ['This', 'is', 101]); //object
console.log(typeof new Date());  //object
console.log(typeof Array(4));  //object

let a;
console.log(typeof a);  //undefined
console.log(typeof b);  //undefined
console.log(typeof undefined);  //undefined

console.log(typeof Math.sqrt(2));  //number
console.log(typeof Infinity);  //number
console.log(typeof NaN);  //number, even though it is not a number
console.log(typeof Number('100'));  //number, After successfully parsed to number
console.log(typeof Number('Hello'));  //number, despite it cannot be parsed to a number

console.log(typeof null);  //object
console.log(typeof new Object);  //object

console.log(typeof true);  //boolean
console.log(typeof false);  //boolean

console.log(typeof new Boolean(true));  //object; 
console.log(typeof new Number(101));  //object; 
console.log(typeof new String('Hello'));  //object;

console.log(typeof 5);  //number
console.log(typeof +5);  //number
console.log(typeof -5);  //number

//check whether variable is array or not
let arr = [1, 2, 3];
console.log(Array.isArray(arr)); //true
console.log(arr instanceof Array);  //true
console.log(arr.constructor === Array); //true

//check whether variable is NaN or not
let var1 = 3;
let var2 = 'Text';
console.log(isNaN(var1)); //false
console.log(isNaN(var2)); //true