# POC TypeScript Generics

Generics help create reusable modules that are flexible to work with multiple types

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
