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
  while (true) {
    yield index++;
  }
}

const idGenerator = idMaker();

// when the generator `next()` is called, it will execute its body,
// until the next `yield`, `yield*` `return` expression or if an error is thrown

console.log(idGenerator.next()); // 0
