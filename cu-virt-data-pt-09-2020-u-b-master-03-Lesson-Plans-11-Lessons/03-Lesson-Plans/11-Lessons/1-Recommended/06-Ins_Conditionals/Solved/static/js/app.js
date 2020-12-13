// Set variables from Filter activity
let locationZip = 94123
let locationType = "Financial Services"

// Perform filter from Filter activity
// If variable locationZip contains a value perform the filter 
if (locationZip) {
  zipTypeFiltered = data.filter(location => location["Source Zipcode"] === locationZip & location["NAICS Code Description"] === locationType);

  console.log(zipTypeFiltered)
}

// Check numnber of reults in filtered data and for San Francisco
if (zipTypeFiltered.city === "San Francisco" & zipTypeFiltered.length > 100) {

  // Print to console if results greater than 100 and for San Francisco
  console.log("In San Francisco's zipcode ", locationZip, " there are over 100 financial service comapnies.")

} 
else if (zipTypeFiltered.length > 100) {

  // Print to console if results greater than 100 and not for San Francisco
  console.log("The zip code ", locationZip, " is not in San Francisco but there are over 100 financial service comapnies.")

}
else{
  // empty
}


