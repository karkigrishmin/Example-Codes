//--------------enhanced object literals-----------
//if key and value is same then we can write key name only
//in method, we can omit the function keyword and colon, only paranthesis remains
//------------Example1---------
function personInfo(persons) {
  return {
    persons,
    personName(name) {
      return this.persons.filter((person) => person.name === name);
    },
    personTotalAge() {
      return this.persons.reduce(
        (prevValue, currAge) => prevValue + currAge.age,
        0
      );
    },
  };
}

const persons = [
  {
    name: "Grish",
    age: 19,
  },
  {
    name: "Grishmin",
    age: 20,
  },
];

const result = personInfo(persons);
console.log(result.personName("Grishmin"));
console.log(result.personTotalAge());
