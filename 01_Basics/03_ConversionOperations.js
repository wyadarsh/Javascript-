let score="33"
//console.log(typeof(score));

let ValueInNumber=Number(score)//this will convert the string 33 into number 33
//console.log(typeof ValueInNumber);

let score2="33abc"
//console.log(typeof score2)//string
let ValueInNumber2=Number(score2)
//console.log(typeof ValueInNumber2)//number
//console.log(ValueInNumber2)//nan

//converting into number:
//"33"=33
//"33abc"=NaN
//true=1;false=0
//null=0
//undefined=NaN
//"hitesh"=NaN

//converting into boolean:
let isLoggedIn=1;
let booleanisLoggedIn=Boolean(isLoggedIn)
//console.log(booleanisLoggedIn);
//1=true
//0=false
//""=false(empty string)
//"hitesh"=true

//converting into string:
let someNumber=33;
let stringNumber=String(someNumber)
//console.log(stringNumber);
//console.log(typeof stringNumber);


//**************Operations********************
let value=3;
let negValue=-value;
//console.log(negValue)

//important things:
let str1="hitesh"
let str2=" adarsh"
let str3=str1+str2
// console.log(str3)

// console.log("1"+2)
// console.log(1+"2")
// console.log("1"+2+2)
// console.log(1+2+"2")

let gameCounter=100;
gameCounter++;//++gameCounter//learn about prefix and postfix pn js mdn
console.log(gameCounter);console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**3)//do star lagane se power me value aata h
console.log(2/2)
console.log(2%3)