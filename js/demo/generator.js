function* gen() {
  yield 1;
  yield 2;
  yield 3;
  return 0;
}

function autoExecutor(generator) {
  const next = generator.next();

  console.log(next);

  if (!next.done) {
    autoExecutor(generator)
  }
}

autoExecutor(gen());


function construct() {
  const ctx = {
    next: 0,
    input: undefined,
    value: undefined,
    done: false,
  };

  function executor() {

  }

  return {
    next: (value) => {

    }
  }
}
