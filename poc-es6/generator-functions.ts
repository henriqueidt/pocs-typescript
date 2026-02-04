/**
 * GENERATOR FUNCTIONS
 *
 * DEFINITION:
 * - Returns a Generator object, wich conforms to iterator protocol
 * - Each time the Generator Function is called, it creates a new generator
 * - Each generator keeps its own execution context and can be executed independently
 * - Control flow can go two ways:
 * - Caller to callee: next(), throw() and return()
 * - Callee to caller: return, throw, yield and yield*
 *  */

function* idMaker() {
  let index = 0;
  while (index < 3) {
    yield index++;
  }
}

const idGenerator = idMaker();

// when the generator `next()` is called, it will execute its body,
// until the next `yield`, `yield*` `return` expression or if an error is thrown

/**
 * In this case, the `next()` call will return an object:
 * {
 *  value: 0, - the value yielded by the function
 *  done: false - will only return true if the function is finished (return or error)
 * }
 * */
console.log(idGenerator.next()); // 0
console.log(idGenerator.next()); // 1
console.log(idGenerator.next()); // 2

/**
 * For this last call, as the function gets out of the while loop
 * and there is no more yieldede values, it returns
 * {
 *  value: undefined, - no yielded value
 *  done: true - the function has "finished"
 * }
 * */
console.log(idGenerator.next());

// Passing parameters to generator functions
function* logValue(): Generator<undefined, void, string> {
  console.log(1, yield);
  console.log(2, yield);
  console.log(3, yield);
}

const generatorLog = logValue();

generatorLog.next();
generatorLog.next("blue"); // 1 blue
generatorLog.next("yellow"); // 2 yellow
generatorLog.next("green"); // 3 green

// Adding a return statement in the generator

function* withReturn() {
  yield "green";
  return "blue";
}

const generatorWithReturn = withReturn();
console.log(generatorWithReturn.next()); // { value: "green", done: false }
console.log(generatorWithReturn.next()); // { value: "blue", done: true }
