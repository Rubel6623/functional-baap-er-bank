// function-1
function getInputFieldValueById(inputId){
    const inputField=document.getElementById(inputId);
    const inputFieldValueStr=inputField.value;
    const inputFieldValue=parseFloat(inputFieldValueStr);
    inputField.value='';
    return inputFieldValue;
}

// function-2
function getTextElementValueById(elementId){
    const element=document.getElementById(elementId);
    const elementValueStr=element.innerText;
    const elementValue=parseFloat(elementValueStr);
    return elementValue;
}

// function-3
function setTextElementValueById(elementId,newValue){
    const textElement=document.getElementById(elementId);
    textElement.innerText=newValue;
}
