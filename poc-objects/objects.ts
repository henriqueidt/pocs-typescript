// OBJECTS

// Defining properties:
// Every property in a object has some default attributes,
// that we can control when defining them

type User = {};

const user: User = {};

// value - the value of the property
// writable - if the value can be reassigned
// enumerable - if it will be shown in Object.keys or for..in
// configurable - if the property can be deleted or redefined
Object.defineProperty(user, "id", {
  value: "12345",
  writable: false,
  enumerable: false,
  configurable: false,
});
