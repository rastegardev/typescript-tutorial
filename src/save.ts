//? Jalase 2:
//! Generics
// https://www.typescriptlang.org/docs/handbook/2/generics.html

interface Person1 {
  name: string;
  age: number;
  gender: "male" | "female";
}

interface Person2 {
  name: string;
  type: string;
}

interface APIResponse<T> {
  status: number;
  data: T | T[] | null;
  error: string;
}

// api call 1
const res1: APIResponse<Person1> = {
  status: 200,
  data: {
    name: "reza",
    age: 20,
    gender: "male",
  },
  error: "string",
};

// api call 2
const res2: APIResponse<Person2> = {
  status: 200,
  data: {
    name: "boz",
    type: "kohi",
  },
  error: "string",
};

//! Extend
// 1
interface Base {
  name: string;
  age: number;
}

interface Post extends Base {
  gender: string;
}

const User: Post = {
  name: "reza",
  age: 20,
  gender: "male",
};

// 2
interface base<T> {
  name: string;
  phone: number;
  data: T | T[] | null;
}
interface person extends base<people> {
  flag: string;
}
interface people {
  flag: boolean;
  gender: "male" | "female";
}
let pouya: person = {
  name: "aaaa",
  phone: 123,
  flag: "UA",
  data: {
    flag: true,
    gender: "male",
  },
};

//! Utility Types
// https://www.typescriptlang.org/docs/handbook/utility-types.html

// Omit<Type, Keys>
interface UserData {
  name: string;
  weight: number;
  height: number;
}

type Login = Omit<UserData, "height">;

const Sepehr: Login = {
  name: "sepi",
  weight: 123,
};

// Extract<Type, Union>
type mamad1 = string | number | "a";
type gholi1 = number | null;
type nosi1 = Extract<mamad1, gholi1>; // eshterake type mamad va gholi
let jozef1: nosi1 = 123;

// Exclude<UnionType, ExcludedMembers>
type mamad2 = boolean | number | "a";
type gholi2 = boolean;
type nosi2 = Exclude<mamad2, gholi2>;
let jozef2: nosi2 = "a";

type mamad3 = string | number | null;
type gholi3 = string;
type nosi3 = Exclude<mamad3, gholi3>;
let jozef3: nosi3 = 123;

// Pick<Type, Keys>
interface Reza2 {
  name: string;
  weight: number;
  height: number;
}
type mamad4 = Pick<Reza2, "name">;
let abbas: mamad4 = {
  name: "reza",
};

// NonNullable<Type>
// Constructs a type by excluding null and undefined from Type.
type joke = null | string | boolean;
type mosi = NonNullable<joke>;
let qumars: mosi = "aaa";
console.log(typeof qumars);
