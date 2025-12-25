// Check Armstrong number

const readline = require("readline");
const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

r1.question("Enter a Number to find Armstrong : " , function(a) {
    num = Number(a);
    numDigits = a.length;
    let original = num;
    let sum = 0;

      while (num > 0) {
        let digit = num % 10;
        sum += Math.pow(digit, numDigits); 
        num = Math.floor(num / 10);       
    }

    if(sum === original)
    {
         console.log(a + " is an Armstrong number.");
    }
    else {
         console.log(a + " is not an Armstrong number.");
    }
    r1.close();
})