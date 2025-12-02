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
