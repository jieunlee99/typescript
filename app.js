var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 변수의 데이터 타입 명시
var stdId = 1111;
var stdName = "lee";
var age = 20;
var gender = "male";
var course = "Typescript";
var completed = false;
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
    GenderType["GenderNeutral"] = "nue";
})(GenderType || (GenderType = {}));
var MyStudent = /** @class */ (function () {
    function MyStudent() {
        this.stdId = 91011;
        this.stdName = "park";
        this.age = 30;
        this.gender = "male"; // "male" 또는 "female"만 할당 가능
        this.course = "node.js";
        this.completed = true;
    }
    MyStudent.prototype.setName = function (name) {
        this.stdName = name; // stdName 속성을 업데이트
        console.log("이름 설정 : " + this.stdName);
    };
    MyStudent.prototype.getName = function () {
        return this.stdName;
    };
    return MyStudent;
}());
var myInstance = new MyStudent();
myInstance.setName("엘리스");
function getInfo(id) {
    return {
        stdId: id,
        stdName: "lee",
        age: 20, // age 속성 추가
        gender: "female",
        course: "javascript",
        completed: true,
        setName: function (name) {
            this.stdName = name;
        },
        getName: function () {
            return this.stdName;
        },
    };
}
// 객체를 Student 인터페이스로 명시적으로 선언
var std = {
    stdId: 91011,
    stdName: "park",
    age: 30,
    gender: "male",
    course: "node.js",
    completed: true,
    setName: function (name) {
        this.stdName = name;
    },
    getName: function () {
        return this.stdName;
    },
};
function setInfo(student) {
    console.log(student);
}
var numStr = 100; // any -> 모든 타입 가능 -> 피하는게 좋다.
var item;
function convertToString(val) {
    if (typeof val === "string") {
        item = 0;
    }
    else {
        item = val;
    }
    return String(val);
}
function convertToNumber(val) {
    return Number(val);
}
// console.log(convertToString(100));
// console.log(convertToNumber(100));
var numbers = [1, 2, 3, 4, 5];
var fruits = ["apple", "banana", "orange"];
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }
var mixedArray = [1, "two", 3, "four"];
for (var i = 0; i < mixedArray.length; i++) {
    console.log(mixedArray[i]);
}
var infer = [1, 2, 3]; // 타입 추론
for (var i = 0; i < infer.length; i++) {
    console.log(infer[i]);
}
var readOnlyArray = [1, 2, 3]; // 읽기 전용, 수정 불가능
// 튜플 : 타입의 순서가 정해져 있다.
var greeting = [1, "hello", true];
for (var i = 0; i < greeting.length; i++) {
    console.log(greeting[i]);
}
// spread 연산자
var firstArray = [1, 2, 3];
var secondArray = [4, 5, 6];
var combineArray = __spreadArray(__spreadArray([], firstArray, true), secondArray, true);
for (var i = 0; i < combineArray.length; i++) {
    console.log(combineArray[i]);
}
