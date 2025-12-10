"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//enum type
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
    Role["CUSTOMER"] = "CUSTOMER";
})(Role || (Role = {}));
const personEnum = {
    name: "Maximilian",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN,
};
console.log(personEnum);
console.log(Role.ADMIN);
//# sourceMappingURL=enum.js.map