import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.scss']
})
export class TypescriptComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}

// simple example
console.log('-----simple Example----');
var message = 'Miracle software systems';
console.log(message);

// variables and datatypes example
console.log('---------variables datatypes -------------');
var a: number = 10;
console.log(a);
var b: string = 'Angular Training';
console.log(b);
var c: boolean = true;
console.log(c);
var d: number[] = [10, 20, 30];
console.log(d);
var e: object = { x: 10, y: 20 };
console.log(e);
var f: any = 'gsgd';
console.log(f);

// classes and objects
console.log('--------class and objects------');
class Student {
  name: string = 'usha';
  marks: number = 70;
  result() {
    if (this.marks >= 35) {
      return 'pass';
    }
    else {
      return 'fail';
    }
  }

}
var s = new Student();
console.log(s.name);
console.log(s.marks);
console.log(s.result());

// function example
console.log('---------function example--------');
function details(id: number, name: string, mailid: string) {
  console.log('Id', id);
  console.log('name', name);
  if (mailid != undefined) {
    console.log('mailId', mailid);
  }
}
details(11, 'vijja', 'asdd@gmail,com');

// statements example
console.log('--------statements examples------');
var num = 5;
if (num > 0) {
  console.log(num + 'is positive');
}
else if (num < 0) {
  console.log(num + 'is negative');
}
else {
  console.log(num + 'is neither positive nor negative');
}

var weeknumber = 5;
switch (weeknumber) {
  case 1: {
    console.log('monday');
    break;
  }
  case 2: {
    console.log('tuesday');
    break;
  }
  case 3: {
    console.log('wednesday');
    break;
  }
  case 4: {
    console.log('thusday');
    break;
  }
  case 5: {
    console.log('friday');
    break;
  }
  case 6: {
    console.log('satday');
    break;
  }
  case 7: {
    console.log('sunday');
    break;
  }
  default: {
    console.log('invalid');
    break;
  }
}

// let and const example
console.log('-----let and constant ----');
class Sample1 {
  method1() {
    for (let i = 1; i <= 10; i++) {
      console.log(i);
    }
  }
}
var s1 = new Sample1();
s1.method1();

const n: number = 20;
console.log('n is:' + n);

// array
console.log('---------concat method-----');
var alpha = ['asa', 'sww', 'sfd', 'sdd'];
var num1: any = [1, 2, 3, 4];
var add = alpha.concat(num1);
console.log(add);

console.log('---------every method-----');
function bignumber(element, index, array) {
  return (element >= 10);
}
var passed = [10, 12, 4, 5, 34].every(bignumber);
console.log(passed);

console.log('---------filter method-----');
function bignumbers(element) {
  return (element >= 10);
}
var passed1 = [10, 12, 4, 5, 34].filter(bignumbers);
console.log(passed1);

console.log('---------foreach method-----');
let values = [11, 20, 30, 55, 3, 7];
values.forEach(function (value) {
  console.log(value);
});

console.log('---------indexOf method-----');
var index = [1, 2, 8, 9, 77, 30].indexOf(77);
console.log(index);

console.log('---------join method-----');
var arr = ['usha', 'bujji', 'lakshmi'];
var str = arr.join();
console.log(str);
var str1 = arr.join('+');
console.log(str1);

console.log('---------lastindexof method-----');
var index1 = [1, 6, 8, 9, 9, 3].lastIndexOf(9);
console.log(index1);

console.log('---------map method-----');
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
console.log(roots);

console.log('---------pop method-----');
var eles = [1, 3, 7, 9, 5];
var element = eles.pop();
console.log(element);

console.log('---------push method-----');
var num2 = [1, 7, 9, 0];
var elements = num2.push(3, 4, 8);
console.log(num2);

console.log('---------reduce method-----');
var total = [1, 3, 5, 7, 9].reduce(function (a, b) {
  return a + b;
});
console.log(total);

console.log('---------reverse method-----');
var rev = [0, 1, 3, 5, 7].reverse();
console.log(rev);

console.log('---------shift method-----');
var shift = [20, 70, 8, 3, 9].shift();
console.log(shift);

console.log('---------slice method-----');
var arr = ['orange', 'mango', 'banana', 'sugar', 'tea'];
console.log('arr.slice( 1, 2) : ' + arr.slice(1, 2));
console.log('arr.slice( 1, 3) : ' + arr.slice(1, 3));

console.log('---------some method-----');
function isBigEnough(element1, index, array) {
  return (element1 >= 10);
}
var retval = [2, 5, 8, 1, 4].some(isBigEnough);
console.log('Returned value is : ' + retval);

var retval1 = [12, 5, 8, 1, 4].some(isBigEnough);
console.log('Returned value is : ' + retval1);

console.log('---------sort method-----');
var sort = new Array('orange', 'mango', 'banana', 'sugar');
var sorted = arr.sort();
console.log('Returned string is : ' + sorted);

console.log('---------tostring method-----');
var arr = new Array('orange', 'mango', 'banana', 'sugar');
var str = arr.toString();
console.log('Returned string is : ' + str);

// Inheritance
console.log('-------Inheritance-------');
class Person {
  name: string;
  id: number;
  constructor(a: string, b: number) {
    this.name = a;
    this.id = b;
  }
}
class Student1 extends Person {
  age: number;
  marks: number;
  constructor(p: string, q: number, r: number, s: number) {
    super(p, q);
    this.age = r;
    this.marks = s;
  }
}
var p = new Person('prasanna', 3);
console.log(p);
var st = new Student1('bhavani', 2, 23, 78);
console.log(st);

// module
// console.log(College.courseslist);
// console.log(new College.Student5('bujji', 101));

// interface
console.log('-----------interface example-----------');
interface Istudent {
  firstname: string;
  lastname: string;
  getFullname(): string;
}

class Studata implements Istudent {
  firstname: string;
  lastname: string;
  getFullname(): string {
    return this.firstname + ' ' + this.lastname;
  }
}
var data = new Studata();
data.firstname = 'prasanna';
data.lastname = 'yadlapalli';
console.log(data.getFullname());

// default arguments
console.log('---------default arguments');
class Sample {
  method1(name: string = 'bujji') {
    console.log(name);
  }
}
var ss = new Sample();
ss.method1();
ss.method1('miracle');

// multiline strings
console.log('-----multiline strings------');
var comname = `hii
hello
miracle software systems`;
console.log(comname);

// string Interpolation
console.log('-------string Interpolation');
var name1: string = 'software systems';
var message1: string = `Miracle ${name1}`;
console.log(message1);

var firm: string = 'heights';
var firm1: string = 'city';
var message2: string = `Miracle ${firm} and ${firm1} are two branches`;
console.log(message2);

// loops
var states: string[] = ['Ap', 'Tn', 'Bihar', 'chennai', 'kerala'];

console.log('------for loop-----');
for (let i = 0; i <= states.length; i++) {
  console.log(states[i]);
}

console.log('-------forEach loop------');
states.forEach((state) => {
  console.log(state);
});

console.log('-------forOf LOOP-------');
for (let st1 of states) {
  console.log(st1);
}

console.log('--------forin loop-----');
for (let i in states) {
  console.log(i + ',' + states[i]);
}

// enumerations
console.log('-------enumeartions example--------');
enum Coursename {
  Java, Angular, Testing, Typescript
}
class Student7 {
  stuname: string;
  age: number;
  course: Coursename;
}
var s7 = new Student7();
s7.stuname = 'bhavani';
s7.age = 24;
s7.course = Coursename.Angular;
console.log(s7.stuname);
console.log(s7.age);
console.log(s7.course);
console.log(Coursename[s7.course]);

// namespaces
console.log('---------namespaces example-------');
namespace College {
  export class Student6 {
    stuid: number;
    stuname: string;
    constructor(a: number, b: string) {
      this.stuid = a;
      this.stuname = b;
    }
  }
  export var courseslist: string[] = ['.net', 'java', 'angular', 'testing'];
}

console.log(College.courseslist);
console.log(new College.Student6(12, 'lakshmi'));

// Typecasting
console.log('------typecasting example-----');
var value: any = 'miracle systems';
var str = <string>value;
console.log(str);
var num3: number = 2;
var con = num3 as any;