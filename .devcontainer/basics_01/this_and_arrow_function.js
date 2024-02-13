const user = {
    username: "sahil",
    price: 999,

    welcomemessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);                      //role in current values
    }

}

// user.welcomemessage()
// user.username = "sam"
// user.welcomemessage()
// console.log(this);   
//global object for js is window object.



// function chai(){
//     let username = "sahil"
//     console.log(this.username);
// }

// chai()



// arrow function

// const chai = function (){
//     let username = "hitesh"                         // this is normal function in js.
//     console.log(this.username);
// }

// chai()



const chai = () => {
    let username = "hitesh"
    console.log(this.username);                     //this is arrow function in js.
}

// chai()



//core arrow function


const addtwo = (num1, num2) =>  num1 + num2
console.log(addtwo(3, 4));                         //implicit return 



// const addtwo = (num1, num2) =>  (num1 + num2)    // explicit return
// console.log(addtwo(3, 4));


const myarr = [2, 5, 3, 7, 8]
myarr.forEach()