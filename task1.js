function Person (name,age){
    this.name= name
    this.age= age
    this.print = function (){console.log(`name: ${this.name} age: ${this.age}`)}
}

new Person("chaya", 23).print()