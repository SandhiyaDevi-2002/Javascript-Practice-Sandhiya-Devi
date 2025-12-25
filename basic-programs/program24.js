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


// Check leap year


const readline = require("readline");
const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

r1.question("Enter Year to find Leap Year : " , function(year) {
    year = Number(year);
    if((year % 4 === 0 && year % 100 !=0 ) || (year %400 === 0))
    {
        console.log("Given Year is Leap");
        
    }
    else{
        console.log("GIven year is not a yeap year");
        
    }
r1.close();
})