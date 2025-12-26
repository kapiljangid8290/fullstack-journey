// Variables
let name = "Kapil";
let experience = 1;
let isLearning = true;

// Output
console.log("Name:", name);
console.log("Experience:", experience);
console.log("Learning JS:", isLearning);

// Simple logic
if (experience < 2) {
  console.log("Status: Beginner, but improving fast 🚀");
} else {
  console.log("Status: Intermediate");
}

// Function to greet
function showStatus(name, experience) {
    if (experience < 2) {
        console.log(name + " is a Beginner");
    } else {
        console.log(name + " is an Intermediate learner");
    }   
}

// Select elements
let button = document.getElementById("clickBtn");
let output = document.getElementById("output");

// Add event
button.addEventListener("click", function () {
  output.innerText = "Button clicked! JavaScript is working 🚀";
});
