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
const info = (val) => {
    if (typeof val === "number") {
        console.log("The number is " + val);
    }
    else if (typeof val === "string") {
        console.log("The string is " + val);
    }
};
info(42);
info("Hello");
const info2 = (val) => {
    if (typeof val === "string") {
        return val.toUpperCase();
    }
    return val + 1;
};
info2(42);
info2("Hello");
//# sourceMappingURL=enum.js.map