//kis tarah se data ko memory me rakha jata hai or kis tarah se acess kiya jata h us basis pe data 2 category me define hai

// 1.Primitive:call by value -jab bhi aap inko kahi se copy krte h to inka original data nhi diya jata h copy diya jata hai
//aur jo changes hota h copy me hota h na ki original data me
//7 types:string,number,boolean,null,undefined,symbol(uniqueness),bigint

// 2.non primitve data type:call by reference-You're giving the function access to the original variable, not just a copy
//array,objects,functions.

//javascript is dynamically typed language-you don’t need to declare the data type of a variable,he type is automatically determined at runtime

let x = 10;       // x is a number
x = "Hello";      // now x is a string
x = true;         // now x is a boolean

//1.Primitive Data Types Example:
const score=100;
const scoreValue=100.3;
const isLoggedIn=false;
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')//agar value bhi same pass karenge symbol tab bhi  returned value uniuqe dega;
console.log(id===anotherId);

//2.Non Primitive Data Types:
const heros=["shaktiman","nagraj","doga"];//arrays
//Objects:
let myObj={
    name:"Hitesh",
    age:22,
}
//Functions:
const myFunction=function(){
    console.log("hello world");
    
}

//https://262.ecma-international.org/5.1/#sec-11.4.3//read for interview



