//primtive 

// 7 types : String , number, boolean, null, unndefined, symbol, bigint, 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigint = 45254554255425512515n




// reference type (non primitive datatype)


// arrays, objects, functions.


const heros =("shaktimaan", "naagraj", "doga")
let myobj= {
    name: "sahil",
    age: 21,
}

const myFunction = function (){
    console.log("hello world")
}

console.log(typeof anotherId);

// stack (primitive) , heap (non primitive)


let  youtubechannel = "sahilvaish"

let anothername = youtubechannel
anothername = "codeidd"

console.log(youtubechannel);
console.log(anothername);

let user1 = {
    email: "google.com"
    upi: "user@ybl"

}

// let user2 = user1

user2.email = "sahil@google.com"

console.log(user1.email);
console.log(user2.email);