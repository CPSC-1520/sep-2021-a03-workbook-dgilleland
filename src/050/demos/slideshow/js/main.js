// your js here...
let images = ['mountain1.jpg', 'mountain2.jpg', 'mountain3.jpg', 'mountain4.jpg', 'mountain5.jpg'];
let currentImg = 0;
// Variable to track which image we are showing
let imageTracker = document.querySelector('.image-tracker');

// display the current image
document.querySelector('.carousel>img').src = 'images/' + images[0]; 

// add the appropriate number of selector bullets
for(let index = 0; index < images.length; index ++) {
    imageTracker.innerHTML += `<span class="control" data-idx="${index}">&bull;</span>`;
}

// highlight the first bullet as 'active'
imageTracker.querySelectorAll('span')[0]
            .classList.add('active');

// add event listener for carousel controls
document.querySelector('.carousel').addEventListener('click', function (evt){
    let target = evt.target;
    if (target.classList.contains('control')) {
        if (target.classList.contains('next')) {
            // move to the next index in the array
            currentImg += 1;
        } else if (target.classList.contains('prev')){
            // move to the previous index in the array
            currentImg -= 1;
        } else {
            // selector bullet clicked
            currentImg = parseInt(target.dataset.idx);
        }
        if(currentImg >= images.length) {
            currentImg = 0; // Overflow fix
        } else if(currentImg < 0) {
            currentImg = images.length - 1;// Underflow fix
        }
        // display the new current image
        document.querySelector('.carousel>img').src = 'images/' + images[currentImg];

        // update the active selector bullet
        imageTracker.querySelector('span.active')
                    .classList.remove('active');
        imageTracker.querySelectorAll('span')[currentImg]
                    .classList.add('active');
    }
}); 


document.addEventListener('keydown', function (evt) {
    var click;

    switch (evt.keyCode) {
        case 37:
            // left arrow
            click = new MouseEvent('click', {
                'bubbles': true
            });
            document.querySelector('.prev').dispatchEvent(click);
            break;
        case 39:
            // right arrow
            click = new MouseEvent('click', {
                'bubbles': true
            });
            document.querySelector('.next').dispatchEvent(click);
            break;
    }
});