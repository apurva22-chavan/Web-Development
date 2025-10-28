console.log("Hello I am conditional tutorial")

let age=45;
if(age>18){
    console.log("You can drive");
}
else if(age==0){
    console.log("Are you kidding?")
}
else{
    console.log("You cannot drive");
}

//block scope: the scope of let is block and variables created from it are block scope 
//if u create anything with where, then it creates variables of global scope
//so instead of using where, we will use let and const only

let a=17;
let g=2;
console.log(a+g)
if((a+g)>18){
    console.log("You can drive");
}
else{
    console.log("You cannot drive");
}


a = 6;
b = 8;
let c = a > b ? (a - b) :( b - a)

/*
translates to:
if(a>b){
    let c=a-b;
}
else{
    let c = a - b;
}
*/
