// dates

//let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocalString());
// console.log(typeof myDate);

//let myCreatedDate = new Date(2023, 0, 23)
//console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("01-09-2024")
let myTimestamp = Date.now()

console.log(myTimestamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));



let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());


newDate.toLocaleString('default',{
    weekday: "long",
})



