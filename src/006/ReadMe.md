# Intro to Functions in JavaScript ![Code](https://img.shields.io/badge/Code%20Status-Walkthrough-blueviolet?logo=Visual%20Studio%20Code&labelColor=indigo)  ![Docs](https://img.shields.io/badge/Documentation%20Status-10--40%25%20Rough%20Outline-red?logo=Read%20the%20Docs)

> Begin this lesson by moving this folder into the [`src\`](../../src/) folder.

## Demo-Addition

```js
let first = prompt('Enter a number.');
let second = prompt('Enter another number.');

let result = first + second;

alert(`I calculated a result of ${result} when adding the numbers.`);

firstNumber.innerText = first;
secondNumber.innerText = second;
answer.innerText = result;

let repeat = confirm('Again?');

let para = document.querySelector('p'); // grab the first <p>
para.innerHTML = repeat ? 'Press <a href="#">this link</a> to try again.' : 'Thanks for playing';
```

----

## Demo-Agreement

```js
var disclosing;
var receiving;
var date;

disclosing = prompt('Enter disclosing party name:');
receiving = prompt('Enter receiving party name:');
date = prompt('Enter the date [month, day, year]:');

// update the disclosing party areas
document.querySelector('.parties .disclosing-party').innerHTML = disclosing;
document.querySelector('.disclosing-signature .disclosing-party').innerHTML = disclosing;

// update the receiving party areas
document.querySelector('.parties .receiving-party').innerHTML = receiving;
document.querySelector('.receiving-signature .receiving-party').innerHTML = receiving;

// update the date
document.querySelector('.date').innerHTML = date;
```

----

## Demo-Greet

- Declaring functions
  - Parameters and return values
  - Named functions
  - Anonymous functions
  - assigning a function to a variable
    - use `const`
- Calling functions
  - arguments

----

## Waiting for the DOM

Generate the example from the MDN documentation on the [Window: load event](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event).

----

## Resources

Review the following articles:

- [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)
- [Functions - reusable blocks of code](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions)
