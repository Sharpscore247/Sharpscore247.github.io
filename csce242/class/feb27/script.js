document.onload = showToys;
function showToys() {
    
    let color = "red";

   if (output.innerHTML=="") {
        let toys = ["drum","ball","car","bike"];
        let i;
        let ulElem = document.createElement("ul");
        output.append(ulElem);
        for(i=0;i<toys.length;i++) {
            let liElem = document.createElement("li");
            ulElem.append(liElem);
            liElem.innerHTML = `${toys[i]}`
       }
    } else if(output.classList.contains("hidden")) {
        if(color=="red") {
            output.style.backgroundColor = color;
            color="blue";
        } else {
            output.style.backgroundColor = color;
            color="red";
        }
        output.classList.remove("hidden")
    } else {
        output.classList.add("hidden")
    }
}


setInterval(showToys,1000);