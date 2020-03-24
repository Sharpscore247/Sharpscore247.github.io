class Toy {
    constructor(fileName,title,price,age,rating) {
        this.fileName = fileName;
        this.title = title;
        this.price = price;
        this.age = age;
        this.rating = rating;
    }

    getToyItem() {
        return this;
    }
    getDetails(div) {
        let container = document.createElement("div");
        let overlay = document.createElement("div");
        overlay.classList.add("overlay");
        container.classList.add("container");
        container.classList.add("toy");
        container.classList.add("container");
        let image = document.createElement("img");
        image.src = `images/${this.fileName}`;
        container.append(image);
        let head = document.createElement("h1");
        head.innerHTML = `${this.title}`;
        overlay.append(head);
        let details = document.createElement("p");
        details.innerHTML=`<b>Price</b>: $${this.price}<br><b>Age Range</b>: ${this.age}<br><b>Rating</b>: ${this.rating} stars`;
        overlay.append(details);
        container.append(overlay);

        div.append(container);
    }

    
}
window.onload = function(){
    let toysDiv = document.getElementById("toys");
    let toys = [];

    toys.push(new Toy("bear.jpg","Teddy Bear",6.0,"1-4",4));
    toys.push(new Toy("car.jpg","Hotwheels Car",1.0,"5-10",3));
    toys.push(new Toy("dog.jpg","Plush Dog", 4.0, "1-4",4));
    toys.push(new Toy("doll.jpg", "Doll", 2.0, "1-6", 3));
    toys.push(new Toy("elmo.jpg", "Elmo", 8.0, "2-8", 4));
    toys.push(new Toy("yoda.jpg", "Baby Yoda Plush", 25.0, "2-10", 5));
    
    for (let i in toys) {
       toys[i].getDetails(toysDiv);
    }
}
