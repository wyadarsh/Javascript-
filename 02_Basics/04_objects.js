//objects decalring using constructor

//const tinderUser= new Object()//singleton object
//another way to declare-
const tinderUser={}//non singleton obejct
//console.log(tinderUser);


tinderUser.id="123abc"
tinderUser.name="sam"
tinderUser.isLoggedIn="false"
//console.log(tinderUser);

//some methods of object:
// console.log(Object.keys(tinderUser));// O/P ka jo data type milega wo array hoga[v.important]
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));//Object.entries() is a method in JavaScript that gives you
//  both the keys and values of an object — in the form of an array of arrays.
//console.log(tinderUser.hasOwnProperty('isLoggedIn'));//gives answer in boolean


//objects inside obejct
const regularUser={
    email:"some@gmail.com",
    fullName:{
        userfullName:{
            firstName:"hitesh",
            lastname:"chaudhury"
        }
    }
}
//console.log(regularUser.fullName);

//combining obejcts:
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
//const obj3=Object.assign (obj1,obj2)
//console.log(obj3);
//another way to combine objects:Spread Operator
const obj3={...obj1,...obj2}
//console.log(obj3);

//Desturturing:
const course={
    coursename:"js in hindi",
    courseprice:"999",
    courseinstructor:"Hitesh Chaudhrury"
}
const{courseinstructor:instructor}=course
//console.log(courseinstructor);
console.log(instructor);

//json:
{
    "name":"hitesh",
    "coursename":"js in hindi",
    "price":"free"
}
//ignore these errors in json the key and value both should be in string
//json can also be in sorm of array
[
    {},
    {}
]