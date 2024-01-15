const prompt = require("prompt-sync")();
const FirstName = prompt("What is is your First Name :");
const LastName = prompt("What is your last Name :");
console.log(
  "Hii User Your First Name is : " +
    FirstName +
    " Your Last Name is : " +
    LastName
);

// Greet Based ON Gender !

let Gender = prompt("Choose YOUR GENDER  1.MALE  2.FEMALE");
if (Gender == 1) {
  console.log("HELLO MISTER");
} else if (Gender == 2) {
  console.log("Hello MISS");
} else {
  console.log("INVALID INPUT");
}

// == and === Meaning ????

///prints 0-1000
for (var i = 0; i <= 1000; i++) {
  console.log(i);
}
