function Shape(x, y) {
  this.x = x;
  this.y = y;
}

Shape.isShape = function (shape) {
  return shape instanceof Shape
}

Shape.prototype.fill = function (color) {
  this.fill = color;
}

function Rect(width, height, x, y) {
  Shape.call(this, x, y);

  this.width = width;
  this.height = height;
}

// instance properties
Object.setPrototypeOf(Rect.prototype, Shape.prototype)
// Rect.prototype = Object.create(Shape.prototype)

// static properties
Object.setPrototypeOf(Rect, Shape);

console.log(Rect.prototype)

const rect = new Rect(10, 10, 0, 0);
