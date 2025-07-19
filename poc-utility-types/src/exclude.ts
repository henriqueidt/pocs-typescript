// Exclude creates a type by excluding certain keys from another type

type AnimalTypes = "dog" | "cat" | "rabbit";

type DomesticAnimal = Exclude<AnimalTypes, "rabbit">;

const myPet: DomesticAnimal = "dog"; // Valid
// const wildAnimal: DomesticAnimal = "rabbit"; // Error: Type '"rabbit"' is not assignable to type 'DomesticAnimal'.

type PossibleTypes = string | number | (() => void);

type ExcludedTypes = Exclude<PossibleTypes, Function>;

// ExcludedTypes will be string | number

type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };

type T3 = Exclude<Shape, { kind: "circle" }>;

const square: T3 = { kind: "square", x: 10 }; // Valid
// const circle: T3 = { kind: "circle", radius: 5 }; // Error: Type '{ kind: "circle"; radius: number; }' is not assignable to
