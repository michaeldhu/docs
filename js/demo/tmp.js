const Cls = {};

Cls[Symbol.hasInstance] = (ins) => {
  return ins === instance;
}

const instance = {}

console.log(instance instanceof undefined);
