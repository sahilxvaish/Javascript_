//control flow in js.

// if statement 
// const isuserloggedin = true
// const temprature =41 

// if (temprature === 40) {
//     console.log("less than 50 ");
// }else{
//     console.log("temprature is greater than 50");
// }
// console.log("Excute");

//<, >, <=, >=, ==, != .


// const score = 200

// if (score> 100) {
//     let power = "fly"
//     console.log(`user power: $(power)`);

// }
// console.log(`user power: $(power)`);


const balance = 1000

//if (balance >500) console.log("test");
//console.log("test2");


//nesting 

// if (balance < 500) {
//     console.log("less than 500");
// }else if (balance < 750){
//     console.log("less than 750");
// } else if (balance < 900){
//     console.log("less than 750 ");
// }else{
//     console.log("less than 1200");
// }



const userloggedin = true 
const debitcard = true
const loggedinfromgoogle = false
const loggedinfromemail = true
if (userloggedin && debitcard) {
    console.log("Allow to buy course");

}
if (loggedinfromgoogle || loggedinfromemail || guesuser) {
    console.log("User logged in")
}