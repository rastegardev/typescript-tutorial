// Generics
// https://www.typescriptlang.org/docs/handbook/2/generics.html

interface person1 {
  name: string;
  age: number;
  gender: "male" | "female";
}

interface person2 {
  name: string;
  type: string;
}

interface APIResponse<T> {
  status: number;
  data: T | T[] | null;
  error: string;
}

// api call 1
const res: APIResponse<person1> = {
  status: 200,
  data: {
    name: "reza",
    age: 20,
    gender: "male",
  },
  error: "string",
};

// api call 2
