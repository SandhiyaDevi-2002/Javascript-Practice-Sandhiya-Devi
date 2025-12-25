// Count digits in a number




const readline = require("readline");
const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

r1.question("Enter a Number to Sum : " , function(a) {

    a = Number(a);
    let count = 0;
    while(a>0){
      a = Math.floor(a/10);
      count++;
    }
    console.log(count);
    r1.close();
})