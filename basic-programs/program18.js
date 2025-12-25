const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Enter a number to print its multiplication table: ", function(a) {
    const num = Number(a);

    console.log(`Multiplication Table of ${num}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }

    r1.close();
});
