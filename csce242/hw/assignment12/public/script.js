async function showCats(){
    let response = await fetch('api/cats/');
    let catsJSON = await response.json();
    let catDiv = document.getElementById("cats");
    catDiv.innerHTML = "";

    for(i in catsJSON){
        let cat = catsJSON[i];
        catDiv.append(getCat(cat));
    }
}

function getCat(cat){
    let returnDiv = document.createElement("div");
    returnDiv.classList.add("cat");

    let id = document.createElement("a");
    id.setAttribute("data-id", cat.id);
    id.href = "#";
    id.onclick = showCatInfo;
    let h3Elem = document.createElement("h3");
    h3Elem.textContent = cat.name;
    id.append(h3Elem);
    returnDiv.append(id);

    return returnDiv;
}

async function showCatInfo(){
    let id = this.getAttribute("data-id");
    let response = await fetch(`/api/cats/${id}`);

    if(response.status != 200){
        console.log("Error, couldn't obtaining cat");
        return;
    }

    let cat = await response.json();
    document.getElementById("cat-id").textContent = cat.id;
    document.getElementById("txt-name").value = cat.name;
    document.getElementById("txt-color").value = cat.color;
    document.getElementById("txt-age").value = cat.age;
}

async function addCat(){
    let name = document.getElementById("txt-add-name").value;
    let color = document.getElementById("txt-add-color").value;
    let age = document.getElementById("txt-add-age").value;

    let cat = {"name":name, "color": color, "age":age};
    
    let response = await fetch('/api/cats',{
        method:"POST",
        headers:{
            'Content-Type':'application/json;charset=utf-8',
        },
        body:JSON.stringify(cat),
    });

    if(response.status != 200){
        console.log("ERROR posting data");
        return;
    }

    let result = await response.json();
    console.log(result);
    showCats();
    document.getElementById("message").innerHTML = `CAT ADDED SUCCESSFULLY!`;
    setTimeout(function(){
        document.getElementById("message").innerHTML = ``;
    }, 3000);
}

async function editCat(){
    let id = document.getElementById("cat-id").textContent;
    let name = document.getElementById("txt-name").value;
    let color = document.getElementById("txt-color").value;
    let age = document.getElementById("txt-age").value;

    let cat = {"name":name, "color": color, "age":age};

    let response = await fetch(`/api/cats/${id}`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json;charset=utf-8',
        },
        body: JSON.stringify(cat)
    });

    if(response.status != 200){
        console.log("Error updating cat");
        return;
    }

    let result = await response.json();
    showCats();
    document.getElementById("message").innerHTML = `YOU CHANGED THIS CAT FOR GOOD!`;
    setTimeout(function(){
        document.getElementById("message").innerHTML = ``;
    }, 3000);
}

async function deleteCat(){
    let id = document.getElementById("cat-id").textContent;
    
    let response = await fetch(`/api/cats/${id}`,{
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
    showCats();
}

window.onload = function(){
    this.showCats();
    let addBtn = document.getElementById("btn-add-cat");
    addBtn.onclick = addCat;

    let editBtn = document.getElementById("btn-edit-cat");
    editBtn.onclick = editCat;

    let deleteBtn = document.getElementById("btn-delete-cat");
    deleteBtn.onclick = deleteCat; //sad
}