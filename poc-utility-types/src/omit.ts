// Omit is the opposit of Pick, it creates a type by omitting certain keys from another type.

interface Animal {
  name: string;
  age: number;
  species: string;
}

type AnimalWithoutAge = Omit<Animal, "age">;

const pig: AnimalWithoutAge = {
  name: "Porky",
  species: "Pig",
};

type AnimalWithoutNameAndSpecies = Omit<Animal, "name" | "species">;

const turtle: AnimalWithoutNameAndSpecies = {
  age: 100,
};
console.log({ pig, turtle });
