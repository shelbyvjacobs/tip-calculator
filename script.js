submitButton = document.querySelector("#submit");
resetButton = document.querySelector("#reset");
tipSection = document.querySelector("#tip-section");
tipAmount = document.querySelector("#tip-amount");
errorSection = document.querySelector("#error-section");
error = document.querySelector("#error");

submitButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    calculateTip();
})

resetButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    removeTip();
})

calculateTip = () => {
    billTotal = parseInt(document.querySelector("#bill-total").value);
    serviceQuality = document.querySelector("#service-quality").value;
    numberOfPeople = parseInt(document.querySelector("#number-of-people").value);

    if(typeof billTotal === 'number' && isFinite(billTotal)){
        tip = billTotal*serviceQuality/numberOfPeople;

        roundedTip = tip.toFixed(2);
    
        displayTip();
    } else {
        displayError();
    }
};

displayTip = () => {
    tipSection.style.display = "block";
    tipAmount.innerText = "$" + roundedTip;
    errorSection.style.display = "none";
};

displayError = () => {
    errorSection.style.display = "block";
    error.innerText = "Please enter numbers for the Bill Amount and Number of People sections."
    tipSection.style.display = "none";
}

removeTip = () => {
    tipSection.style.display = "none";
    errorSection.style.display = "none";
    billTotal = document.querySelector("#bill-total").value = "";
    serviceQuality = document.querySelector("#service-quality").value = "";
    numberOfPeople = document.querySelector("#number-of-people").value = "";
};