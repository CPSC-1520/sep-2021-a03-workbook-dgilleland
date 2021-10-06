const tagAdder = function(evt) {
    let tagWord = evt.target.elements.tag.value;
    console.log(tagWord);
    let tagList = document.querySelector('p.feature.tags');
    let error = document.querySelector('p.feature.error');
    if(tagWord.trim() != '') {
        tagList.innerText += ' #' + tagWord;
        error.classList.add('hidden');
    } else {
        error.classList.remove('hidden');
    }
    evt.target.elements.tag.value = '';
    evt.preventDefault();
}

document
    .querySelector('form')
    .addEventListener('submit', tagAdder);
