async function loadBreweries(){
    console.log("fdsafd")
    let response = await fetch('https://api.openbrewerydb.org/breweries');
    let brewJSON = await response.json();
    let brewDiv = document.getElementById("breweries");
 
    //loop through items
    for(i in brewJSON){
        let brewery = brewJSON[i];
        brewDiv.append(showBreweries(brewery));
    }
    

}
function showBreweries(brewery) {
    newDiv = document.createElement("section");
    h1Elem = document.createElement("h1");
    h1Elem.innerText = `${brewery.name}`;

    newDiv.append(h1Elem);
    h3Elem = document.createElement("h3");
    h3Elem.innerHTML = `${brewery.brewery_type} brewery`;
    newDiv.append(h3Elem);
    pElem = document.createElement("p");
    pElem.innerHTML = `${brewery.street}<br>${brewery.city}, ${brewery.state}<br>${brewery.country} ${brewery.postal_code}`;
    newDiv.append(pElem);
    newDiv.classList.add("brewery");
    return newDiv;
}

window.onload = function() {

    loadBreweries();
}
