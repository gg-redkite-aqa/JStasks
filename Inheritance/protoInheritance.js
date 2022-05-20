class Animal {
    constructor(name) {
        this.name = name
    }

    move() {
        console.log(this.name + " is moving")
    }
}

let cat = new Animal("Garfield");
cat.move()
