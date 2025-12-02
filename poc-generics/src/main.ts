function funcWithAny(arg: any): any {
  return arg;
}

const outputWithAny = funcWithAny("John");

function funcWithType<Type>(arg: Type): Type {
  return arg;
}

const outputWithType = funcWithType<string>("John");

let outputWithInferredType = funcWithType("John");
