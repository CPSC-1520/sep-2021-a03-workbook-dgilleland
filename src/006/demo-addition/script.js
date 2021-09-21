// Add in the code from the walk-through and observe the page behaviour.
let first = prompt('Enter a number.');
let second = prompt('Enter another number.');

// ensure that I have a numeric data type
first = parseFloat(first);
second = parseFloat(second);

let result = first + second;

alert(`I calculated a result of ${result} when adding the numbers.`);

firstNumber.innerText = first;
secondNumber.innerText = second;
answer.innerText = result;

let repeat = confirm('Again?');

let para = document.querySelector('p'); // grab the first <p>
para.innerHTML = repeat ? 'Press <a href="#">this link</a> to try again.' : 'Thanks for playing';