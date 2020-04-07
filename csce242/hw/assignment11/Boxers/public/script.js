async function getBoxers(){
    let response = await fetch("http://localhost:3000/api/boxers");
    let boxersJSON = await response.json();
    let boxerDiv = document.getElementById("boxer-div");

    for(i in boxersJSON){
        let boxer = boxersJSON[i];
        boxerDiv.append(getBoxer(boxer));
    }
}

function getBoxer(boxer){
    boxerDiv = document.createElement("div");
    boxerDiv.classList.add("boxer");

    infoDiv = document.createElement("div");
    infoDiv.classList.add("info");
    imgDiv = document.createElement("div");

    boxImg = document.createElement("img");
    boxImg.src = boxer.img;
    imgDiv.append(boxImg)

    h2Elem = document.createElement("h2");
    h2Elem.innerText = boxer.name;
    boxerDiv.append(h2Elem);

    pElem = document.createElement("p");
    pElem.innerHTML = `Height: ${boxer.height}<br>Reach: ${boxer.reach}<br>Stance: ${boxer.stance}<br>Record: ${boxer.record[0]} Fights, ${boxer.record[1]} Wins, ${boxer.record[2]} Wins by KO, ${boxer.record[3]} Losses, ${boxer.record[4]} Draws/No contests,`
    infoDiv.append(pElem);
    
    infoWrapper = document.createElement("div");
    infoWrapper.classList.add("wrapper");
    infoWrapper.append(imgDiv);
    infoWrapper.append(infoDiv);
    boxerDiv.append(infoWrapper);

    return boxerDiv;
    
}

window.onload = function(){
    getBoxers();
}