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


// Print even numbers between 1 to 100

const readline = require("readline");
const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})


r1.question("Enter starting number num1 : " ,function(num1){
    r1.question("Enter ending number num2 : ", function(num2){
        num1 = Number(num1);
        num2 = Number(num2);

        for(let start  = num1 ; start <= num2 ; start++ )
        {
            if(start %2 === 0){
                console.log(start);
                
            }
        }
        r1.close();
    })

})