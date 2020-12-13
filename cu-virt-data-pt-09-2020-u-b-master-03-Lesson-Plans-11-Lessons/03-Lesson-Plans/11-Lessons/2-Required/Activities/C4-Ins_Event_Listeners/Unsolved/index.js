

// This function is triggered when the button is clicked
function handleClick() {
    console.log("A button was clicked!");
  
    // We can use d3 to see the object that dispatched the event
    console.log(d3.event.target);
  }

// Event handlers are just normal functions that can do anything you want
// d3.select(".giphy-me").html("<img src='https://gph.to/2Krfn0w' alt='giphy'>");
