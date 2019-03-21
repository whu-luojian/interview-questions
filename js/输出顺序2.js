function a() {
  this.b = 3
}

var c = new a()
a.prototype.b = 9
var b = 7
a()
console.log(b)
console.log(c.b)
