// When a gallery thumbnail size button is clicked, the corresponding size class
// should be added to the div.thumbnails element.  This will apply the corresponding
// CSS rule to  modify the display the of the thumbnail images.  In addition to this,
// the clicked button should be made active (i.e. add the active class).

/*

- Handler/Listener for the <li> clicks
  - Identify the size to use
  - Apply the class to the `div.thumbnails` element

- same handler for all of them

*/

const resize = function (evt) {
    console.log(evt.target);
    let classList = evt.target.classList;
    let galleryDiv = document.querySelector('div.thumbnails');
    if(classList.contains('thumbnails-sm')) {
        // apply the sm style
        galleryDiv.classList.add('sm');
        galleryDiv.classList.remove('md');
        galleryDiv.classList.remove('lg');
    } else if(classList.contains('thumbnails-md')) {
        // apply the md style
        galleryDiv.classList.remove('sm');
        galleryDiv.classList.add('md');
        galleryDiv.classList.remove('lg');
    } else if(classList.contains('thumbnails-lg')) {
        // apply the lg style
        galleryDiv.classList.remove('sm');
        galleryDiv.classList.remove('md');
        galleryDiv.classList.add('lg');
    }
}

document
    .querySelector('ul')
    .addEventListener('click', resize);
