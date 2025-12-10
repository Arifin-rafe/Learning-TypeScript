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