//IF STATEMENT:
//if(condition){ //condition should be true then only it can go inside the scope. 

//}
//Comparison Operators:< (less than);>,<=,>=,==(to check tww statementsa are equal or not),!=(not eqal).
//* ===(strict check two statements should be equal including their data types).
//* !==(strict inequality  :check Value is not equal ,Type is not equal).

//if-else:either if statement will execute or else both cant be executed .
// const temperature=41;
// if(temperature<50){
//     console.log("less than 50");
// }
// else{
//     console.log("greater than 50");
// }

// const balance=1000
// if(balance>500)console.log(test);//implicit scope 

//Nesting:[To check multiple condditions]

// const balance=1000
// if(balance<500){
//     console.log("less than 500");
// }else if(balance<750){
//     console.log("less than 750")
// }else if(balance<900){
//     console.log("less than 900")
// }else{
//     console.log("less than 1200")
// }


const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true
if(userLoggedIn && debitCard){
    console.log("allow to buy course")
}
//we use && to check multiple condition at one time none of them should be false agar
//ek bhi false hoga to execute nhi hoga
if(loggedInFromGoogle ||loggedInFromEmail){
    console.log("user logged in")
}
//we use || to check one of the condition should be true