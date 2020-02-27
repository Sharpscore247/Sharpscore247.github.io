let leftMargin = 0;
function run() {
    let man = document.getElementById("man");
    setTimeout(move(),200);
}

function move() {
    leftMargin+= 5;

    man.src = "images/run.png";
    document.getElementById("man").style.setProperty('--margin-L', leftMargin +'px');
    man.src = "images/walk.png";
}


function funds() {
    funds = document.getElementById("txt-funds").value;
    percent = funds*100/10000;
    document.getElementById("bar").style.setProperty("--percentage",`${percent}%`)
}


let btnRun = document.getElementById("btn-run");
btnRun.onclick = run;
let btnFunds = document.getElementById("btn-display");
btnFunds.onclick = funds;