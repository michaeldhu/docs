function wrap(genFn, tryEntries) {
  const ctx = {
    next: 0,
    sent: undefined,
    done: false,
    method: 'next',
    arg: undefined,
    // try catch block: tryLoc, catchLoc, finallyLoc, afterLoc
    tryEntries: []
  }

  const invoke = (value) => {
    return { done: ctx.done, value };
  }

  const next = (value) => {
    return invoke(value);
  }

  const returnFn = (value) => {
    ctx.done = true;
    return invoke(value);
  }

  const throwFn = (reason) => {
    ctx.done = true;
    return invoke(reason);
  }

  return {
    next,
    return: returnFn,
    throw: throwFn
  };
}

function gen() {
  // define variables;
  let a, b;
  return wrap((ctx) => {
    while(1) {
      switch(ctx.next) {

      }
    }
  }, [])
}
