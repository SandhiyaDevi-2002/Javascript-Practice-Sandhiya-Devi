// 3)Find largest of two numbers

const readline = require("readline");
const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

r1.question("Enter number 1:  " ,function(a) {
    r1.question("Enter number 2 : " , function(b){
         a = Number(a);
         b = Number(b);
        if(a>b)
        {
            largest =a;
        }
        else{
            largest = b;
        }
        console.log("largest Number is : " + largest);
        r1.close();
    })
})