// Create object using object literal
// Create object using constructor function
// Access object properties
// Add & delete object properties
// Iterate object using for…in
// Object with method
// Nested objects
// Object destructuring
// Convert object to array
// Clone an object

// Object with method

const person = {
    name: "Sandhya",
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

person.greet(); 
