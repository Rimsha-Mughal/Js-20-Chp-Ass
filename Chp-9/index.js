document.getElementById('calculateBtn').addEventListener('click', function() {
    const currentYear = parseInt(document.getElementById('currentYear').value);
    const birthYear = parseInt(document.getElementById('birthYear').value);

    if (isNaN(currentYear) || isNaN(birthYear)) {
        alert('Please enter valid numbers for both years.');
        return;
    }

    const age = currentYear - birthYear;

    document.getElementById('result').innerHTML = `
        <h2>Age Calculator</h2>
        <p>Current Year: ${currentYear}</p>
        <p>Birth Year: ${birthYear}</p>
        <p>Your Age is: ${age}</p>
    `;
});