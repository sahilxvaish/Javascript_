//for loop
for (let i = 0; i < 11; i++) {
    const element = i;
    if (element == 5) {
        console.log(" is the best number");
    }
    console.log(element);

}

for (let i = 0; i <= 10; i++) {
    const element = array[i];
    console.log(`Outer loop vaue: ${i}`);
    for (let j = 0; j < 10; j++) {
        const element = array[j];
        console.log(`inner loop :${j}`);

    }
}