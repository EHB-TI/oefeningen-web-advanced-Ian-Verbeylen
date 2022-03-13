"use strict";
/*
// oef 1, 2, 3
let color = {
  nR: 0,
  nG: 0,
  nB: 0,
  showColor: function () {
    console.log(`rgb(${this.nR}, ${this.nG}, ${this.nB})`);
  },
  setColor(r, g, b) {
    let colors = [r, g, b];
    let validInput = true;
    for (let color of colors) {
      if (color == undefined) {
        console.log("fill in all colors!");
        validInput = false;
      }
      if (color < 0 || color > 255) {
        console.log("color values must be between 0 and 255!");
        validInput = false;
      }
    }
    if (validInput) {
      console.log("succes");
      this.nR = r;
      this.nG = g;
      this.nB = b;
    }
  },
};

let red = prompt("enter red value:");
let green = prompt("enter green value:");
let blue = prompt("enter blue value");

color.setColor(red, green, blue);
color.showColor();
*/
// oef 4
function Student(name, age, degree, courses = []) {
  this.name = name;
  this.age = age;
  this.degree = degree;
  this.courses = courses;
  this.setPersonalDetails = function (name, age, degree) {
    this.name = name;
    this.age = age;
    this.degree = degree;
  };
  this.addCourse = function (course) {
    courses.push(course);
  };
  this.showStudent = function () {
    return `name: ${this.name}, age: ${this.age}, degree: ${this.degree}`;
  };
}

// let student = new Student("ian", 29, "pg coding");

let student = new Student();
let name = prompt("enter name");
let age = prompt("enter age");
let degree = prompt("enter degree");
student.setPersonalDetails(name, age, degree);

let course = "";
do {
  course = prompt("add course (leave empty to stop");
  student.addCourse(course);
} while (course != "");

let msg = `My name is ${student.name}. I'm ${age} and follow ${degree} at EhB.
  My courses are: ${student.courses}.`;

console.log(msg);
