// // 일반적인 직원 정보
// let empName: string;
// let age: number;
// let empJob: string;

// function printEmp(empName: string, age: number, empJob: string): void {
//   console.log(`${empName}의 나이는 ${age}이고, 직업은 ${empJob}입니다.`);
// }

// printEmp('jieun', 25, '백수');

// 멤버 변수 == 속성 == 프로퍼티
// 멤버 함수 == 메서드

// class Employee {
//   // 멤버 변수에 언더바를 붙여주는 관습.
//   private _empName: string;
//   private _age: number;
//   private _empJob: string;

//   constructor(empName: string, age?: number, empJob?: string) {
//     this._empName = empName;
//     this._age = age;
//     this._empJob = empJob;
//   }

//   get empName() {
//     return this._empName;
//   }

//   set empName(val: string) {
//     this._empName = val;
//   }

//   printEmp = (): void => {
//     console.log(
//       `${this._empName}의 나이는 ${this._age}이고, 직업은 ${this._empJob}입니다.`
//     );
//   };
// }

// let employee1 = new Employee();
// employee1.empName = "lee";
// employee1.age = 25;
// employee1.empJob = "개발자";
// employee1.printEmp();

// let employee2 = new Employee("jieun", 25, "개발자");
// employee2.empName = "lee";
// employee2.printEmp();

class Employee {
  // 클래스의 멤버 변수이자 매개변수로 선언된다.
  constructor(
    private _empName: string,
    private _age: number,
    private _empJob: string
  ) {}

  get empName() {
    return this._empName;
  }

  set empName(val: string) {
    this._empName = val;
  }

  printEmp = (): void => {
    console.log(
      `${this._empName}의 나이는 ${this._age}이고, 직업은 ${this._empJob}입니다.`
    );
  };
}

// let employee1 = new Employee();
// employee1.empName = "lee";
// employee1.age = 25;
// employee1.empJob = "개발자";
// employee1.printEmp();

let employee2 = new Employee("jieun", 25, "개발자");
employee2.empName = "lee";
employee2.printEmp();