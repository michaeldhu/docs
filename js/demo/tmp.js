// function Super() {}

// Super.n = 'n';

// Super.prototype.getN = function () {
//   return this.constructor.n;
// }

// function Sub() {
//   Super.apply(this, arguments);
// }

// Sub.cls = 'cls';

// Object.setPrototypeOf(Sub.prototype, Super.prototype);

// Sub.prototype.getCls = function () {
//   return this.constructor.cls;
// }

// Object.setPrototypeOf(Sub, Super);

// const tmp = new Sub();

// console.log(tmp.getN())
// console.log(tmp.getCls())
// console.log(Sub.n)
// console.log(Sub.cls)
// console.log(tmp instanceof Sub)
// console.log(tmp instanceof Super)
