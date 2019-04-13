
// asks the user for two strings (of their first/last name) in a prompt window
let firstName = prompt("Please enter your first name","");
let lastName = prompt("Please enter your last name","");

// concatenates the person's first and last names and displays a message
alert(`Hi there, ${firstName} ${lastName}!`);

// declare the two number variables
let num1 = 0;
let num2 = 0;


// ask the user for a number for the first value. if they don't enter a number, ask them again
num1 = prompt("Please enter a number", 0);

while(isNaN(Number(num1, 10))) {
    num1 = prompt("Error! You didn't enter a number... Please enter a number", 0);
}

// ask the user for a number for the second value. if they don't enter a number, ask them again
num2 = prompt("Please enter a second number", 0);

while(isNaN((Number(num2, 10)))) {
    num2 = prompt("Error! You didn't enter a number... Please enter a number", 0);
}

alert("Please check the console log for results. ");

// adds the two numbers together and displays them in an equation form
console.log(`${num1} + ${num2} = ${Number(num1) + Number(num2)}`);
