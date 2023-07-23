console.log('utilites file');

function getInputValueById(elementInput) {
    const elementInputField = document.getElementById(elementInput);
    const elementInputstring = elementInputField.value;
    const elementValue = parseFloat(elementInputstring)
    elementInputField.value = '';
    return elementValue;
}

function getElementTextById(elementInnerText) {
    const elementTextField = document.getElementById(elementInnerText);
    const elementTextString = elementTextField.innerText;
    const elementText = parseFloat(elementTextString);
    elementTextField.innerText = '';
    return elementText;
}

function setElementTextById(elementId, newText) {
    const elementTextField = document.getElementById(elementId);
    elementTextField.innerText = newText;

}