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


// Menu-driven program using switch


const { log } = require("console");
const readline = require("readline");
const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})


r1.question("Enter Number of values to be in array : " , function(n){
    r1.question("Enter array Elements  : ", function(values){
       r1.question("Enter operation to be done by using array  : ", function(operator){

        n = Number(n);
        array = values.split(" ").map(Number);

         if (array.length !== n) {
            console.log("Please enter exactly", n, "values");
            r1.close();
            return;
        }
         console.log("\nMENU");
        console.log("1. Display Array");
        console.log("2. Find Smallest");
        console.log("3. Find Largest");
        console.log("4. Sum of Elements");
        console.log("5. Exit");
        
        operator = Number(operator);
        switch(operator)
        {
            case 1 : 
                array.forEach(arr => {
                    console.log(arr);
                });
                break;
            case 2 :
                let smallest = array[0];
               
                for(let i =0;i<=array.length;i++)
                {
                    if(array[i] < smallest)
                    {
                        smallest = array[i];
                    }
                    
                }
                console.log(smallest);
                
                break;
            case 3 : 
           
                
                let largest = array[0];
                for(let i =0;i<=array.length;i++)
                {
                    if(array[i] > largest)
                    {
                        largest = array[i];
                    }
                    
                }
                console.log(largest);

                break;
            case 4 :
                let sum = 0;
                array.forEach(arr => {
                    sum += arr;
                });
            
                console.log(sum);
                break;
            case 5 : 
                r1.close();
                return ;
                
        }

        r1.close();
    })
})
})