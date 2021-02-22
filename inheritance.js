

Function.prototype.inherits = function(superClass) {
  function Surrogate() {};
  Surrogate.prototype = superClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
}

function Animal(name) {
  this.name = name;
}

function Cat(sound) {
  this.sound = sound;
}

Animal.prototype.legs = function() {
  console.log("i have 4");
}
Cat.inherits(Animal);
let cat = new Animal("fluffy")
let fluffy = new Cat("meow")


fluffy.legs();
