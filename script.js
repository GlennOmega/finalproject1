//toggle
const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", function () {
  menu.classList.toggle("hidden");
});

//show alert
document.getElementById("clickBtn").addEventListener("click", function () {
  alert("Button was clicked!");
});

//Increment Decrement
const counterDisplay = document.getElementById("counter");
const incrementButton = document.getElementById("incrementButton");
const decrementButton = document.getElementById("decrementButton");

let counter = 0;

incrementButton.addEventListener("click", function () {
  counter += 1;
  counterDisplay.textContent = counter;
});

decrementButton.addEventListener("click", function () {
  counter -= 1;
  counterDisplay.textContent = counter;
});

//Reset
const resetButton = document.getElementById("resetButton");

resetButton.addEventListener("click", function () {
  location.reload(); //Refresh the page
});

// Form validation Regex
const usernameInput = document.getElementById("username");
const greetButton = document.getElementById("greetButton");
const greetingMessage = document.getElementById("greetingMessage");

function isValidName(name) {
  const namePattern = /^[a-zA-Z\s]+$/;
  return namePattern.test(name);
}

greetButton.addEventListener("click", function () {
  const username = usernameInput.value.trim();

  if (username === "" || !isValidName(username)) {
    greetingMessage.textContent = "Invalid input. Please use only letters.";
  } else {
    greetingMessage.textContent = `Hello, ${username}!`;
  }
});

 // Add Paragraph 
    // Get the button and container elements
    const addParagraphButton = document.getElementById("addParagraphButton");
    const parapraphContainer = document.getElementById("parapraphContainer");

    // Add event listener to the button
    addParagraphButton.addEventListener("click", function () {
      // Create a new paragraph element
      const newParagraph = document.createElement("p");
      // Set its text content
      newParagraph.textContent = "This is a new paragraph.";

      // Append it to the container
      parapraphContainer.appendChild(newParagraph);
    });