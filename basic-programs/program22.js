// Print numbers from 1 to N (for loop)
// Print even numbers between 1 to 100
// Print odd numbers using while loop
// Use switch case for calculator (+, -, *, /)
// Menu-driven program using switch
// Check leap year
// Grade calculation using if–else
// Find smallest of N numbers
// Print star pattern (right triangle)
// Print inverted star pattern

// Print odd numbers using while loop

const readline = require("readline");
const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

r1.question("Enter number to find odd numbers : " , function(num) {
    num = Number(num);
    let i =0;
    while(i<=num)
    {
        if(i%2 != 0)
        {
            console.log(i + " is an odd Number");
            
        }
        i++;
    }
    r1.close();
})