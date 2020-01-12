submitButton = document.querySelector("#submit");
tipSection = document.querySelector("#tip-section");
tipAmount = document.querySelector("#tip-amount");

calculateTip = () => {
    billTotal = document.querySelector("#bill-total").value;
    serviceQuality = document.querySelector("#service-quality").value;
    numberOfPeople = document.querySelector("#number-of-people").value;

    tip = billTotal*serviceQuality/numberOfPeople;

    roundedTip = Math.round(tip*100)/100;

    displayTip();
};

submitButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    calculateTip();
})

//innerHTML for displaying tip
function displayTip () {
    console.log(roundedTip);
    tipSection.style.display ="block";
    tipSection.style.backgroundColor = "$white";
    tipAmount.innerText = "$" + roundedTip;
};