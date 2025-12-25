// Sum of digits of a number



const readline = require("readline");
const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

r1.question("Enter a Number to Sum : " , function(a) {

    a = Number(a);
    let sum =0;
    while(a>0)
    {
        digit = a % 10;
        sum +=digit;
        a = Math.floor(a / 10);
    }
    console.log("sum of number is : " + sum );
    r1.close();
    
})