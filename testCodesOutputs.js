// Problem Solving

/*
const person = {
  firstName: "Helen",
  lastName: "Ryan",
  getFullName: function () {
	return this.firstName + " " + this.lastName;
  },
};
console.log(person.getFullName());

*/
/*
const testArray = [1, 2, 3];
testArray = [4, 5, 6];

console.log(testArray);
*/
const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((total, num) => total + num);
console.log(sum / arr.length);