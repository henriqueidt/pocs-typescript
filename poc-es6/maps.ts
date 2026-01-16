/**
 * MAPS
 *
 * DEFINITION:
 * - Maps are similar to objects in js, with the difference that they
 * can have any data type as key (object, functons, primitives),
 * opposing to objects which can have only strings as keys
 * - It's similar to dictionary in other languages
 * - Maps remember the insertion order
 *  */

// Simple map creation
const carPrices: Map<string, number> = new Map();
carPrices.set("volvo", 20000);
carPrices.set("mercedes", 30000);
carPrices.set("audi", 35000);

// Map with initial values
const fruitPrices: Map<string, number> = new Map([
  ["banana", 1.0],
  ["apple", 1.5],
  ["orange", 2.0],
]);

// Accessing map values
console.log("Price of Volvo:", carPrices.get("volvo")); // 20000

// Checking existence of a key
console.log("Has Audi?", carPrices.has("audi")); // true

// Size of the map
console.log("Size of the map:", carPrices.size); // 3

// Iterating over the map
carPrices.forEach((price, car) => {
  console.log(`${car}: $${price}`);
});

// Iterating using for..of
for (const [car, price] of carPrices) {
  console.log(`${car}: $${price}`);
}

// Maps with Object keys
type User = { name: string };
type UserSession = { sessionId: number; token: string };
const user1: User = { name: "john" };
const userSession1: UserSession = { sessionId: 1, token: "abc" };

const userSessions: Map<User, UserSession> = new Map();
userSessions.set(user1, userSession1);

console.log("User Session for John:", userSessions.get(user1)); // { sessionId: 1, token: "abc" }

// Maps can be useful to store DOM Elements data using the element itself as a key
type ElementData = { clicks: number; lastClicked: Date };
const elementState = new Map<HTMLElement, ElementData>();

const documentMock = {
  querySelectorAll: (a: string) => [
    {
      addEventListener: (b: string, cb: () => void) => {},
    } as HTMLElement,
  ],
};

documentMock?.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    elementState.set(button, {
      clicks: (elementState.get(button)?.clicks || 0) + 1,
      lastClicked: new Date(),
    });
  });
});
