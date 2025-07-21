//Declare a vareable called age ...

var age = 17;
alert("I am " + age + " years old. " );


// Check if visit count exists in localStorage
var visitCount = localStorage.getItem("visitCount");

if (visitCount === null) {
  visitCount = 1;
} else {
  visitCount = Number(visitCount) + 1;
}

// Save updated visit count back to localStorage
localStorage.setItem("visitCount", visitCount);

// Show message on the webpage
alert("You have visited this site " + visitCount + " times.");


  // Declare and assign your BirthYear
    var birthYear = 2008;
    document.writeIn("My birth year is " + birthYear + "<br>");
    document.writeIn("Data type of my declared variable is " + typeof birthYear);



