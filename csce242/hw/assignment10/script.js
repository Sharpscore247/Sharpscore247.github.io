async function showMovies(){
    let response = await fetch('https://portiaportia.github.io/csce242/json/movies.json');
    let moviesJSON = await response.json();
    let movieSection = document.getElementById("movies");
    
    //loop through the breweries
    for(i in moviesJSON){
        let movie = moviesJSON[i];
        movieSection.append(getMovie(movie));
    }
}
function getMovie(movie) {
    returnDiv = document.createElement("div");
    imageDiv = document.createElement("div");
    imageDiv.classList.add("imageDiv");
    image = document.createElement("img");
    image.src = ` https://portiaportia.github.io/csce242/json/${movie.img}`;
    imageDiv.append(image);
    returnDiv.append(imageDiv);

    dataDiv = document.createElement("div");
    dataDiv.classList.add("data");
    h1Elem = document.createElement("h1");
    h1Elem.innerText = movie.title;
    dataDiv.append(h1Elem)
    pElem = document.createElement("p");
    pElem.innerHTML = `<strong>Director:</strong> ${movie.director}<br><strong>Actors:</strong> ${movie.actors}<br><strong>Year Released:</strong> ${movie.year}<br>
                        <strong>Genres:</strong>  ${movie.genre}<br>${movie.description}`;

    dataDiv.append(pElem);
    returnDiv.classList.add("movie");
    returnDiv.append(dataDiv);
    return returnDiv;

}

window.onload = function() {
    this.showMovies();
}
