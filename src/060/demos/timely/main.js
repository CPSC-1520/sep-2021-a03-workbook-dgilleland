// Use IIFE
(function() {
    const getDatePortion = function(someDate) {
        if(someDate instanceof Date) {
            return `${someDate.getFullYear()}-${someDate.getMonth() + 1}-${someDate.getDate()}`;
        } else {
            return undefined;
        }
    }

    let today = new Date();
    thisDate.innerText = getDatePortion(today);

    const logTime = function() {
        // TODO: figure out how to get the time portion
        // HINT: https://tecadmin.net/get-current-date-time-javascript/
    }

    document.querySelector('button')
            .addEventListener('click', logTime);
})();
