// IIFE to run without polluting the global namespace
let heroData = {}; // start with an empty object
(function(){
    // Here we have a JSON object
    let author = {
        "firstName" : "Dan",
        "lastName" : "Gilleland",
        "copyright" : 2021,
        "articles" : [
            "How to Win Friends and Make Money using JSON",
            "JSON is Not a Horror Show (like XML)"
        ]
    }

    // Turn the JSON object into a string and display
    textHolder.innerText = JSON.stringify(author, null, 4);

    // We can load JSON data from outside our JavaScript program, and then use that data inside our JavaScript program.
    fetch('./heros.json') // get the contents of the file
        // then, given the response, extract the JSON data
        .then(response => response.json())
        // then, given the data, copy it to the heroData variable
        .then(data => heroData = data);
    // but don't expect an immediate response....
    console.log("My hero data", heroData);

    const showData = function(evt) {
        textHolder.innerText = JSON.stringify(heroData, null, 2);
    }
    showHeros.addEventListener('click', showData);
    
    // An Arrow function
    const clearTextHolder = (evt) => {
        textHolder.innerText = '';
    }
    textHolder.addEventListener('click', clearTextHolder);
})();
