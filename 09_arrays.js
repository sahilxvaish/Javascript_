// array

const myArr = [0,1,2,3,4,5]
console.log(myArr);

const myheros = ["avengers","black panther","ironman"]
console.log(myheros[1]);

// const myArr2 = new Array[1, 2, 3, 4]
// console.log(myArr2[1]);

//array methods 

myArr.push(6) // adds further value in the given array in js.
myArr.push(7)
myArr.pop()

myArr.unshift(9) // inserts number starting in the given array.
myArr.shift()  // removes the number which get inserted by unshift.

console.log(myArr.includes(5));
console.log(myArr.indexOf(9));


const newArr = myArr.join()
console.log(myArr);
console.log(newArr);



// slice and splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C", myArr);
console.log(myn2);



