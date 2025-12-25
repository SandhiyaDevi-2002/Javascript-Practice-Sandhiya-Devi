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


// Grade calculation using if–else


    const readline = require("readline");
    const r1 = readline.createInterface({
        input : process.stdin,
        output : process.stdout
    })
    
    
    r1.question("Enter Total Marks : " ,function(marks){

        marks = Number(marks);
        if(marks >90 && marks <= 100)
        {
            console.log("You are Grade A , Congradulations!!");
            
        }
        else if(marks > 80 && marks <=90 )
        {
            console.log("You are Grade B , Good!!");

        }
        else if(marks > 65 && marks <=80)
        {
            console.log("You are Grade C, All the best!!");

        }
        else {
            console.log("You are Grade D , Better luck next time!!");

        }
        r1.close();
    })