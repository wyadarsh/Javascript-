const name="hitesh"
const repoCount=50
//console.log(name+repoCount+ " value");//this is an old way 
//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//this is the modern way.(string interpolation)

//String Object:
const gameName=new String('hiteshhc')
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const gameName2=new String('hitesh-hc')
const newstring=gameName2.substring(0,4)
console.log(newstring);

const anotherString=gameName2.slice(-8,4)
console.log(anotherString);

const newStringOne="   hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());///strating space aur end space dono ko hata deta h trim


const url="http://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))
console.log(url.includes('hitesh'));


console.log(gameName2.split('-'))//string array me convert ho jayega based on sperators.(here we used -)














