
class Animal{
    constructor(name) {
        this.name = name
    }
    move(){
        alert(this.name + " is moving")
    }
}

let cat = new Animal("Garfield");
cat.move()
