function gen(arr) {
  let i = 0, len = arr.length;

  return {
    next: function () {
      if (i === len) {
        return { value: undefined, done: true }
      }

      return { value: arr[i++](), done: false }
    },
    [Symbol.iterator]: function () {
      return this;
    }
  }
}

const seq = gen([() => 1, () => 2, () => 3]);
