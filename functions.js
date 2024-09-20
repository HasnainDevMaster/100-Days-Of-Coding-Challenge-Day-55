// 100 Days Of Coding Challenge!

/** Day-55 Task: Read the following Articles and Code along with it:

* Data Types in JavaScript:
https://javascript.info/types

* Interaction: alert, prompt, confirm in JavaScript:
https://javascript.info/alert-prompt-confirm */

//-------------------------------------------------------

// Interactions:

// 1 Alert: shows a message.

/* 2 Prompt: shows a message asking the user to input text.
It returns the text or, if Cancel button or Esc is clicked, null. */

/* confirm: shows a message and waits for the user to press “OK” or “Cancel”.
It returns true for OK and false for Cancel/Esc.  */

/* All these methods are modal: they pause script execution and,
don’t allow the visitor to interact with the rest of the page until the window has been dismissed.

There are two limitations shared by all the methods above:

The exact location of the modal window is determined by the browser. Usually, it’s in the center.
The exact look of the window also depends on the browser. We can’t modify it. */

// Examples of alert, prompt, confirm:

/* 1. Alert
Example 1: Simple alert */

alert("This is a simple alert message.");

// Example 2: Alert with line breaks

alert("Hello!\nWelcome to our website.");

//-------------------------------------------------------------------------------

/* 2. Prompt
Example 1: Prompt for user input */

let userName = prompt("Please enter your name:");
alert(`Hello, ${userName}!`);

// Example 2: Prompt with default value

let favoriteColor = prompt("What's your favorite color?", "Blue");
alert(`Your favorite color is ${favoriteColor}.`);

//---------------------------------------------------------------------------------

/* 3. Confirm
Example 1: Simple confirmation */

let isConfirmed = confirm("Do you agree with the terms and conditions?");
if (isConfirmed) {
  alert("Thank you for agreeing!");
} else {
  alert("You did not agree.");
}

// Example 2: Confirmation with action

let deleteConfirmation = confirm("Are you sure you want to delete this item?");
if (deleteConfirmation) {
  alert("Item deleted successfully.");
} else {
  alert("Deletion canceled.");
}
