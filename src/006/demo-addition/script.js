// Add in the code from the walk-through and observe the page behaviour.

const addNumbers = function (firstParam, secondParam) {
    let result = 0;
    result += parseFloat(firstParam);
    result += parseFloat(secondParam);
    return result;
}
// Create three other functions: multiplyNumbers, subtractNumbers, divideNumbers
const multiplyNumbers = function (firstParam, secondParam) {
    return parseFloat(firstParam) * parseFloat(secondParam);
}

const subtractNumbers = function (firstParam, secondParam) {
    return parseFloat(firstParam) - parseFloat(secondParam);
}

const divideNumbers = function (firstParam, secondParam) {
    return parseFloat(firstParam) / parseFloat(secondParam);
}

const setUp = function() {
    let first = prompt('Enter a number.');
    let second = prompt('Enter another number.');
    firstNumber.innerText = first;
    secondNumber.innerText = second;
}

const showResults = function(title, symbol, calculation) {
    // perform the calculation
    let result = calculation(firstNumber.innerText, secondNumber.innerText);
    
    // set the outputs
    operation.innerText = title;
    operator.innerText = symbol;
    answer.innerText = result;
}


// let result = addNumbers(first, second); // first + second;

// alert(`I calculated a result of ${result} when adding the numbers.`);

// answer.innerText = result;

// let repeat = confirm('Again?');

// let para = document.querySelector('p'); // grab the first <p>
// para.innerHTML = repeat ? 'Press <a href="#">this link</a> to try again.' : 'Thanks for playing';