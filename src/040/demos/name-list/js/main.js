/*
	TASK: prompt for individual names and add them to a list.  Confirm after each name is entered whether the user would like to enter another name or not.
*/

// Avoid Global Variables and Global Execution

const readyToRun = function() {
	let outDiv = document.querySelector('div');

	let myHTML = '';

	// Add my names
	do {
		let aName = prompt('Enter name: ');
		myHTML += `<li>${aName}</li>`; // template literal
	} while(confirm('Another name?'));

	myHTML = `<ul>${myHTML}</ul>`; // template literal

	// display the list
	outDiv.innerHTML = myHTML;
}

// There is one global execution that I will allow:
// The "main" function to run when the document has loaded
document.addEventListener('DOMContentLoaded', readyToRun);
