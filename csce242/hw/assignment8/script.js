function quoteCycle() {
    if (quoteNum==5) {
        quoteNum=0;
    }

    document.getElementById("output").innerHTML = quotes[quoteNum];
    quoteNum++;
}
function draw() {
    let rainbow = document.getElementById("rainbow");
    let i;
    for(i=0;i<6;i++) {
        let pElem = document.createElement("p");
        pElem.classList.add(colors[i]);
        rainbow.append(pElem);
        if(i==5) {
            let gold = document.createElement("img");
            gold.src = `images/gold.png`;
            gold.classList.add("gold");
            pElem.append(gold);
        }
    }
    
    btnDraw.onclick = null;
}



let quotes = [];
let colors = [];
let quoteNum = 0;


let btnDraw = document.getElementById("btn-draw");
btnDraw.onclick = draw;

window.setInterval(quoteCycle, 2000);

window.onload = function() {
    quotes.push(`However beautiful the strategy, you should occasionally look at the results<br>-Sir Winston Churchill`);
    quotes.push(`The more you sweat in training, the less you bleed in combat<br>-Richard Marcinko`);
    quotes.push(`Heroism is endurance for one moment more<br>-George F. Kennan`);
    quotes.push(`Never interrupt your enemy when he is making a mistake<br>-Napoleon Bonaparte.`);
    quotes.push(`In real life, strategy is actually very straightforward. You pick a general direction and implement like hell.<br>-Jack Welch`);

    colors.push(`red`);
    colors.push(`orange`);
    colors.push(`yellow`);
    colors.push(`green`);
    colors.push(`blue`);
    colors.push(`violet`);

    quoteCycle();
}