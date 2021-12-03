// Read this:
// https://millankaul.medium.com/how-to-handle-404-500-and-more-using-fetch-api-in-javascript-f4e301925a51

(function(){
    const handleLoadSupers = function(evt) {
        fetch('./supers.json')
            .then(response => parseJson(response))
            .then(jsonData => display(jsonData))
            .catch(problem => report(problem));
    }

    const parseJson = function(response) {
        if(response.ok) { // All good, now we will parse the JSON
            return response.json();
        } else { // Something went wrong in the network transfer
            // The following error will be caught by the catch method
            throw Error(response.status, {cause: response.statusText});
        }
    }

    const display = function(data) {
        displaySupers.replaceChildren(); // emptying the <section>
        for(let count = 0; count < data.length; count++) {
            let result = buildSupe(data[count]);
            displaySupers.appendChild(result);
        }
    }

    const buildSupe = function(data) {
        const tmpl = document.getElementById('supe').content.cloneNode(true);
        let image = tmpl.querySelector('img');
        let h2 = tmpl.querySelector('h2');
        let quote = tmpl.querySelector('blockquote');
        let ul = tmpl.querySelector('ul');
        image.alt = data.Name;
        image.src = `./images/${data.Photo}`;
        h2.innerText = data.Name;
        quote.innerText = data.Alias;
        for(power of data.Superpowers) {
            let li = document.createElement('li');
            let txt = document.createTextNode(power);
            li.appendChild(txt);
            ul.appendChild(li);
        }
        return tmpl;
    }

    const report = function(info) {
        const tmpl = document.getElementById('errors').content.cloneNode(true);
        tmpl.querySelector('h3').innerText = info.message;
        if(info.cause) {
            tmpl.querySelector('pre').innerText = `${info.cause}\n${info.stack}`;
        } else {
            tmpl.querySelector('pre').innerText = info.stack;
        }
        displaySupers.replaceChildren(tmpl);
    }

    loadSupers.addEventListener('click', handleLoadSupers);
    displaySupers.addEventListener('click', evt => {
        displaySupers.replaceChildren(); // Replace with nothing
    })
})();
