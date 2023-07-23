// console.log('utilites file');

// error handling functions
function stringErrorHandling(testElementValue) {
    if (isNaN(testElementValue) || testElementValue == "") {
        alert("please enter natural number");
        window.location.reload();
    }
}

function negetiveErrorHandling(testElementValue) {
    if (testElementValue < 0) {
        alert("Error! Please enter positve number.")
        window.location.reload();
    }
    return 0;
}

function irrationalData(largeNum, smallNum) {
    if (!(largeNum > smallNum)) {
        alert("Error! Irrational activies.");
        window.location.reload();
    }
    return 0;
}


// get input value, parseFloat, .value='' 
function getInputValueById(elementInput) {
    const elementInputField = document.getElementById(elementInput);
    const elementInputstring = elementInputField.value;
    const elementValue = parseFloat(elementInputstring);

    stringErrorHandling(elementValue);
    negetiveErrorHandling(elementValue);

    elementInputField.value = '';
    return elementValue;
}

// get element text, parseFloat, .innerText=''
function getElementTextById(elementInnerText) {
    const elementTextField = document.getElementById(elementInnerText);
    const elementTextString = elementTextField.innerText;
    const elementText = parseFloat(elementTextString);
    elementTextField.innerText = '';
    return elementText;
}

// set element text
function setElementTextById(elementId, newText) {
    const elementTextField = document.getElementById(elementId);
    elementTextField.innerText = newText;

}