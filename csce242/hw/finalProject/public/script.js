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
    let h3Elem = document.createElement("h3");
    h3Elem.textContent = person.name;
    aTitle.append(h3Elem);
    personSection.append(aTitle);

    return personSection;
}

async function showPersonDetails(){
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
    document.getElementById("txt-description").value = person.description;
}

async function addPerson(){
    let personName = document.getElementById("txt-add-name").value;
    let personDescription = document.getElementById("txt-add-description").value;

    let person = {"name":personName, "description": personDescription};
    
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

window.onload = function(){
    this.displayPeople();

    let addBtn = document.getElementById("btn-add-person");
    addBtn.onclick = addPerson;

    let editBtn = document.getElementById("btn-edit-person");
    editBtn.onclick = editPerson;

    let deleteBtn = document.getElementById("btn-delete-person");
    deleteBtn.onclick = deletePerson;
}