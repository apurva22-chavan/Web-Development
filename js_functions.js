function nice(name){
    console.log("Hey "+ name + " you are nice!")
    console.log("Hey "+ name+ " you are good!")
    console.log("Hey "+ name +" your tshirt is nice!")
    console.log("Hey "+ name +" your course is good too!")
}
nice("Apurva")

// function sum(a,b){
//     console.log(a+b)
// }
// sum(3,5)

function sum(a,b,C=11){
    return a+b+c
}
result=sum(3,5)
result1=sum(13,5)
result2=sum(3,15)
console.log("The sum of these numbers is: ",result)
console.log("The sum of these numbers is: ",result1)
console.log("The sum of these numbers is: ",result2)
//function is reusable 


//ARROW FUNCTION
const func1=(x)=>{
    console.log("I am an arrow function",x)
}

func1(34);
func1(66);
func1(84);