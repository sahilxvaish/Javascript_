// const myArr = [1,2,3,4,5]
// const myArr2 = [8,9,7,6,0]

// myArr.push(myArr2)
// console.log(myArr);
// myArr.concat(myArr2)
// console.log(myArr);

// const newArr = [...myArr, ...myArr2]  // spread 

// console.log(myArr);

const another_array = [1,2,3, [4,5,6], 7, [6,7,[4,5]]]
const real_array = another_array.flat(Infinity)
console.log(real_array);



console.log(Array.isArray("Sahil"));
console.log(Array.from("Sahil"));
console.log(Array.from({name: "Sahil"}));  // intresting case for interview

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //interesting



