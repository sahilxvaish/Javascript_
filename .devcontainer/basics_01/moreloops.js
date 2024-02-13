// for of loop 



const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`each char is ${greet}`);
}

//maps in js

const map = new Map()
map.set('IN', "India")
map.set('FR', "France")

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myobject = {
    'game1': 'NFS',
    'game 2': 'Spiderman'

}
