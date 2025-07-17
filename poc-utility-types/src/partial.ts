// Partial allows us to create a type that has all properties of another type but makes them optional.

interface Animal {
  name: string;
  age: number;
  species: string;
}

// With Partial, we can make the function more flexible, allowing to recieve just a part of the Animal type.
function createAnimal(animal: Partial<Animal>): Animal {
  return {
    name: animal.name || "Unknown",
    age: animal.age || 0,
    species: animal.species || "Unknown",
  };
}

const dog = createAnimal({
  name: "Bruce",
});

console.log({ dog });
