const myArr=[0,1,2,3,4,5]
//console.log(myArr[3]);
const myArr2=new Array(2,5,7,8,9)//we can also define array like this

/*aaray ke andar jab bhi hum copy operation perform krte h tb shallow copies banata h 
mtlb same reference point ko share krta h 
mtlb jo bhi change krenge original array me bhi change hoga*/

//Array Methods:
myArr.push(6)
//console.log(myArr);
myArr.pop()//array ke andar last value remove ho jayega
//console.log(myArr);
myArr.unshift(9)//array ke starting me value add ho jayega
//console.log(myArr);
myArr.shift()
//console.log(myArr);//array ke starting wala value ko remove kr dega

//console.log(myArr.includes(9));//boolean me answer dega(true or false)
//console.log(myArr.indexOf(9));//present nhi hua to -1 dega
//console.log(myArr.indexOf(3));//present hua to index dega

const newArr=myArr.join()/*array ko bind krdega aur array ko string me changr kr dega 
value same rhega uska type change hoajyega*/
// console.log(myArr);
// console.log(newArr);

//SLICE AND SPLICE:
console.log("A",myArr);
const n1=myArr.slice(1,3)//it will include index 1 and 2 not 3.
// there will be no change in the array.
console.log(n1);
console.log("B",myArr);

const n2=myArr.splice(1,3)//it will include from index 1 to index 3.
// there will be change in the array the splice part will be removed from the array.

console.log("c",myArr);
console.log(n2);







