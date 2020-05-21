//-------------every()-----------------
//----It returns a boolean value-----
//-------------Example1----------------
const fruits = [
  {
    name: "Apple",
    price: 20,
  },
  {
    name: "Orange",
    price: 30,
  },
  {
    name: "Grapes",
    price: 50,
  },
];

const booleanValue = fruits.every((fruit) => fruit.price >= 20);

console.log(booleanValue);

//--------------some()---------------
//if only one elements in the array pass the test then it returns true as a result
//--------Example1-------
const booleanValue = fruits.some((fruit) => fruit.price > 30);

console.log(booleanValue);

//---------Example2------------
const names = ["Tom", "Jerry", "Harry", "Richard"];

const everyValue = names.every((name) => name.length > 3);
console.log(everyValue); //false

const somevalue = names.some((name) => name.length > 3);
console.log(somevalue); //true

//-------------reduce()------------
//it takes two argument,one is iterator function and next is initial value
//-----------------Example1-----------------
const numbers = [10, 15, 20, 40];

const sum = numbers.reduce((sum, number) => sum + number, 0);
console.log(sum);

//-------Example2---------
const colors = [
  {
    colour: "red",
  },
  {
    colour: "green",
  },
  {
    colour: "blue",
  },
];

const reducedVal = colors.reduce((prevValue, color) => {
  prevValue.push(color.colour);
  return prevValue;
}, []);

console.log(reducedVal);
