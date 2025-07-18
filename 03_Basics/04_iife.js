//IIFE:IMEDIATELY INVOKED FUNCTION EXPRESSIONS:Function ko turant hi execute karana.
//WHY DO WE USE IIFE:1. To avoid polluting the global namespace.2.To run code immediately.

//syntax of iife:

//named iife:
(function chai(){
    console.log(`DB CONNECTED`);
})();//ek code ko kahatm krne ke liye iife me last me semicolon ka use krna hota h.

//iife with arrow function:
//unnamed iife
( (name)=>{
    console.log(`DB CONNECTED TWO ${name}`)
})('hitesh');