function toggleNav(){
    let navItems = document.getElementById("nav-items");
    navItems.classList.toggle("hidden");
}

function calculateAge() {
    let name1 = document.getElementById("txt-name-1").value;
    let name2 = document.getElementById("txt-name-2").value;
    let name3 = document.getElementById("txt-name-3").value;
    let age1 = document.getElementById("age-1").value;
    let age2 = document.getElementById("age-2").value;
    let age3 = document.getElementById("age-3").value;
    let output = document.getElementById("age-output")

    if(age1>age2 && age2>age3) {
        output.innerHTML = `Oldest to youngest is:\n${name1}, ${name2}, ${name3}`
    } else if(age1>age3 && age3>age2) {
        output.innerHTML = `Oldest to youngest is:\n${name1}, ${name3}, ${name2}`
    } else if(age2>age1 && age1>age3) {
        output.innerHTML = `Oldest to youngest is:\n${name2}, ${name1}, ${name3}`
    } else if(age2>age3 && age3>age1) {
        output.innerHTML = `Oldest to youngest is:\n${name2}, ${name3}, ${name1}`
    } else if(age3>age2 && age2>age1) {
        output.innerHTML = `Oldest to youngest is:\n${name3}, ${name2}, ${name1}`
    } else if(age3>age1 && age1>age2) {
        output.innerHTML = `Oldest to youngest is:\n${name3}, ${name1}, ${name2}`
    } else {
        output.innerHTML = `${age1} ${age2} ${age3} Please re-enter information correctly`
    }
    

}

function fundraiser() {
    let funds = document.getElementById("funds").value;
    let output = document.getElementById("funds-output")

    if(funds/goal > 0 && funds/goal < .25) {
        output.classList.add("none");
    } else if(funds/goal >= .25 && funds/goal < .5) {
        output.classList.add("fourth");
    } else if(funds/goal >= .5 && funds/goal < .75) {
        output.classList.add("half");
    } else if(funds/goal >= .75 && funds/goal < 1) {
        output.classList.add("three-fourths");
    } else if(funds/goal >= 1) {
        output.classList.add("full");
    } else if(funds/goal < 0) {
        output.innerHTML = `Number must be positive`;
    } else {
        output.innerHTML = `Incorrect format`;
    }

}

const navToggle = document.getElementById("nav-toggle");
navToggle.onclick = toggleNav;

const calculate = document.getElementById("btn-calculate");
calculate.onclick = calculateAge;

const goal = 10000;
const display = document.getElementById("btn-display");
display.onclick = fundraiser;