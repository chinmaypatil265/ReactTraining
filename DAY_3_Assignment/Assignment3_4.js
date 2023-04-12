let arraySize = 25
const array = [];

let i = 0;
while(i < arraySize){
    array.push(i+1);
    i++;
}

console.log(array)

//typically return us used to return a value from a functin. So in case where we need to come out of loop the use of return is not good practice and it should be avoided