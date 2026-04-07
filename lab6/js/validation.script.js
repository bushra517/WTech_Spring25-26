const unitPrice = 1000;
const days = 30;

const quantityInput = document.getElementById("quantity");
const totalInput = document.getElementById("total");

quantityInput.addEventListener("input", function () {

    let quantity = parseInt(quantityInput.value);

    
    if (isNaN(quantity) || quantity < 0) {
        quantity = 0;
        quantityInput.value = 0;
    }

    
    let total = unitPrice * quantity * days;

    
    totalInput.value = total;

  
    if (total > 1000) {
        alert("You are eligible for a gift coupon!");
    }
});