// Pick can be used to create a new type by picking specific properties from another type.

interface Animal {
  name: string;
  age: number;
  species: string;
}

type AnimalName = Pick<Animal, "name">;

const dog: AnimalName = {
  name: "Bruce",
};

type GenericAnimal = Pick<Animal, "name" | "species">;

const cat: GenericAnimal = {
  name: "Wayne",
  species: "Cat",
};
