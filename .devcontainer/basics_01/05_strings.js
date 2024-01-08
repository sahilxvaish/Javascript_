const name = "sahil"
const repocount = 34

// console.log(name + repocount+ "Value")

console.log(`hello my name is ${name} and my repo count is ${repocount}`);


// second method 

const gamename = new String('sahil')



console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.length);

console.log(gamename.toUpperCase());
console.log(gamename.charAt('2'));
console.log(gamename.indexOf('h'));

const newString = gamename.substring(0, 4)
console.log(newString);

const anotherstring = gamename.slice(-5, 4);
console.log(anotherstring);

const newstringone ="   sahil     " 
console.log(newstringone);
console.log(newstringone.trim());

const url = "https://sahil.com/sahil%20vaish"
console.log(url.replace('%20', '_'))


console.log(url.includes('sahil'))
console.log(url.includes('yahhi'))


console.log(gamename.split('_'))



