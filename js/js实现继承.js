function Animal() {
  this.type = 'animal'
}

function dog() {
  Animal.call()
}

dog.prototype = Object.assign(Animal.prototype, {
  constructor: {
    value: dog,
    enumerable: false,
    writable: true,
    configurable: true
  }
})