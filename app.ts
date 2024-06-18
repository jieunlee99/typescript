// 변수의 데이터 타입 명시
let stdId: number = 1111;
let stdName: string = "lee";
let age: number = 20;
let gender: string = "male";
let course: string = "Typescript";
let completed: boolean = false;

enum GenderType {
  Male = "male",
  Female = "female",
  GenderNeutral = "nue",
}

interface Student {
  stdId: number;
  stdName: string;
  age: number;
  gender: "male" | "female"; // 두 값 외에 다른 값은 들어올 수 없음
  course: string;
  completed: boolean;
  setName: (name: string) => void;
  getName: () => string;
}

class MyStudent implements Student {
  stdId = 91011;
  stdName = "park";
  age = 30;
  gender: "male" | "female" = "male"; // "male" 또는 "female"만 할당 가능
  course = "node.js";
  completed = true;

  setName(name: string): void {
    this.stdName = name; // stdName 속성을 업데이트
    console.log("이름 설정 : " + this.stdName);
  }

  getName(): string {
    return this.stdName;
  }
}

const myInstance = new MyStudent();
myInstance.setName("엘리스");

function getInfo(id: number): Student {
  return {
    stdId: id,
    stdName: "lee",
    age: 20, // age 속성 추가
    gender: "female",
    course: "javascript",
    completed: true,
    setName: function (name: string): void {
      this.stdName = name;
    },
    getName: function (): string {
      return this.stdName;
    },
  };
}

// 객체를 Student 인터페이스로 명시적으로 선언
let std: Student = {
  stdId: 91011,
  stdName: "park",
  age: 30,
  gender: "male",
  course: "node.js",
  completed: true,
  setName: function (name: string): void {
    this.stdName = name;
  },
  getName: function (): string {
    return this.stdName;
  },
};

function setInfo(student: Student): void {
  console.log(student);
}

// setInfo(std);

// console.log(getInfo(5678));

// const user: { name: string; age: number } = {
//   name: "john",
//   age: 25,
// };

type strOrNum = number | string;

let numStr: strOrNum = 100; // any -> 모든 타입 가능 -> 피하는게 좋다.
let item: number;

function convertToString(val: strOrNum): string {
  if (typeof val === "string") {
    item = 0;
  } else {
    item = val;
  }

  return String(val);
}

function convertToNumber(val: strOrNum): number {
  return Number(val);
}

// console.log(convertToString(100));
// console.log(convertToNumber(100));

let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["apple", "banana", "orange"];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

let mixedArray: (number | string)[] = [1, "two", 3, "four"];
for (let i = 0; i < mixedArray.length; i++) {
  console.log(mixedArray[i]);
}

let infer = [1, 2, 3]; // 타입 추론
for (let i = 0; i < infer.length; i++) {
  console.log(infer[i]);
}

let readOnlyArray: ReadonlyArray<number> = [1, 2, 3]; // 읽기 전용, 수정 불가능

// 튜플 : 타입의 순서가 정해져 있다.
let greeting: [number, string, boolean] = [1, "hello", true];
for (let i = 0; i < greeting.length; i++) {
  console.log(greeting[i]);
}

// spread 연산자
let firstArray = [1, 2, 3];
let secondArray = [4, 5, 6];
let combineArray = [...firstArray, ...secondArray];
for (let i = 0; i < combineArray.length; i++) {
  console.log(combineArray[i]);
}
