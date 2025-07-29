// Template literal type uses the same syntax as template literals in JavaScript,
// but it allows you to create types that are derived from string literals.

type World = "world";
type Greeting = `Hello, ${World}!`;

const greeting: Greeting = "Hello, world!";

type CustomerEmailIds =
  | "customer_email_1"
  | "customer_email_2"
  | "customer_email_3";
type AgentEmailIds = "agent_email_1" | "agent_email_2" | "agent_email_3";
type EmailIds = `${CustomerEmailIds | AgentEmailIds}_id`;

const emailId1: EmailIds = "customer_email_1_id";
const emailId2: EmailIds = "agent_email_2_id";

// We can use template literals for example to create handlers for changes of properties in an object

type PropEventSource<Type> = {
  on<Key extends string & keyof Type>(
    eventName: `${Key}Changed`,
    callback: (newValue: Type[Key]) => void
  ): void;
};

declare function createPropEventSource<Type>(
  obj: Type
): Type & PropEventSource<Type>;

const person = createPropEventSource({
  name: "John",
  lastName: "Doe",
  age: 30,
});

person.on("nameChanged", (newValue) => {
  console.log(`Name changed to: ${newValue}`);
});
person.on("ageChanged", (newValue) => {
  console.log(`Age changed to: ${newValue}`);
});
person.on("lastNameChanged", (newValue) => {
  console.log(`Last name changed to: ${newValue}`);
});

// This will cause a TypeScript error because "unknownChanged" is not a valid event name
// person.on("unknownChanged", (newValue) => {
// console.log(`Unknown property changed to: ${newValue}`);
// });
