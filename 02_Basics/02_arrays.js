const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","flash","batman"]
//marvel_heros.push(dc_heros)
//not a good habit to merge two arrays
console.log(marvel_heros);

const all_heros=marvel_heros.concat(dc_heros)
console.log(all_heros);//concat returns a new array by merging both the arrays

//another way:SPREAD OPERATOR://we will use this bcoz it can addd more than 2 arrays
const all_new_heros=[...marvel_heros, ...dc_heros]
console.log(all_new_heros);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity);
console.log(real_another_array);



//important for interviews:
console.log(Array.isArray("hitesh"));
console.log(Array.from("hitesh"));//array bana dega
console.log(Array.from({name:"hitesh"}));
 let score1=100;
 let score2=200;
 let score3=300;
 console.log(Array.of(score1,score2,score3));
 

