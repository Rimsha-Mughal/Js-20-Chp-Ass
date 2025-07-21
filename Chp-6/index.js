// Take two numbers
var num1 = 5;
var num2 = 10;

// Add them and store in a new variable
var sum = num1 + num2;

// Show the result in the browser
document.write("<h3>The sum of " + num1 + " and " + num2 + " is " + sum + ".</h3>");

// Declare a variable without initializing
var B;

// Show value after declaration
var heading1 = document.createElement('h3');
heading1.textContent = "Value after variable declaration is " + B;
document.body.appendChild(heading1);

// Initialize the variable with some number
B = 5;

// Show initial value
var heading2 = document.createElement('h3');
heading2.textContent = "Initial value: " + B;
document.body.appendChild(heading2);

// Increment the variable
B++;

// Show value after increment
var heading3 = document.createElement('h3');
heading3.textContent = "Value after increment is: " + B;
document.body.appendChild(heading3);

// Add 7 to the variable
B += 7;

// Show value after addition
var heading4 = document.createElement('h3');
heading4.textContent = "Value after addition is: " + B;
document.body.appendChild(heading4);

// Decrement the variable
B--;

// Show value after decrement
var heading5 = document.createElement('h3');
heading5.textContent = "Value after decrement is: " + B;
document.body.appendChild(heading5);

// Show the remainder after dividing by 3
var remainder = B % 3;
var heading6 = document.createElement('h3');
heading6.textContent = "The remainder is: " + remainder;
document.body.appendChild(heading6);