// part two (objects)

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "sahil"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularuser = {
    email: "some@mail.com",
    fullname:{
        userfullname:{
            firstname : "Sahil",
            lastnamme : "Vaish"
        }
    }

}

console.log(regularuser.fullname.userfullname.firstname);



const object1 = {1: "a" , 2: "b"}
const object2 = {3: "a" , 4: "b"}

// const obj3 = {obj1, obj2}

const object3 = {...object1, ...object2}  //spreading method on js 
// console.log(object3);



