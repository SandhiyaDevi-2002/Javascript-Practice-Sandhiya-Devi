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


// Print numbers from 1 to N (for loop)

const readline = require("readline");

    
    const r1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    

    r1.question("enter N value : ",function(n){;
    for(let i =0;i<=n;i++){
        console.log(i);
    }

    r1.close();
    })
