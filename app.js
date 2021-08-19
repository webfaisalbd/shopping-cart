function updateCaseNumber(product, price, isIncreasing) {
    const caseInput = document.getElementById(product + '-number');
    let caseNumber = caseInput.value;
    if (isIncreasing) {
        caseNumber = parseInt(caseNumber) + 1;
    }
    else if (caseNumber > 0) {
        caseNumber = parseInt(caseNumber) - 1;
    }
    caseInput.value = caseNumber;

    // update balance
    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = caseNumber * price;

    calculatetotal();
}

function calculatetotal() {
    const phoneInput = document.getElementById('phone-number');
    const phoneNumber = parseInt(phoneInput.value);
    const phoneTotal = phoneNumber * 1219;

    const caseInput = document.getElementById('case-number');
    const caseNumber = parseInt(caseInput.value);
    const caseTotal = caseNumber * 59;

    // three formula
    const subTotal = phoneTotal + caseTotal;
    const taxTotal = subTotal / 10;
    const total = subTotal + taxTotal;


    // three formula set as a innerText
    const subAmount = document.getElementById('sub-total');
    subAmount.innerText = subTotal;

    const taxAmount = document.getElementById('tax-amount');
    taxAmount.innerText = taxTotal;

    const totalAmount = document.getElementById('total-price');
    totalAmount.innerText = total;

}



//handle phone increase decrease events 
document.getElementById('phone-plus').addEventListener('click', function () {
    updateCaseNumber('phone', 1219, true);
})

document.getElementById('phone-minus').addEventListener('click', function () {
    updateCaseNumber('phone', 1219, false);
})

//handle case increase decrease events 
document.getElementById('case-plus').addEventListener('click', function () {
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = parseInt(caseInput.value) + 1;
    // caseInput.value = caseNumber;
    // console.log(caseInput.value);
    updateCaseNumber('case', 59, true);
})

document.getElementById('case-minus').addEventListener('click', function () {
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = parseInt(caseInput.value) - 1;
    // caseInput.value = caseNumber;
    // console.log(caseInput.value);
    updateCaseNumber('case', 59, false);

})