// Print all prime numbers between two numbers


const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Enter the starting number: ", function(startInput) {
    r1.question("Enter the ending number: ", function(endInput) {

        const start = Number(startInput);
        const end = Number(endInput);

        console.log(`Prime numbers between ${start} and ${end} are:`);

        for (let num = start; num <= end; num++) {
            if (num <= 1) continue; // skip 0 and 1

            let isPrime = true;

            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    isPrime = false;
                    break;
                }
            }

            if (isPrime) {
                console.log(num);
            }
        }

        r1.close();
    });
});
