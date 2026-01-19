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
