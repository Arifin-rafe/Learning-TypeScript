class Student {
  name: string;
  age: number;
  skill: boolean
  constructor(name: string, age: number, skill: boolean) {
    this.name = name;
    this.age = age;
    this.skill = skill;
  }
}
const student1 = new Student("John", 20, true);
console.log(student1);