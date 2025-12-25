// Check prime number


const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Enter a number to check if it is prime: ", function(a) {
    const num = Number(a); // convert input to number

    if (num <= 1) {
        console.log(num + " is not a prime number.");
    } else {
        let isPrime = true;

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(num + " is a prime number.");
        } else {
            console.log(num + " is not a prime number.");
        }
    }

    r1.close();
});
