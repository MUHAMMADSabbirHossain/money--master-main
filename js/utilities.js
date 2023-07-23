console.log('utilites file');

function getInputValueById(elementInput) {
    const elementInputField = document.getElementById(elementInput);
    const elementInputstring = elementInputField.value;
    const elementValue = parseFloat(elementInputstring)
    return elementValue;
}

