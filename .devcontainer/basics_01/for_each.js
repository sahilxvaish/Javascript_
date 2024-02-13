// for each loop

const coding = ["js", "java", "cpp"]

// coding.forEach( function (item){
//     console.log(item);
// })

// coding.forEach((item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })


const mycoding = [
    {
        languagename: "javascript",
        languagefilename: "js"
    },
    {
        languagename: "python",
        languagefilename: "py"

    },
    {
        languagename: "ruby",
        languagefilename: "rb"
    }
]

mycoding.forEach((item) =>{
    console.log(item.languagefilename);
})
