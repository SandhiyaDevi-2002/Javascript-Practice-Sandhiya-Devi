const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Enter first number: ", function(a) {
    r1.question("Enter second number: ", function(b) {
        let num1 = Number(a);
        let num2 = Number(b);
        let gcd = 1; 

      
        let min = num1 < num2 ? num1 : num2;

       
        for (let i = 1; i <= min; i++) {
            if (num1 % i === 0 && num2 % i === 0) {
                gcd = i; 
            }
        }

        console.log("GCD / HCF is:", gcd);
        r1.close();
    });
});
