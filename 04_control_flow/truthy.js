// const userEmail="adarsh@google.com"
// if(userEmail){
//     console.log("Got user email"); 
// }else{
//     console.log("don't have user email");
// }

//empty string:
// const userEmail=""
// if(userEmail){
//     console.log("Got user email"); 
// }else{
//     console.log("don't have user email");
// }

//empty array:
const userEmail=[]
if(userEmail){
    console.log("Got user email"); 
}else{
    console.log("don't have user email");
}

//FALSY VALUES:false,0,-0,Bigint(0n),"",null,undefined,Nan
//eveything except falsy values are truthy values
//TRUTHY VALUES:"0",'FALSE'," ",[],{},function(){}[empty function].



//TO CHECK ARRAY:
if(userEmail.length===0){
    console.log("array is empty");
}

//TO CHECK EMPTY OBJECT:
const emptyObject={}
if(Object.keys(emptyObject).length===0){
            console.log("object is empty");   
}