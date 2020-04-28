async function displayPeople(){
    let response = await fetch('api/people/');
    
    let peopleJSON = await response.json();
    let peopleDiv = document.getElementById("people");
    peopleDiv.innerHTML = "";
    
    for(i in peopleJSON){
        let person = peopleJSON[i];
        peopleDiv.append(getPerson(person));
    }
    
}

function getPerson(person){
    let personSection = document.createElement("section");
    personSection.classList.add("person");

    let aTitle = document.createElement("a");
    aTitle.setAttribute("data-id", person._id);
    aTitle.onclick = showPersonDetails;
    let h2Elem = document.createElement("h2");
    h2Elem.textContent = person.name;
    aTitle.append(h2Elem);
    personSection.append(aTitle);

    return personSection;
}

async function showPersonDetails(){
    showForms();
    let id = this.getAttribute("data-id");
    let response = await fetch(`/api/people/${id}`);

    if(response.status != 200){
        //display an error
        console.log("Error reciving person");
        return;
    }

    let person = await response.json();
    document.getElementById("person-id").textContent = person._id;
    document.getElementById("txt-name").value = person.name;
    document.getElementById("txt-age").value = person.age;
    document.getElementById("txt-height").value = person.height;
    document.getElementById("txt-coffee-order").value = person.coffeeOrder;
    document.getElementById("txt-hobbies").value = person.hobbies;
    //for (hobby in person.hobbies) {
    //    document.getElementById("txt-hobbies").innerHTML += `${hobby} `;
    //}
    document.getElementById("txt-description").value = person.description;
}

async function addPerson(){
    let personName = document.getElementById("txt-add-name").value;
    let personAge = document.getElementById("txt-add-age").value;
    let personHeight = document.getElementById("txt-add-height").value;
    let personCoffeeOrder = document.getElementById("txt-add-coffee-order").value;
    let personHobbies = document.getElementById("txt-add-hobbies").value;
    let personDescription = document.getElementById("txt-add-description").value;

    let person = {"name":personName, "age":personAge, "height":personHeight, "coffeeOrder":personCoffeeOrder, "hobbies":personHobbies,"description": personDescription};
    
    let response = await fetch('/api/people',{
        method:"POST",
        headers:{
            'Content-Type':'application/json;charset=utf-8',
        },
        body:JSON.stringify(person),
    });

    if(response.status != 200){
        console.log("ERROR posting data");
        return;
    }

    let result = await response.json();
    console.log(result);
    displayPeople();
}

async function editPerson(){
    let personId = document.getElementById("person-id").textContent;
    let personName = document.getElementById("txt-name").value;
    let personAge = document.getElementById("txt-age").value;
    let personHeight = document.getElementById("txt-height").value;
    let personCoffeeOrder = document.getElementById("txt-coffee-order").value;
    let personHobbies = document.getElementById("txt-hobbies").value;
    let personDescription = document.getElementById("txt-description").value;
    let person = {"name":personName, "age":personAge, "height":personHeight, "coffeeOrder":personCoffeeOrder, "hobbies":personHobbies, "description": personDescription};

    let response = await fetch(`/api/people/${personId}`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json;charset=utf-8',
        },
        body: JSON.stringify(person)
    });

    if(response.status != 200){
        console.log("Error updating person");
        return;
    }

    let result = await response.json();
    displayPeople();
}

async function deletePerson(){
    let personId = document.getElementById("person-id").textContent;
    console.log(personId)
    let response = await fetch(`/api/people/${personId}`,{
        method:"DELETE",
        headers:{
            'Content-Type':'application/json;charset=utf-8',
        }
    });

    if(response.status != 200){
        console.log("Error deleting");
        return;
    }

    let result = await response.json();
    displayPeople();
}

function showForms() {
    document.getElementById("person-details").classList.remove("hidden");
}

function showAdd() {
    document.getElementById("add-person").classList.remove("hidden");
    document.getElementById("show-add").classList.add("hidden");
}

window.onload = function(){
    this.displayPeople();

    let addBtn = document.getElementById("btn-add-person");
    addBtn.onclick = addPerson;

    let showAddBtn = document.getElementById("show-add");
    showAddBtn.onclick = showAdd;

    let editBtn = document.getElementById("btn-edit-person");
    editBtn.onclick = editPerson;

    let deleteBtn = document.getElementById("btn-delete-person");
    deleteBtn.onclick = deletePerson;
}