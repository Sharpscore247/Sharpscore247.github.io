function showGirl() {
    let List1 = document.getElementById("item1");
    let List2 = document.getElementById("item2");
    let List3 = document.getElementById("item3");
    List1.innerHTML = "Dolls";
    List2.innerHTML = "sparkles";
    List3.innerHTML = "Pink";
}
function showBoy() {
    let List1 = document.getElementById("item1");
    let List2 = document.getElementById("item2");
    let List3 = document.getElementById("item3");
    List1.innerHTML = "Trucks";
    List2.innerHTML = "Trains";
    List3.innerHTML = "Tools";
}
function toHappy() {
    if(document.getElementById("face").src=="file:///D:/Sharpscore247.github.io/csce242/class/feb04/images/sad.png") {
        document.getElementById("face").src="images/happy.png";
    }
    else if(document.getElementById("face").src=="file:///D:/Sharpscore247.github.io/csce242/class/feb04/images/happy.png"){
        document.getElementById("face").src="images/thinking.jpg";
    }
    else if(document.getElementById("face").src=="file:///D:/Sharpscore247.github.io/csce242/class/feb04/images/thinking.jpg"){
        document.getElementById("face").src="images/confused.jpg";
    }
    else if(document.getElementById("face").src=="file:///D:/Sharpscore247.github.io/csce242/class/feb04/images/confused.jpg"){
        document.getElementById("face").src="images/degdeg.png";
    }
    else if(document.getElementById("face").src=="file:///D:/Sharpscore247.github.io/csce242/class/feb04/images/degdeg.png"){
        document.getElementById("face").src="images/moon.jpg";
    }
    else if(document.getElementById("face").src=="file:///D:/Sharpscore247.github.io/csce242/class/feb04/images/moon.jpg"){
        document.getElementById("face").src="images/disturbed.png";
    }
    else if(document.getElementById("face").src=="file:///D:/Sharpscore247.github.io/csce242/class/feb04/images/disturbed.png"){
        document.getElementById("face").src="images/sad.png";
    }
}

let btnBoy = document.getElementById("btn-boy");
let btnGirl = document.getElementById("btn-girl");
let face = document.getElementById("face");
let btnFace = document.getElementById("face-btn");
btnBoy.onclick = showBoy;
btnGirl.onclick = showGirl;
btnFace.onclick = toHappy;
