let a;
console.log('Before assignment : a = ' + a); // Before assignment : a = undefined
a=5;
console.log('After assignment : a = ' + a); // After assignment : a = 5
a=7;
console.log('After re-assignment : a = ' + a); // After re-assignment : a = 7

const b = 2;
console.log('Before re-assignment : b = ' + b); // Before re-assignment : b = 2
b=6;
console.log('After assignment : b = ' + b); //TypeError: Assignment to constant variable.