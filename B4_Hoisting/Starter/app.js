var a = 'Hello World!';

function b() {
    console.log('Called B!')
}

b()
console.log(a);

// This will output
//Called B!
// Hello World!

// but if you do this:

b()
console.log(a);
var a = 'Hello World!';

function b() {
    console.log('Called B!')
}

// This will output
// Called B!
// undefined

// Javascript first reads your code and setup all var and function in memory
// So when the code executes, these already exist
// However durring the execution time, the var values are set. 
// Thats why you get a undefined!
// undefined is now a placeholder for var a
// All variables in JS are initialy set to undefined









