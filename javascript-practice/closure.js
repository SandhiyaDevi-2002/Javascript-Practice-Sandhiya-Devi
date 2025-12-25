// A closue is created when a function remembers and access the variables of outer scope function 
// even after the outer function has finished its execution.
// function outer()
// {
//     let count =0;
//     function inner()
//     {
//         count++;
//         console.log(count);
        
//     }
//     return inner; //returns inner function 
// }

// const counter = outer();
// counter();
// counter();
// counter();

function Timer() {
    let message = "hello after 2 seconds";
    
    setTimeout(function () {
        console.log(message)},2000);
    }

    Timer();