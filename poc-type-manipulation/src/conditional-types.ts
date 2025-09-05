// Selects a type based on a condition

interface Animal {
  live(): void;
}

interface Dog extends Animal {
  bark(): void;
}

type TypeIfDogIsAnimal = Dog extends Animal ? number : string; // number

type RegExpIsAnimal = RegExp extends Animal ? number : string; // string

// -------------------------------------------------------------

interface IdLabel {
  id: number;
}

interface NameLabel {
  name: string;
}

// If T is a number, then the type is IdLabel, otherwise it is NameLabel
type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  console.log(idOrName)
  throw "unimplemented";
}

let nameLabel = createLabel("abcdef"); // NameLabel

let idLabel = createLabel(123); // IdLabel

// -------------------------------------------------------------

// Extracting types using conditional types. If T has a property 'message', extracts its type, otherwise returns 'never'.
type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;

interface Email {
  message: string;
}

interface SomethingElse {
  foo(): void;
}

type EmailMessageContents = MessageOf<Email>; // string

type SomethingElseMessageContents = MessageOf<SomethingElse>; // never

// -------------------------------------------------------------

// Extracting type from an array
type Flatten<T> = T extends any[] ? T[number] : T;

type Str = Flatten<string[]>; // string

type Num = Flatten<number>; // number

// Can also use infer to get the type of elements in an array
type FlattenWithInfer<T> = T extends Array<infer U> ? U : T;