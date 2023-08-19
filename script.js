
function getValueFromInputField(inputId){
    const takingValue=document.getElementById(inputId);
    const valueString = takingValue.value;
    const value =parseFloat(valueString);
    takingValue.value='';
    return value;
    // console.log(value);
}

function takeAndPush(push, take){
    const result =document.getElementById(push);
    result.innerText = take;
}

// calculate triangle are:

function calculateARea(){
   const triangleBase = getValueFromInputField('triangle-base');
   const triangleHeight =  getValueFromInputField('triangle-height');
    // triangle are a
    const triangleArea = 0.5 * triangleBase * triangleHeight;
    takeAndPush('triangle-areadisplay',triangleArea);

}

// calculate Rectangle area

function calculateARea(){
    const rectangleBase = getValueFromInputField('rectangle-base');
    const rectangleHeight =  getValueFromInputField('rectangle-height');
     // rectangle area 
     const rectangleArea = rectangleBase * rectangleHeight;
     takeAndPush('rectangle-areadisplay',rectangleArea);
 
 }