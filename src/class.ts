class Student {
  public name: string;
  public age: number;
  public skill: boolean;
  constructor(name: string, age: number, skill: boolean) {
    this.name = name;
    this.age = age;
    this.skill = skill;
  }
}

class Teacher extends Student {
  constructor(name: string, age: number, skill: boolean) {
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

// interface
interface StudentInterface {
  name: string;
  age: number;
  skill: boolean;
}

class StudentInterface implements StudentInterface {
  public name: string = "John";
  public age: number = 30;
  public skill: boolean = false;
}
const student2 = new StudentInterface();
console.log(student2);
