
let animal = {
    name: "Animal",
    move(){
        alert(this.name + " is moving");
    }
}

let cat = Object.create(animal);
cat.name = "Garfield"
cat.move()
