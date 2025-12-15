// Working with CommonJS modules using require
// Working with ES6 modules using import
// Using require is synchoronous in nature
// To avoid synchoronous behavior, we use dynamic import() function
let Name = 'Eham'

function printName() {
    for (let i = 0; i < 50; i++)
        console.log(Name)
}

module.exports = printName; 