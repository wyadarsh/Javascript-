function addTwoNumbers(num1,num2){     //in the barckets the values are known as parameters.
// Here we are defining the function.
    //console.log(num1+num2);
    
}
addTwoNumbers(3,4); //values in the brackets are known as arguments.
addTwoNumbers(7,3); //here we are calling the functions.

//return type:
function addTwoNumbers(num1,num2){     
        return num1+num2;
}
const result=addTwoNumbers(5,3)
//console.log("Result:",result);



function loginUserMessage(username="sam"){
    if(!username){
       // console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("adarsh"));
//console.log(loginUserMessage());//agar khuch value pass nhi krenge to undefined ayega.


///Multiple values in function,we will use-
//REST OPERATOR ...//it will give all the arguments inside an arrray.
function calculateCartPrice(...num1){
        return num1;
}
//console.log(calculateCartPrice(5,4,80,988,2,388,120937491));

//Functions with objects:
const user={
    username:"hitesh",
    price:700
}
function handleObject(anyobject){
    //console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)


//Functions with arrays:
const myNewArray=[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
