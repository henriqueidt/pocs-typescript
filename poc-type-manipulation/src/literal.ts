// Literal types in TypeScript allow you to define types that are specific values rather than general types.

let x: "hello" = "hello";
// x = "world"; // Error: Type '"world"' is not assignable to type '"hello"'

// We can also use unions to define more possibilities with Literal Types
function printText(text: string, align: "left" | "right" | "center") {
  console.log(`${text} aligned to the ${align}`);
}

printText("Hello, world!", "left");
// printText("Hello, world!", "top"); // Error: Argument of type '"top"' is not assignable to parameter of type '"left" | "right" | "center"

// Can also be used with numbers
function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}

interface AlignConfig {
  width: number;
  height: number;
}

// Can be combined with other types
function align(text: string, x: "auto" | AlignConfig) {
  if (x === "auto") {
    console.log(`Aligning "${text}" automatically`);
  } else {
    console.log(
      `Aligning "${text}" with width ${x.width} and height ${x.height}`
    );
  }
}

// Null and undefined can also be used as literal types
let nullable: null = null;
let undefinedValue: undefined = undefined;

// The (!) operator can be used to assert that a value is not null or undefined
function processValue(value?: number | null) {
  const processed = value!.toFixed();
  console.log(`Processing: ${processed}`);
}

// bigint is another literal type in TypeScript
let bigValue: bigint = 12345678901234567890n;

// Symbol is a unique and immutable primitive type in TypeScript
let sym: symbol = Symbol("unique");
