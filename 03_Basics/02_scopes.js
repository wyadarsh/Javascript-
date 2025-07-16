// let a=10;
// const b=20;
// var c=30;
//curley{}braces are known as scopes.
if(true){
    let a=10;
    const b=20;
    var c=30;
}
//if ke andar hmlog jo bhi leekh rhe h wo h block scope aur uske bahar jo bhi khuch leekh
//  rhe h wo h galobal socpe.globel scope me hm jo bhi value declare krte h usko sue kr skte h block 
// scope me but jo bhi value block scope me use hota h wo block scope ke bahar use nhi ho skta.

//console.log(a);//it will not print a because a is declared inside the scope not outside
//console.log(b);same b is declared inside the scope not outside
//console.log(c);//problem arises here when var c got printed outside the scope.

//Nested Scope:
function one(){
    const username="hitesh"
    function two(){
        const website="youtube"
        console.log(username); //it can acess function one bcoz funcn one is bigger functn.
    }
   //console.log(website);//it csnnot acess function two 
    two()
}
//one()


if(true){
    const username="hitesh"
    if(true){
        const website=" youtube"
       // console.log(username+website);
    }
    //console.log(website);
}
//console.log(username);


//Important example:
console.log(addone(5))//ye function ke declare hone se phle execute hojayega
function addone(num){
    return num+1;
}
//addone(5)


//console.log(addtwo(5))////ye function ke declare hone se phle execute nhi hoga kyunki aap
//  function ko ek varable me  store kr rhe ho.
const addtwo=function(num){
    return num+2;
}
//addtwo(5)