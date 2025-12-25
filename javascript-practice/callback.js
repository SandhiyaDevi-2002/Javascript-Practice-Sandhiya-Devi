//A callback is a function passed to another function to be executed later, often used to handle asynchronous operations in JavaScrip

function greet(name , callback)
{
    console.log("hello " + name);
    callback();
}

function sayBye()
{
    console.log("goodbye");
    
}


greet("sandhya" , sayBye);