//string type function
const ageCal = (firstName: string, age: number): string => {
  return `My name is ${firstName} and I am ${age} years old.`;
};
ageCal("John", 30);

// void type function
const myInfoVoid = (firstName: string = "John", age: number = 30): void => {
  console.log(`My name is ${firstName} and I am ${age} years old.`);
  //if void type cant return anything but can console log something
};
myInfoVoid();

// never type function
const myInfoNever = (firstName: string="John", age: number=30): never=>{
    throw new Error(`My name is ${firstName} and I am ${age} years old.`)
    //if never type cant return anything or console log anything
}
myInfoNever()

//array type
const hobbies: (string | number)[] = ["Sports", "Cooking", 60];
hobbies.push("Reading");
console.log(hobbies);

//tuple type
let role: [number, string, boolean] = [2, "author", false];
// fixed length and fixed type array if we push in tuple it will not give error only after the declaration types
// use readonly keyword before type to avoid push,pop in tuple
// role = [2, "author", "admin"]; // Error: Too many elements in tuple
// role = [true, "author"]; // Error: Type 'boolean' is not assignable to type 'number'
role.push(true);
role[1] = "admin"; // OK
role[0] = 3; // OK
console.log(role);

//object type
type Person = {
  name: string;
  readonly age: number;
  isMarried?: boolean; //optional property with ? operator.can asign value or not wont give error
  hobbies: string[]; // It's an array of strings cant push number or boolean in it
  role: [number, string]; // its a tuple where 1st element is number and 2nd is string.
  // after declaration we can push more values unless we use readonly keyword because its any type after declareted types
};
const human: Person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};
human.role.push("admin");
// person.role.age = 31; // Error: Cannot assign to 'age' because it is a read-only property
console.log(human);


