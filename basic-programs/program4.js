// Find largest of three numbers


const readline = require("readline");
const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

r1.question("Enter number 1:  " ,function(a) {
    r1.question("Enter number 2 : " , function(b){
       r1.question("Enter number 3 : " , function(c){

         a = Number(a);
         b = Number(b);
         c = Number(c);


        const largest = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);

        console.log("largest of 3 numbers is : " + largest);
        r1.close();
    })
})
})