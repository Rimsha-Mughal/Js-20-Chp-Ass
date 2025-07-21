// Store total marks and marks obtained
var totalMarks = 980;
var marksObtained = 804;

// Calculate percentage in a single expression
var percentage = (marksObtained / totalMarks) * 100;

// Display the result in the browser
document.body.innerHTML = `
<h2>Marks Sheet</h2>
<p>Total marks: ${totalMarks}</p>
<p>Marks obtained: ${marksObtained}</p>
<p>Percentage: ${percentage.toFixed(2)}%</p>
`;


// Store values in variables
  const priceOfItem1 = 650; // Price of item 1
  const quantityOfItem1 = 3; // Quantity of item 1
  const priceOfItem2 = 100; // Price of item 2
  const quantityOfItem2 = 7; // Quantity of item 2
  const shippingCharges = 100; // Shipping charges

  // Calculate total cost for items
  const totalItem1 = priceOfItem1 * quantityOfItem1;
  const totalItem2 = priceOfItem2 * quantityOfItem2;

  // Calculate total cost
  const totalCost = totalItem1 + totalItem2 + shippingCharges;

  // Generate receipt
  document.write("<h1>Shopping Cart</h1>");
  document.write("<p>Price of item 1 is " + priceOfItem1 + "</p>");
  document.write("<p>Quantity of item 1 is " + quantityOfItem1 + "</p>");
  document.write("<p>Price of item 2 is " + priceOfItem2 + "</p>");
  document.write("<p>Quantity of item 2 is " + quantityOfItem2 + "</p>");
  document.write("<p>Shipping Charges " + shippingCharges + "</p>");
  document.write("<p>Total cost of your order is " + totalCost + "</p>");



