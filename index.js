// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.

document.addEventListener('DOMContentLoaded', () => {
    const simulateButton = document.getElementById('simulate-click');
    const inputField = document.getElementById('user-input');
    const outputDiv = document.getElementById('dynamic-content');
    const submitButton = document.getElementById('user-form');


    simulateButton.addEventListener('click', () => {
        outputDiv.textContent = 'Button Clicked!'
    });
    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        const inputValue = inputField.value;
        if (inputValue) {
            outputDiv.textContent = `Submitted: ${inputValue}`;
        } else {
            outputDiv.textContent = 'Please enter a value before submitting.';
        }
    });
    
});

// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.
function simulateClick(elementId, message) {
  const element = document.getElementById(elementId);
  if (element) {
    element.textContent = message;
  } else {
    console.error(`Element with ID ${elementId} not found.`);
  }
}

function addElementToDOM(elementId, text){
    const element = document.getElementById(elementId);
    if (element) {
        const newElement = document.createElement('div');
        newElement.textContent = text;
        element.appendChild(newElement);
    } else {
        console.error(`Element with ID ${elementId} not found.`);
    }
}

function removeElementFromDOM(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.remove();
    } else {
        console.error(`Element with ID ${elementId} not found.`);
    }
}

function handleFormSubmit(formId, outputId) {
    const form = document.getElementById(formId);
    const input = document.getElementById('user-input');
    const output = document.getElementById(outputId);
    const errorMessage = document.getElementById('error-message');
    if (input.value.trim() === '') {
        errorMessage.textContent = 'Input cannot be empty';
        errorMessage.classList.remove('hidden');
        return;
    }
    if (output) {
        output.textContent = `Submitted: ${input.value}`;
        errorMessage.classList.add('hidden');
    }
}
// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.


// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.

module.exports = {
  addElementToDOM,
  removeElementFromDOM,
  simulateClick,
  handleFormSubmit,
}