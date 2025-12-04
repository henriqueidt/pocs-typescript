# POC TypeScript Generics

Generics help create reusable modules that are flexible to work with multiple types

## Generic Functions

To create a function that receives a generic argument, we could make use of `any` type, like:

```Typescript
function funcWithAny(arg: any): any {
  return arg;
}
```

but in that way, we lose the information about what type was passed when the function returns.
Whenever we call the function, the value assigned to the return value will always be `any`.

![output with any](./assets/output-with-any.png)

If we use a `Type` to the identity of the function, we can capture the type that was passed as argument to be used later, for exemple for the return type of the function:

```Typescript
function funcWithType<Type>(arg: Type): Type {
  return arg;
}
```

Now we can, for example, call the function setting Type to the type we want, by putting it wrapped with `<>`:

![output with type](./assets/output-with-type.png)

Or, we can just let TS infer the type:

![output with inferred type](./assets/output-with-inferred-type.png)

When we set Generic Type variables, TS will enforce us to work with them as real generics, aka as they could be ANY type, so if you try to access something specific from a particular type, the compiler will give an error:

![function with type length](./assets/func-with-type-length.png)

If we want to get the length of the param, we'll need to tell TS that we're receiving an array of Type. There are two ways of doing it:

```Typescript
function funcGetTypeArrayLength1<Type>(arg: Type[]): number {
  return arg.length
}

function funcGetTypeArrayLength2<Type>(arg: Array<Type>): number {
  return arg.length
}
```

## Typing Generic Functions

We can also create types for the functions themselves. The Generic type doesn't need to have the same name, as long as they have the same structure like:

```Typescript
function example<Type>(arg: Type): Type {
  return arg
}

let exampleUsage: <Input>(arg: Input) => Input = example
```

The generic type can also be written as an object:

```Typescript
let exampleUsage2: { <Type>(arg: Type): Type } = example;
```

Now we can move the object into a generic interface:

```Typescript
interface GenericExampleFn {
  <Type>(arg: Type): Type;
}

function example3<Type>(arg: Type): Type {
  return arg
}

let exampleUsage3: GenericExampleFn = example3
```

We can also move the generic parameter to be a parameter of the Interface. It helps to see which type it is generic over:

![generic interface with param](./assets/generic-func-with-param.png)

## Generic Classes

Generic classes can also have generic types as parameters, similar to Generic Functions

```Typescript
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
```
