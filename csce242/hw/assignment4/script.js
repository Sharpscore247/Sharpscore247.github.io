function calculate() {
    let firstName = document.getElementById("txt-first-name").value;
    let lastName = document.getElementById("txt-last-name").value;
    let productName = document.getElementById("txt-product-name").value;
    let productCount = document.getElementById("txt-product-count").value;
    let productPrice = document.getElementById("txt-product-price").value;
    let tax = 1.07;
    let total = productCount * productPrice * tax;

    let display = document.getElementById("output");

    display.innerHTML = `${firstName} ${lastName} ordered ${productCount} ${productName}(s) 
    \n totalling: $${total}`;
}

const btnCalculate = document.getElementById("btn-calculate");
btnCalculate.onclick = calculate;