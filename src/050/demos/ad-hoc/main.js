const listItems = document.querySelectorAll('li');

const demoForIn = function(stuff) {
    // for...in gives me a "index" identifier of an array
    for (let item in stuff) { // for...in[dex]
        console.log(item, stuff[item]);
    }
}

const demoForOf = function(stuff) {
    // for...of gives me the item in the array
    for (let item of stuff) {
        console.log(item);
    }
}
