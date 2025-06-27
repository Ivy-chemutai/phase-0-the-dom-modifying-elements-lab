// Write your code here!
const element = document.createElement("div");
// Optionally remove the existing main element
const main = document.getElementById("main");
if (main) {
  main.remove();
}

// Create a new <h1> element
const newHeader = document.createElement("h1");

// Set its id
newHeader.id = "victory";

// Set its text content
newHeader.textContent = "Lavi is the champion";

// Append the new header to the body
document.body.append(newHeader);
