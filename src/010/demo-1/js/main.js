/* Place code from walk-through here */
// 1. select the target element
var featureImage = document.querySelector('img.feature');

// 2. create the event listener function
const handleFeatureClick = function (eventObject) {
	console.log(eventObject);
	var desc = document.querySelector('.feature.description');
	desc.classList.remove('hidden');
}

// 3. add event listener
featureImage.addEventListener('click', handleFeatureClick);

// 4. Another Event Listener (all 3 steps in one)
document.querySelector('p.feature.description')
        .addEventListener('click', function (evt) {
            console.log('a.feature.link was clicked...');
            // make the image visible
            evt.target.classList.add('hidden');
        });
