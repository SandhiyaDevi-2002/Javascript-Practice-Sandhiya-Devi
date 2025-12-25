// Find GCD / HCF

const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Enter first number: ", function(a) {
    r1.question("Enter second number: ", function(b) {
        let num1 = Number(a);
        let num2 = Number(b);
        
        while (num2 !== 0) {
            let temp = num2;
            num2 = num1 % num2;
            num1 = temp;
        }

        console.log("GCD / HCF is:", num1);

        r1.close();
    });
});
