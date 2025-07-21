// Prompt the user to enter a number
var number = parseInt(prompt("Enter a number to display its multiplication table:"));

// Check if the input is a valid number
if (isNaN(number)) {
  document.write("Please enter a valid number.");
} else {
  document.write("<h2>Multiplication Table of " + number + "</h2>");
  // Loop from 1 to 10 to generate the table
  for (var i = 1; i <= 10; i++) {
    var result = number * i;
    document.write(number + " x " + i + " = " + result + "<br/>");
  }
}


// Store a Celsius temperature into a variable
var celsius = 25; // example Celsius temperature

// Convert Celsius to Fahrenheit
var fahrenheitFromC = (celsius * 9/5) + 32;

// Create and append an <h3> element for Celsius to Fahrenheit
var h3CtoF = document.createElement('h3');
h3CtoF.textContent = celsius + "°C is " + fahrenheitFromC.toFixed(2) + "°F";
document.body.appendChild(h3CtoF);

// Store a Fahrenheit temperature into a variable
var fahrenheit = 77; // example Fahrenheit temperature

// Convert Fahrenheit to Celsius
var celsiusFromF = (fahrenheit - 32) * 5/9;

// Create and append an <h3> element for Fahrenheit to Celsius
var h3FtoC = document.createElement('h3');
h3FtoC.textContent = fahrenheit + "°F is " + celsiusFromF.toFixed(2) + "°C";
document.body.appendChild(h3FtoC);