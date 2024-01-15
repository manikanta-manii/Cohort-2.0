//Array && Object

// 01. Write a program to print all the even numbers in the array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var answer = "";
for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    answer += arr[i] + " ";
  }
}
console.log("The Even Numbers are : " + answer);

// 02. Write a program to print the biggest numebr in the array

let max = arr[0];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log("The Biggest NUmber in the array is : " + max);

///Object

// write a program that prints all the male peoples first name in the gven comples object
let object = [
  {
    gender: "male",
    firstname: "A",
    lastname: "A1",
  },
  {
    gender: "Female",
    firstname: "B",
    lastname: "B1",
  },
  {
    gender: "male",
    firstname: "C",
    lastname: "C1",
  },
  {
    gender: "male",
    firstname: "D",
    lastname: "D1",
  },
];

// 2 ways .gender or ["gender"];
var Names = "";
for (var i = 0; i < object.length; i++) {
  if (object[i]["gender"] == "male") {
    Names += "[" + object[i].firstname + "] ";
  }
}
console.log("The Names in the objects are :" + Names);

//write a program to reverse all the elements of array
var before = "";
for (var i = 0; i < arr.length; i++) {
  before += arr[i] + " ";
}
console.log("Before Reverse of Array : " + before);

var i = 0;
var temp = 0;
var j = arr.length - 1;
while (i < j) {
  temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  i = i + 1;
  j = j - 1;
}

var after = "";
for (var i = 0; i < arr.length; i++) {
  after += arr[i] + " ";
}
console.log("After Reverse of Array : " + after);
