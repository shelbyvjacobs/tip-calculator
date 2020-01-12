submitButton = document.querySelector("#submit");
tipSection = document.querySelector("#tip-section");
tipAmount = document.querySelector("#tip-amount");

submitButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    calculateTip();
})

calculateTip = () => {
    billTotal = document.querySelector("#bill-total").value;
    serviceQuality = document.querySelector("#service-quality").value;
    numberOfPeople = document.querySelector("#number-of-people").value;

    tip = billTotal*serviceQuality/numberOfPeople;

    roundedTip = Math.round(tip*100)/100;

    displayTip();
};

function displayTip () {
    tipSection.style.display ="block";
    tipAmount.innerText = "$" + roundedTip;
};