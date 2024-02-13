// DOM document object model

//nested scope

function one() {
    const username = "sahil"

    function two (){
        const website = "youtube"
        console.log(username);                              // two can access value from one.
    }
    // console.log(website);

    two()
}

// one()               // this is also known as closure.
if (true) {
    const username = "sahil"
    if (username === "sahil") {
        const website = "youtube"
        console.log(username+website);

    }

    // console.log(website);

}

// console.log(username);




//++++++++++++++++++++++ intresting +++++++++++++++++++++++++++
console.log(addone(5))
function addone(num){
    return num + 1
}





const addtwo = function(num){
    return num + 2 
}

addtwo(5)




