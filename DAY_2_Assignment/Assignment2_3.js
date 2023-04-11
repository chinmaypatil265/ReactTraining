
let person = {
    name: 'Ram',
    age: 26
}

console.log(person) //{ name: 'Ram', age: 26 }

person.name = 'Suresh';
person.age = 28;
console.log(person); // { name: 'Suresh', age: 28 }

let personCopy = person;
console.log(personCopy); // { name: 'Suresh', age: 28 }

person = {
    name: 'Ramesh',
    age: 16
}
console.log(person); //{ name: 'Ramesh', age: 16 }

///////////////////////////////////////////////////

const vehicle = {
    model: 'Honda',
    year: 2022
}

console.log(vehicle) //{ model: 'Honda', year: 2022 }

vehicle.model = 'Suzuki';
vehicle.year = 2011;
console.log(vehicle); // { model: 'Suzuki', year: 2011 }

let vehicleCopy = vehicle;
console.log(vehicleCopy); // { model: 'Suzuki', year: 2011 }

vehicle = {
    model: 'Aprilla',
    year: 2023
}
console.log(vehicle);//TypeError: Assignment to constant variable.

//From above examples the const keyword doesn't make the Object immutable, it just doesn't allow reassigning the value to the const variable whereas let allows to reassign value to variable

///////////////////////////////////////////////////

let arr1 = [1, 2, 3];
const arr2 = [11, 12, 13];

console.log(arr1);
console.log(arr2);

arr1[1] = 4;
arr2[1] = 4;

console.log(arr1); // [ 1, 4, 3 ]
console.log(arr2); // [ 11, 4, 13 ]

arr1 = [4, 5, 6]; 
console.log(arr1); // [ 4, 5, 6 ]

arr2 = [14 ,15 , 16];
console.log(arr2);  //TypeError: Assignment to constant variable.

//From above examples the const keyword doesn't make the Array immutable, it just doesn't allow reassigning the value to the const variable whereas let allows to reassign value to variable