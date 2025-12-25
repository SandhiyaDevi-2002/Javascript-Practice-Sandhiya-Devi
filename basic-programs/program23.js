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

// Use switch case for calculator (+, -, *, /)


const readline = require("readline");
const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

r1.question("Enter number 1  : " ,function(num1){
r1.question("Choice number 2 : " ,function(num2){
r1.question("Choice Operator : " ,function(operator){

    a = Number(num1);
    b = Number(num2);

    switch(operator)
    {
        case '+' :
            console.log(a + b);
            break;
        case '-' : 
            console.log(a - b);
            break;
        case '*' :
            console.log(a * b);
            break;
        case '/' : 
            console.log(a / b);
            break;
        
        
    }
    r1.close();

})
})
})