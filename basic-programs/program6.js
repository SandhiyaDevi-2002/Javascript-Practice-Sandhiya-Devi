// Check positive, negative, or zero


const readline = require("readline");
const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

r1.question("Enter number :  " ,function(a) {
 a = Number(a);
   if(a < 0){
    console.log("Given Number is Negative");
   }
   else if(a===0){
    console.log("Given Number is Zero");
   }
   else {
    console.log("Given Number is Positive");
    
   }
    r1.close();
})
