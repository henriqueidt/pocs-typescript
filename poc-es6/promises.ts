// Promise.allSettled()
// - Returns a promise that resolves after all the given promisses are resolved or rejected

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "First Promise Resolved");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 200, "Second Promise Rejected");
});

Promise.allSettled([promise1, promise2]).then((results) => {
  // Only executes after all promises are resolved/rejected
  results.forEach((result) => console.log(result.status));
});

// Promise.allSettled() vs Promise.all()
// - Promise.all() - fails fast if any promise is rejected
// - Promise.allSettled() - waits for all promises to complete, independent of the outcome

Promise.all([promise1, promise2])
  .then((results) => {
    console.log("Promise.all results:", results);
  })
  .catch((error) => {
    console.log(
      "Promise.all error will be executed immediately when promise2 fails:",
      error
    );
  });
