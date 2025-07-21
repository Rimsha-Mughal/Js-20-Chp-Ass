function showASCII() {
    const input = document.getElementById('inputField').value;
    const resultDiv = document.getElementById('result');

    if (input.length === 0) {
        resultDiv.innerText = "Please enter some data.";
        return;
    }

    let asciiCodes = [];
    for (let i = 0; i < input.length; i++) {
        asciiCodes.push(`'${input[i]}' : ${input.charCodeAt(i)}`);
    }

    resultDiv.innerHTML = "<strong>ASCII Codes:</strong><br>" + asciiCodes.join('<br>');
}


// Prompt the user for two integers
const num1 = parseInt(prompt("Enter the first integer:"), 10);
const num2 = parseInt(prompt("Enter the second integer:"), 10);

// Check if the inputs are valid integers
if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid integers.");
} else {
    if (num1 === num2) {
        alert("The two integers are equal.");
    } else if (num1 > num2) {
        alert("The larger integer is: " + num1);
    } else {
        alert("The larger integer is: " + num2);
    }

}

// Prompt the user to enter a number
var number = prompt("Enter a number:");

// Convert the input to a number type
var num = Number(number);

// Check and display the result
if (isNaN(num)) {
  alert("That's not a valid number.");
} else if (num > 0) {
  alert("The number is positive.");
} else if (num < 0) {
  alert("The number is negative.");
} else {
  alert("The number is zero.");
}


// Prompt the user to enter a single character
var char = prompt("Enter a single character:");

// Convert to lowercase to handle uppercase inputs
var lowerChar = char.toLowerCase();

// Check if the input is a single character
if (char.length !== 1) {
  alert("Please enter exactly one character.");
} else {
  // Define vowels
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  // Check if the character is a vowel
  if (vowels.includes(lowerChar)) {
    alert("true");
  } else {
    alert("false");
  }
}


// a. Store correct password in a variable
var correctPassword = "12345"; 

// b. Ask user to enter their password
var userPassword = prompt("Please enter your password:");

// c. Validate the passwords
if (userPassword === null || userPassword.trim() === "") {
  // i. Check if user has entered a password
  alert("Please enter your password.");
} else {
      if (userPassword === correctPassword) {
    alert("Correct, the password you enter matches the original password.");
  }else {
    alert("Incorrect password.");
  }
}


// Prompt the user to enter time in 24-hour format (e.g., 1300 for 1 PM)
let timeInput = prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM):");

// Convert input to a number
let time = parseInt(timeInput, 10);

// Validate input
if (isNaN(time) || time < 0 || time > 2359) {
    alert("Invalid time entered. Please enter a valid time between 0000 and 2359.");
} else {
    // Extract hours and minutes
    let hours = Math.floor(time / 100);
    let minutes = time % 100;

    // Validate minutes
    if (minutes < 0 || minutes > 59) {
        alert("Invalid minutes in time entered.");
    } else {
        // Determine time of day using if-else statements
        if (hours >= 0 && hours < 12) {
            alert("Good morning!");
        } else if (hours === 12) {
            alert("Good noon!");
        } else if (hours > 12 && hours < 18) {
            alert("Good afternoon!");
        } else if (hours >= 18 && hours <= 23) {
            alert("Good evening!");
        } else {
            alert("Invalid hour entered.");
        }
    }
}



