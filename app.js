//--------------Array methods--------------------
//-----forEach()--------
const colors = ["red", "green", "yellow"];

//each colors are passed to iterator function
colors.forEach((color) => {
  console.log(color);
});

const nums = [1, 2, 3, 4];
let sum = 0;
nums.forEach((num) => {
  sum = sum + num;
});
console.log(sum);

//------map()-------
//returns new array
//-----example1------
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => {
  return number * 2;
});
console.log(doubledNumbers);

//-----------example2--------
const persons = [
  {
    name: "Ram",
    age: 20,
  },
  {
    name: "Hari",
    age: 25,
  },
];

const ages = persons.map((person) => {
  return person.age;
});

console.log(ages);

//--------filter()--------------

//-------------example1-------------------
const students = [
  {
    name: "grish",
    faculty: "Software",
  },
  {
    name: "grishmin",
    faculty: "Software",
  },
  {
    name: "Hari",
    faculty: "Computer",
  },
];

const filteredStudents = students.filter((student) => {
  return student.faculty === "Software";
});

console.log(filteredStudents);

//---------Example2--------
const person = {
  age: 20,
  gender: "male",
};

const workers = [
  {
    age: 15,
    gender: "male",
  },
  {
    age: 25,
    gender: "female",
  },
  {
    age: 20,
    gender: "male",
  },
];

function filteredWorker(person, workers) {
  return workers.filter((worker) => {
    return worker.age >= person.age;
  });
}
console.log(filteredWorker(person, workers));

//-------------find()-------------
//it used to search for the particular element in an array
//-------------Example1--------------

const students = [
  {
    name: "grish",
    faculty: "Software",
  },
  {
    name: "grishmin",
    faculty: "Software",
  },
  {
    name: "Hari",
    faculty: "Computer",
  },
];

const nameFound = students.find((student) => student.name === "grish");
console.log(nameFound);

//-------------Example2------------
//-----constructor function---------
function Person(name) {
  this.name = name;
}

const persons = [
  new Person("grish"),
  new Person("grishmin"),
  new Person("Ram"),
];

const elFound = persons.find((person) => person.name === "grishmin");
console.log(elFound);
