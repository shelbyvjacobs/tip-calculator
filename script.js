// Pseudocode

//collect values from inputs (bill total, service quality, and number of people)

var billTotal = document.querySelector("#bill-total").value;
var serviceQuality = document.querySelector("#service-quality").value;
var numberOfPeople = document.querySelector("#number-of-people").value;

console.log(billTotal);
console.log(serviceQuality);
console.log(numberOfPeople);

//validate inputs
    //make sure nothing is empty or unchecked
//calculate based on collected values
    //bill total * service quality / number of people
    //round the total to hundreth place
//innerHTML for displaying tip
//click submit to call calculation function