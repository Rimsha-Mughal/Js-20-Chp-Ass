// Store radius in variable B
let B = 20; // radius of the circle

// Constants
const pi = 3.142;

// Calculate circumference
let circumference = 2 * pi * B;

// Calculate area
let area = pi * B * B;

// Output the heading
document.write("<h2>The Geometrizer</h2>");

// Output the results
document.write("<p>Radius of a circle: " + B + "<br></p>");
document.write("<p>The circumference is: " + circumference + "<br></p>");
document.write("<p>The area is:  " + area + "</p>");


function calculateSupply() {
    // Get input values
    const snack = document.getElementById('snack').value.trim();
    const currentAge = parseInt(document.getElementById('currentAge').value);
    const maxAge = parseInt(document.getElementById('maxAge').value);
    const perDay = parseInt(document.getElementById('perDay').value);

    // Validate inputs
    if (!snack) {
        alert('Please enter your favorite snack.');
        return;
    }
    if (isNaN(currentAge) || isNaN(maxAge) || isNaN(perDay)) {
        alert('Please enter valid numbers for ages and amount per day.');
        return;
    }
    if (currentAge >= maxAge) {
        alert('Current age should be less than maximum age.');
        return;
    }
    if (currentAge < 0 || maxAge < 0 || perDay < 0) {
        alert('Please enter non-negative values.');
        return;
    }

    // Calculate remaining years
    const yearsLeft = maxAge - currentAge;

    // Calculate total needed
    const total = yearsLeft * 365 * perDay;

    // Show result
    document.getElementById('result').textContent = 
        `You will need ${total} ${snack} to last you until the ripe old age of ${maxAge}.`;
}


