/*
function Dog() {
    this.name = "Greg";
    this.color = "Brown";
    this.numLegs = 4;
}

let hound = new Dog();
*/

/*
let Dog = function(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}

let terrier = new Dog("Sara", "Black");
*/

function Dog(ownersName, dogsName, color) {
    this.ownersName = ownersName;
    this.dogsName = dogsName;
    this.color = color;
    this.numLegs = 4;
}

let terrier = new Dog("John", "Spot", "white");
let retriever = new Dog("Harry", "Maddie", "grey");



console.log(`${terrier.ownersName} has a ${terrier.color} dog named ${terrier.dogsName}.`);
console.log(`${retriever.ownersName} has a ${retriever.color} dog named ${retriever.dogsName}.`);



document.getElementById('terrier').innerHTML = `${terrier.ownersName} has a ${terrier.color} dog named ${terrier.dogsName}.`;
document.getElementById('retriever').innerHTML = `${retriever.ownersName} has a ${retriever.color} dog named ${retriever.dogsName}.`;