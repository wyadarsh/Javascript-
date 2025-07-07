/*objects ko declare krne ke 2 tarike hai:
1.literal=object singleton nhi banega
2.constructor=object singleton banega
singleton matlab apne tarah ka ek hi object h.*/
//Object.create:constructor method

//Object Literals:
const mySymbol=Symbol("key1")


 const jsUser={
    name:"Hitesh",
    "full name":"Hitesh Chaudhury",//you canot acess this with dot(.)
    [mySymbol]:"mykey1",//to use the symbol we have to put it in square brackets
    age:18,
    location:"jaipur",
    email:"hietsh@google.com",
    isLoggedIn:false,
    latsLoginDays:["monday","saturday"]
 } 
 //to acess the obejct:-1.dot
 //console.log(jsUser.email);
 //another way to acess the obejct:-2.squarebracket
// console.log(jsUser["email"]);
 //console.log(jsUser["full name"]);
 //console.log(jsUser[mySymbol]);


 jsUser.email="hitesh@chatgpt.com"//to change the value
// console.log(jsUser["email"]);
 // Object.freeze(jsUser)   //to freeze the value
  jsUser.email="hitesh@microsoft.com"
 //console.log(jsUser["email"]);

 //functions in object:
 jsUser.greeting=function(){
    console.log("hello js user");
 }
 jsUser.greeting2=function(){
    console.log(`hello jsuser,${this.name}`);//string interpolation jab " "ko ``me change kiye .
 }
 console.log(jsUser.greeting());
 console.log(jsUser.greeting2());
 //jab bhi hmlog same object ko reference krte h tb this ka use krte h.
 
 

 
 
 
 