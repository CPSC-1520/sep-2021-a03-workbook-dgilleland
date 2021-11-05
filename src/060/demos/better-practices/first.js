document.addEventListener('DOMContentLoaded', function() {
    const calc = function(first, second) {
        return first + second;
    }
    const buttonClick = function(evt) {
        let result = calc(parseInt(firstNumber.value),
                        parseInt(secondNumber.value));
        alert(`The answer is ${result}`);
    }
    CalcA.addEventListener('click', buttonClick);
})
