// Check even or odd


const readline = require("readline");
const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

r1.question("Enter number :  " ,function(a) {

    if(a%2==0)
    {
        console.log("Number is Even");
        
    }
    else {
        console.log("Number is Odd");
        
    }
    r1.close();
})
