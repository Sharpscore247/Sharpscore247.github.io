function displayEmotion() {
    //gather all 3 pieces of information & write to console
    const firstName = document.getElementById("txt-first-name").value;
    const favColor = document.getElementById("txt-fav-color").value;
    const emotion = document.getElementById("txt-emotion").value;

    /*
    let price = parseFloat(document.getElementById("txt-price").value)
    parseInt(...)
    let tax = document.getElementById("tax-span").textContent() --maybe parsens--
    */
    
    let displayP = document.getElementById("ex1-result");
    displayP.innerHTML = `${firstName} your fav color is ${favColor}`;
}

function displaySong() {
    const song = document.getElementById("txt-song").value;
    const artist = document.getElementById("txt-artist").value;

    let displayP = document.getElementById("ex2-result");

    displayP.innerHTML = `${song} is a song by ${artist}`;
}

const btnDisplay = document.getElementById("btn-display");
const btnDisplay2 = document.getElementById("btn-display-2");

btnDisplay.onclick = displayEmotion;
btnDisplay2.onclick = displaySong;