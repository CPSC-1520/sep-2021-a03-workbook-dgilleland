const createElementWithText = function(tagName, text) {
    let el = document.createElement(tagName);
    let tx = document.createTextNode(text);
    el.appendChild(tx);
    return el;
}
