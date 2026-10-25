function Animal(name){
    this.name = name
}
Animal.prototype.makeSound = function(){console.log(`Animal make sound`)}


const dog = new Animal("dog")
dog.makeSound = function(){console.log(`dog make sound`)}
const cat = new Animal("cat")
cat.makeSound = function(){console.log(`cat make sound`)}

dog.makeSound()
cat.makeSound()

console.log(Object.getPrototypeOf(dog)==Object.getPrototypeOf(cat))



