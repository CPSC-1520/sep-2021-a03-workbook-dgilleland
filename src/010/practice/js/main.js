// Overview: Add JavaScript that creates separate event handlers to respond to the mousedown and mouseup events for the a.feature.link element.

// First Event Handler: The event handler for the mousedown must a) set the img.feature element's src to the value of the anchor's href (use the event's target property), b) remove the hidden class, and c) add the pull-right class.
const firstHandler = function(evt) {
    let imgSrcValue = evt.target.href;
    // console.log(imgSrcValue);
    let img = document.querySelector('img.feature');
    img.src = imgSrcValue;
    img.classList.remove('hidden');
    img.classList.add('pull-right');
}

// Second Event Handler: The event handler for the mouseup must a) clear the image's src value, b) add the hidden class, and c) remove the pull-right class.
const secondHandler = function(evt) {
    let img = document.querySelector('img.feature');
    img.src = '';
    img.classList.add('hidden');
    img.classList.remove('pull-right');
}


// Third Event Handler: The event handler for the click must simply prevent the default action.
const thirdHandler = function(evt) {
    evt.preventDefault();
}

// Add Event Listeners
document
    .querySelector('a.feature.link')
    .addEventListener('mousedown', firstHandler);

document
    .querySelector('a.feature.link')
    .addEventListener('mouseup', secondHandler);

document
    .querySelector('a.feature.link')
    .addEventListener('click', thirdHandler);
