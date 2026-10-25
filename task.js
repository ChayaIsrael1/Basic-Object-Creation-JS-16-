// Exercise 1 - Phone

function Phone(brand,model){
    this.brand =brand
    this.model =model
    this.details = function () {console.log(`Phone: ${this.brand} ${this.model}`)}
}

new Phone( "Samsung","S22").details()

// Exercise 2 - Rectangle

function Rectangle(width,height){
    this.width = width
    this.height = height
    this.area = function(){return this.width*this.height}
}

console.log(new Rectangle(5,4).area())

//Exercise 3 - BankAccount


function BankAccount(owner,balance){
    this.owner =owner
    this.balance = balance
    this.deposit= function(amount){this.balance+=amount}
    this.withdraw = function(amount){this.balance-=amount}
    this.checkBalance = function(){console.log(`Balance:${this.balance}`)}
}

const A = new BankAccount("a",50)
A.checkBalance()
A.deposit(50)
A.checkBalance()
A.withdraw(100)
A.checkBalance()

// Exercise 4 - Animal & Dog


function Animal(name){
    this.name = name
}
Animal.prototype.speak = function(){console.log(`${this.name} makes a sound`)}


function Dog(name){
    this.name = name
    this.Bark = function(){console.log(`${this.name} barks`)}
}

Object.setPrototypeOf(Dog.prototype,Animal.prototype)

const D = new Dog("Toni")
D.speak()
D.Bark()

// Exercise 5 - Vehicle & Car


function Vehicle(type){
    this.type = type
}

Vehicle.prototype.describe = function(){console.log(`This is a ${this.type}`)}
Vehicle.prototype.type = "car"

function Car(brand){
    new Vehicle("car")
    this.brand = brand
    this.info = function(){console.log(`This is a ${this.brand} ${this.type}`)}
}
Object.setPrototypeOf(Car.prototype,Vehicle.prototype)

const C = new Car("BMV")
C.describe()
C.info()

//Exercise 6 - Shape Polymorphism

function Shape(){
}
    Shape.prototype.area = function(){return 0}

function Circle(radius){
    this.radius = radius
}
    Circle.prototype.area = function(){return Math.PI* this.radius*this.radius}


function Square(side){
    this.side = side
}
    Square.prototype.area = function(){return this.side*this.side}
Object.setPrototypeOf(Circle.prototype,Shape.prototype)
Object.setPrototypeOf(Square.prototype,Shape.prototype)


const S = new Square(3).area()
console.log(S)
const Ci = new Circle(3).area()
console.log(Ci)

// Exercise 7 - Book

class Book{
    constructor(title, author){
        this.title = title
        this.author = author
    } 
    info() {
        console.log(`The ${this.title} By ${this.author}`)
    }
}

const b =new Book('a', "B").info()

// Exercise 8 - Person & Student

class Person{
    constructor(name){
        this.name = name
    }
    greet(){
        console.log(` Hello, I'm ${this.name}`)
    } 
}

class Student extends Person{
    constructor(name, school){
        super(name)
        this.school = school
    }
    study(){
        console.log(`${this.name} studying at ${this.school}`)
    } 
}

const St = new Student("Alice", "Oxford")
St.greet()
St.study()

// Exercise 9 - Employee & Manager (Polymorphism + Private Fields)

class Employee {
    #salary

    constructor(salary){
        this.#salary = salary
    }
    getSalary() {return this.#salary}
    work() {console.log(`Employee is working`)}

}

class Manager extends Employee {    
    constructor(salary){
        super(salary)
    }
    work() {console.log(`Manager is managing`)}

}

const E1 = new Employee(400)
console.log(E1.getSalary()) 
E1.work()

const M1 = new Manager(400)
console.log(M1.getSalary()) 
M1.work()
