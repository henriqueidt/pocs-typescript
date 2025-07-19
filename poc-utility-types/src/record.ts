// Record is used to build an object with sepecific keys and values.

interface Animal {
  name: string;
  age: number;
  species: string;
}

type AnimalRecord = Record<"bruce" | "porky" | "turtle", Animal>;

const animals: AnimalRecord = {
  bruce: { name: "Bruce", age: 5, species: "Dog" },
  porky: { name: "Porky", age: 3, species: "Pig" },
  turtle: { name: "Turtle", age: 100, species: "Turtle" },
};
