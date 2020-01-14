submitButton = document.querySelector("#submit");
resetButton = document.querySelector("#reset");
tipSection = document.querySelector("#tip-section");
tipAmount = document.querySelector("#tip-amount");

submitButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    calculateTip();
})

resetButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    removeTip();
})

calculateTip = () => {
    billTotal = document.querySelector("#bill-total").value;
    serviceQuality = document.querySelector("#service-quality").value;
    numberOfPeople = document.querySelector("#number-of-people").value;

    tip = billTotal*serviceQuality/numberOfPeople;

    roundedTip = Math.round(tip*100)/100;

    displayTip();
};

displayTip = () => {
    tipSection.style.display ="block";
    tipAmount.innerText = "$" + roundedTip;
};

removeTip = () => {
    tipSection.style.display = "none";
    billTotal = document.querySelector("#bill-total").value = "";
    serviceQuality = document.querySelector("#service-quality").value = "";
    numberOfPeople = document.querySelector("#number-of-people").value = "";
};

// add validation to make sure all fields are completed.
// make sure the bill total is a number!