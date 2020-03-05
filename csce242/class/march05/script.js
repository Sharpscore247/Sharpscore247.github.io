let children = [];

class Child {

    constructor(firstName, lastName, grade){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = grade;
    }

    populateTable(table){
        let tRow = table.insertRow();
        let tCol1 = tRow.insertCell();
        tCol1.innerText = this.firstName;

        let tCol2 = tRow.insertCell();
        tCol2.innerText = this.lastName;

        let tCol3 = tRow.insertCell();
        tCol3.innerText = this.grade;
    }

    showData() {
        output = document.getElementById("output");

    }
}
//After the DOM has been loaded
//After all the HTML elemnts have been rendered
window.onload = function(){
    let table = document.getElementById("child-table");
    let children = [];

    children.push(new Child("Amy", "Smith", "2"));
    children.push(new Child("Amy", "Smith", "2"));
    children.push(new Child("Amy", "Smith", "2"));
    
    for (let i in children) {
       children[i].populateTable(table);
    }
}

Child.onclick = showData;