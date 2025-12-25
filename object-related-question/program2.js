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


// Create object using constructor function


function Person(name, city) {
    this.name = name;
    this.city = city;
}

const person1 = new Person("Sandhya", "Salem");
console.log(person1.name); 
console.log(person1.city);
