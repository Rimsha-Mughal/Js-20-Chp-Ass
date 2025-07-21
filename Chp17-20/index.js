const outputDiv = document.getElementById('output');
        let outputText = '';

        for (let i = 1; i <= 10; i++) {
            outputText += i + '<br>';
        }

        outputDiv.innerHTML = outputText;


        // Prompt user for the table number
        const number = parseInt(prompt("Enter the number for which you want the multiplication table:"));
        // Prompt user for the length of the table
        const length = parseInt(prompt("Enter the number of multiples you want to see:"));

        // Validate inputs
        if (isNaN(number) || isNaN(length)) {
            alert("Please enter valid numbers.");
        } else {
            let result = `<h2>Multiplication Table of ${number}:</h2><ul>`;
            for (let i = 1; i <= length; i++) {
                result += `<li>${number} x ${i} = ${number * i}</li>`;
            }
            result += '</ul>';

            // Display the table on the webpage
            document.body.innerHTML += result;
        }


        // Define the array
        const fruits = ["apple", "banana", "mango", "orange", "strawberry"];
        // Loop through each item in the array
        for (let i = 0; i < fruits.length; i++) {
            // Print the item
            console.log(fruits[i]);

            // Print the index and item
            document.body.innerHTML += `<h3>Element at index ${i} is ${fruits[i]}</h3>`;
        }



            // Counting from 1 to 15
        const countingArray = [];
        for (let i = 1; i <= 15; i++) {
            countingArray.push(i);
        }
        document.getElementById('counting').textContent = countingArray.join(', ') + ',';

        // Reverse counting from 10 to 1
        const reverseArray = [];
        for (let i = 10; i >= 1; i--) {
            reverseArray.push(i);
        }
        document.getElementById('reverse').textContent = reverseArray.join(', ') + ',';

        // Even numbers from 0 to 20
        const evenArray = [];
        for (let i = 0; i <= 20; i += 2) {
            evenArray.push(i);
        }
        document.getElementById('even').textContent = evenArray.join(', ') + ',';

        // Odd numbers from 1 to 19
        const oddArray = [];
        for (let i = 1; i < 20; i += 2) {
            oddArray.push(i);
        }
        document.getElementById('odd').textContent = oddArray.join(', ') + ',';

        // Series: 2k, 4k, ..., 20k
        const seriesArray = [];
        for (let i = 2; i <= 20; i += 2) {
            seriesArray.push(i + 'k');
        }
        document.getElementById('series').textContent = seriesArray.join(', ') + ',';


       const A = ["cake", "apple pie", "cookie", "chips", "patties"];

  function searchItem() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');

    if (A.some(item => item.toLowerCase() === input)) {
      resultDiv.textContent = `${input} is found in the list.`;
    } else {
      resultDiv.textContent = `${input} is not found in the list.`;
    }
  }















