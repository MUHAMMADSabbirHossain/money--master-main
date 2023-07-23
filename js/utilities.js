// console.log('utilites file');

// get input value, parseFloat, .value='' 
function getInputValueById(elementInput) {
    const elementInputField = document.getElementById(elementInput);
    const elementInputstring = elementInputField.value;
    const elementValue = parseFloat(elementInputstring)
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