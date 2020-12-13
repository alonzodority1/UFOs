// Select the button
var button = d3.select("#button");

// Select the form
var form = // code here

// Create event handler for submission
button.on("", runEnter); // code here
form.on("",runEnter); // code here

// Complete the event handler function for the form
function runEnter() {
  
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select(""); // code here

  // Get the value property of the input element
  var locationZip = //
  let locationType = "Financial Services"

  // Filter results and use + operator to convert zip to a number
  zipTypeFiltered = // code here

  // Then, select the unordered list element by class name
  var list = d3.select(""); // code here

  // append stats to the list
  list.append("li")//
  list.append("li") //
  list.append("hr")
};

// Select the clear button
var clear = d3.select(""); // code here
clear.on("", runClear); // code here
function runClear() {

  // Then, select the unordered list element by class name
  var list = d3.select(""); // code here

  // remove any children from the list to
  list.html("");
};