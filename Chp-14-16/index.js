//declare an emty array for names of future students...
var students = [];

var student = [];
student.name = "Rimsha Mughal";

//String array...
var stringArray = ["apple", "banana", "cherry"];

//Number array...
var numberArray = [1, 2, 3, 4, 5];

//Boolean array...
var booleanArray = [true, false, true, false];

//Mixed array...
var mixedArray = ["text", 42, true, null, { key: "value" }];


// Declare and initialize the array of qualifications
const qualifications = ["SSC", "HSC", "BCS", "BS", "BCoM", "MS", "M.Phil", "PhD"];

// Get the UL element from the DOM
const list = document.getElementById("qualifications");

// Loop through the qualifications array and add each as a list item
qualifications.forEach(function (qualification) {
    const listItem = document.createElement("li");
    listItem.textContent = qualification;
    list.appendChild(listItem);
});



 // Initialize the array with some color names
 let colors = ["Red", "Green", "Blue", "Yellow"];

 // Function to display the array in the browser
 function displayArray(message, array) {
     const outputDiv = document.getElementById("output");
     const p = document.createElement("p");
     p.innerHTML = "<strong>" + message + "</strong>: " + array.join(", ");
     outputDiv.appendChild(p);
 }

 // Show the initial array
 displayArray("Initial array", colors);

 // A. Ask user for a color to add at the beginning
 let colorToAddBegin = prompt("Enter a color to add at the beginning:");
 if (colorToAddBegin) {
     colors.unshift(colorToAddBegin);
     displayArray("After adding color at the beginning", colors);
 }

 // B. Ask user for a color to add at the end
 let colorToAddEnd = prompt("Enter a color to add at the end:");
 if (colorToAddEnd) {
     colors.push(colorToAddEnd);
     displayArray("After adding color at the end", colors);
 }

 // C. Add two colors at the beginning
 colors.unshift("Purple", "Orange");
 displayArray("After adding two colors at the beginning", colors);

 // D. Delete the first color
 colors.shift();
 displayArray("After deleting the first color", colors);

 // E. Delete the last color
 colors.pop();
 displayArray("After deleting the last color", colors);

 // F. Ask user for index and color to add at that position
 let index = prompt("Enter the index at which you want to add a color (0-based):");
 let colorAtIndex = prompt("Enter the color to add at index " + index + ":");

 if (index !== null && colorAtIndex) {
     index = parseInt(index);
     if (!isNaN(index) && index >= 0 && index <= colors.length) {
         colors.splice(index, 0, colorAtIndex);
         alert("Invalid index");
         displayArray("After adding color at index " + index, colors);
 }
     } else {
     }



// Initialize the array with student scores
const scores = [320, 230, 480, 120];

// Display original scores in the HTML element
const outputDiv = document.getElementById("output");
if (outputDiv) {
  outputDiv.innerHTML += "Scores of Students : " + scores.join(", ") + "<br>";
  // Log original scores to the console
  console.log("Original Scores:", scores);
} else {
  console.log("Output element with id 'output' not found.");
}


// Initialize the array with city names
const cities = ["New York", "London", "Paris", "Tokyo", "Sydney", "Berlin", "Rome"];

// Select three specific indices to copy (for example, indices 1, 3, and 5)
const indicesToCopy = [1, 3, 5];

// Create a new array by copying the selected elements
const selectedCities = indicesToCopy.map(index => cities[index]);

// Log the original and selected arrays
console.log("Original cities:", cities);
console.log("Selected cities:", selectedCities);


// Define the array
var array = ["This", "is", "my", "cat"];

// Create a string by joining the array elements with spaces
var resultString = array.join(" ");

// Output the result
console.log(resultString);







