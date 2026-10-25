function Car(barnd){
    this.barnd = barnd
    this.fuel = function(){console.log("putting gas...")}
}
Car.prototype.drive = function(){console.log("vrrroooomm")}


function Tesla(barnd){
    this.barnd = barnd
    this.fuel = function(){console.log("charge...")}
}

Object.setPrototypeOf(Tesla.prototype,Car.prototype)

new Tesla("b").drive()