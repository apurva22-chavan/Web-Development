// Array - Collection of Multiple Data Types 
//Arrays are variables which can hold more than one value

let arr=[1,2,4,5,7]

// console.log(arr);
// console.log(arr, typeof arr);
// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr[2]);
// console.log(arr[4]);

//strings are immutable and arrays are mutable 


console.log(arr.toString())
console.log(arr.join(" and "))

let a=[1,2,3,4,5,6]
console.log(a.pop());
console.log(a.pop()); //Removes last ele
console.log(a);
console.log(a.push(100));  //Add ele at the end 
console.log(a.push("Harry"));
console.log(a);
console.log(a.shift());  //Removes first ele 
console.log(a);
console.log(a.unshift("Jack"))
console.log(a)  //Add element in the front

delete a[4]
console.log(a) //Even after deleting the ele the length is 6 because memory is allocated but there is no value

let a1=[1,2,3]
let a2=[4,5,6]
let a3=[9,8,7]
console.log(a1.concat(a2,a3))

console.log(a.sort())

console.log(a1.splice(1,3))

console.log(a1.reverse())

let z=[1,93,5,6,88]

//for
for (let index = 0; index < z.length; index++) {
    const element = z[index];
    console.log(element)    
}


//forEach
z.forEach((value, index, arr)=>{
    console.log(value, index, arr)
})

let obj={
    a:1,
    b:2,
    c:3,
}

//forin
for (const key in obj) {
    if (!Object.hasOwn(obj, key)) continue;
    const element = obj[key];
    console.log(key, element)  
}


//forof
for (const value of z) {
    console.log(value)  
}


//Map- Creates a new array by performing some operations on each array element

let u=[1,13,5,7,11];
// let newArr=[]
// for (let index = 0; index < u.length; index++) {
//     const element = u[index];
//     newArr.push(element**2)   
// }

let newArr = u.map((e)=>{
    return e**2
})
console.log(newArr)

//filter- Filters an array with values that passes a test. Creates a new array
const greaterThanSeven=(e)=>{
    if(e>7){
        return true
    }
    return false
}
console.log(u.filter(greaterThanSeven))


//reduce method- Reduces an array to a single value
let arr2=[1,2,3,4,5,6]
const red=(a,b)=>{
    return a*b
}
console.log(arr2.reduce(red))

//Array.from- Used to create an array from any other object.
console.log(Array.from("Apurva"))

//for..of => for..of loop can be used to get the values from an array
//for..in => for..in loop can be used to get the keys from an array.

