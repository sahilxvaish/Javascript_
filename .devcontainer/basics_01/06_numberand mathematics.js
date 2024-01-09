 const score = 400
 console.log (score);

 const balance = new Number(100)
 console.log(balance);
 console.log(balance.toString().length);
 console.log(balance.toFixed(1));   

 const othernumber = 1223.666

 console.log(othernumber.toPrecision(3));

 const hundreds = 1000000
 console.log(hundreds.toLocaleString('en-IN'));

//++++++++++++++++++ MATHS +++++++++++++++++++++++

 console.log(Math);
 console.log(Math.abs(-4));  //absolute value
 console.log(Math.abs(4)); 

 console.log(Math.round(4.6));  //round off the given value 

 console.log(Math.ceil(4.2));

 console.log(Math.floor(4.9));   //floor value 

 console.log(Math.min(4,5,3,7,2,));
 console.log(Math.max(5,4,3,6,8,1,9));

console.log(Math.random());
console.log((Math.random()*10)+1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1)))

