function funcWithAny(arg: any): any {
  return arg;
}

const outputWithAny = funcWithAny("John");

function funcWithType<Type>(arg: Type): Type {
  return arg;
}

const outputWithType = funcWithType<string>("John");

let outputWithInferredType = funcWithType("John");

function funcGetTypeLength<Type>(arg: Type): number {
  return arg.length;
}

function funcGetTypeArrayLength1<Type>(arg: Type[]): number {
  return arg.length;
}

function funcGetTypeArrayLength2<Type>(arg: Array<Type>): number {
  return arg.length;
}

// ----------------------------------------------

function example<Type>(arg: Type): Type {
  return arg;
}

let exampleUsage: <Input>(arg: Input) => Input = example;

let exampleUsage2: { <Type>(arg: Type): Type } = example;

// ----------------------------------------------

interface GenericExampleFn {
  <Type>(arg: Type): Type;
}

function example3<Type>(arg: Type): Type {
  return arg;
}

let exampleUsage3: GenericExampleFn = example3;

// -----------------------------------------------

interface GenericExampleFn2<Type> {
  (arg: Type): Type;
}

function example4<Type>(arg: Type): Type {
  return arg;
}

let exampleUsage4: GenericExampleFn2<number> = example4;

exampleUsage4(123);

// -----------------------------------------------

class GenericUtils<Type> {
  empty!: Type;
  sum!: (x: Type, y: Type) => Type;
}

let genericString = new GenericUtils<string>();
genericString.sum = function (x, y) {
  return x + y;
};

let genericNumber = new GenericUtils<number>();
genericNumber.sum = function (x, y) {
  return x + y;
};

// ------------------------------------
interface WithId {
  id: string;
}

function logId<Type extends WithId>(arg: Type): Type {
  console.log(arg.id);
  return arg;
}

logId({ id: "123", otherField: 456 });

// --------------------------------------

function getProp<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}

let obj = { a: 1, b: 2, c: 3 };

getProp(obj, "a");

// ---------------------------------------

function getResultInArray<Type = String>(param?: Type): Type[] {
  return Array(5).fill(param || "N/A");
}

let result = getResultInArray(2);

let result2 = getResultInArray();
