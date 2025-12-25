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


// Print star pattern (right triangle)


const readline = require("readline");

    
    const r1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    

    r1.question("enter N value : ",function(n){

        n = Number(n);

        for(let i =0;i<=n;i++)
        {
              let row = ""; 
            for(let j = 1;j<=i;j++)
            {
                row += "* ";    
            }
            console.log(row);
            
          
        }
        r1.close();
    })