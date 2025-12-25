const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Enter the base number: ", function(baseInput) {
    r1.question("Enter the exponent: ", function(expInput) {
        const base = Number(baseInput);
        const exponent = Number(expInput);

        
        const result = Math.pow(base, exponent);

        console.log(`${base} raised to the power ${exponent} is: ${result}`);

        r1.close();
    });
});
