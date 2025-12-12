"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    name;
    age;
    skill;
    constructor(name, age, skill) {
        this.name = name;
        this.age = age;
        this.skill = skill;
    }
}
class Teacher extends Student {
    constructor(name, age, skill) {
        super(name, age, skill);
    }
    ageCalc() {
        return this.age + 5;
    }
}
const student1 = new Student("John", 20, true);
console.log(student1);
const teacher1 = new Teacher("Jane", 30, true);
console.log(teacher1.ageCalc());
console.log(teacher1);
class StudentInterface {
    name = "John";
    age = 30;
    skill = false;
}
const student2 = new StudentInterface();
console.log(student2);
//# sourceMappingURL=class.js.map