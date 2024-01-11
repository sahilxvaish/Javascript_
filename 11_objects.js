// // singleton

// // object literals

// //Object.create    //constructor method

// const mySym = Symbol;

// const Jsuser = {
//     "full name": "sahil",
//     age: 21,
//     location: "Gorakhpur",
//     email: "sahil@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]

// }

// console.log(Jsuser.email);
// console.log();


Jsuser.email = "sahil123@gmail.com"
Object.freeze(Jsuser)
Jsuser.email = "sahil123@micro.com"
console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello JS user");
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingtwo());



