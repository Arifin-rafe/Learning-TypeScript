//enum type
enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 100,
  AUTHOR = "AUTHOR",
  CUSTOMER = "CUSTOMER",
}
const personEnum = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};
console.log(personEnum);
console.log(Role.ADMIN);

const info = (val: number | string) => {
  if (typeof val === "number") {
    console.log("The number is " + val);
  } else if (typeof val === "string") {
    console.log("The string is " + val);
  }
};
info(42);
info("Hello");

const info2 = (val: number | string) => {
  if (typeof val === "string") {
    return val.toUpperCase(); 
  }
    return val + 1;
  
};
info2(42);
info2("Hello");