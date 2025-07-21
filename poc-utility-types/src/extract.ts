// Extract extracts given members from a union type.

type First = "a" | "b" | "c";

type ExtractedA = Extract<First, "a">; // 'a'
type ExtractedAC = Extract<First, "a" | "c">; // 'a' | 'c'

const a: ExtractedA = "a"; // Valid
const ac: ExtractedAC = "c"; // Valid
// const b: ExtractedAC = 'b'; // Error: Type '"b"' is not assignable to type '"a" | "c"'
