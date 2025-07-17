// Readonly transforms all properties of a type into read-only properties

interface Animal {
  name: string;
  age: number;
  species: string;
}

type ReadonlyAnimal = Readonly<Animal>;

const readOnlyDog: ReadonlyAnimal = {
  name: "Bruce",
  age: 5,
  species: "Dog",
};

// Error: Cannot assign to 'name' because it is a read-only property
// readOnlyDog.name = "Robin";
