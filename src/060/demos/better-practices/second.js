(function() {
    const calc = function(first, second) {
        return first * second;
    }
    const buttonClick = function(evt) {
        let result = calc(parseInt(firstNumber.value),
                        parseInt(secondNumber.value));
        alert(`The answer for multiplying is ${result}`);
    }

    CalcB.addEventListener('click', buttonClick);
})() // IIFE needs the parenthesis to complete the function call syntax
