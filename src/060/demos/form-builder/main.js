// Program that runs the form builder
// I'll use an IIFE for running the code
(function main(){
    const formBuilder = function(evt) {
        // Responds based upon the submit event
        evt.preventDefault();

        // Adding a user input control dynamically
        // 0) Get variables for the user's input
        let myForm = evt.target;
        let labelText = myForm.elements.labelText.value;
        let controlName = myForm.elements.controlName.value;
        let controlType = myForm.elements.controlType.value;

        // 1) Create a label with text
        let myLabel = document.createElement('label');
        let theText = document.createTextNode(labelText);
        myLabel.append(theText);

        // 2) Create an input element
        let myInput = document.createElement('input');

        // 3) Add attribute values to the input
        myInput.setAttribute('name', controlName);
        myInput.setAttribute('type', controlType);

        // 4) Add the input element to the label
        //    (so that it is nested inside)
        myLabel.append(myInput);

        // 5) Add it to the dynamically built form
        console.log(myLabel);
        formContent.append(myLabel);

        console.log('Added control to form');
    }

    const showDialog = function(evt) {
        // "open" the dialog for the user to see the generated HTML
        let htmlText = formContent.innerHTML;
        if(htmlText !== '') {
            // see Credits #1
            let options = {
                //"wrap-attributes": "force-aligned",
                "inline": []
            }
            htmlText = html_beautify(htmlText, options);

            let myPre = rawHTML.querySelector('pre code');
            myPre.innerText = htmlText;
            // see Credits #2
            Prism.highlightAll();

            rawHTML.setAttribute('open', '');
        } else {
            alert('Please build a form before attempting to show the resulting HTML');
        }
        console.log('open dialog box');
    }
    const closeDialog = function(evt) {
        // "close" the dialog on the page (and clear the contents of the <pre> tag)
        rawHTML.querySelector('pre code').innerText = '';
        rawHTML.removeAttribute('open');
        console.log('close dialog box');
    }

    // Note: builder is an ID for the form we coded in our index.html
    builder.addEventListener('submit', formBuilder);
    builder.lastElementChild.addEventListener('click', showDialog);
    rawHTML.firstElementChild.addEventListener('click', closeDialog);
    console.log('Program is set up');
})() // Don't forget these closing parenthesis
