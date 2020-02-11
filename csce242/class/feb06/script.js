function displayEmotion() {
    const firstName = document.getElementById("txt-first-name").value;
    const favColor = document.getElementById("txt-fav-color").value;
    const emotion = document.getElementById("txt-emotion").value;


    /*
    let price = parseFloat(document.getElementById("txt-price").value)
    parseInt(...)
    let tax = document.getElementById("tax-span").textContent()
    */


    let displayP = document.getElementById("output");
    displayP.innerHTML = `${firstName} your fav color is ${favColor} and you feel ${emotion}`;

}

const btnDisplay = document.getElementById("btn-display");
btnDisplay.onclick = displayEmotion;
