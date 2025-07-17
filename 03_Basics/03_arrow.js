//this cureent conetxt ko refer krta h
const user={
    username:"hitesh",
    price:999,
    welcomemessage:function(){
        //console.log(`${this.username}, welcome to my website`);
        //console.log(this);
        
    }
}
user.welcomemessage()
user.username="sam"
user.welcomemessage()
//console.log(this)//gives empty object in node environment but different in console window-interview.
function chai(){
    //console.log(this);
}
chai()//agar function ke andar this keyword ko chalayenge to console window jaisa hi o/p dega.


//ARROW FUNCTION:
const cahi= () => {
        let username="hitesh"
        console.log(this.username);
}
cahi()//arrow function me this keyword use nhi hota h check the diff.b/w this and arrow function-interview

//const addtwo=(num1,num2)=>{
           // return num1+num2;
//}
//console.log(addtwo(3,4))

//IMPLICIT RETURN://curley bracket wala parenthesis hata dena h

const addtwo=(num1,num2)=> (num1+num2);

console.log(addtwo(3,4))
//we cant use this implicit return in object.