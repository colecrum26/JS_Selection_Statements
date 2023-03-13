console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
let answer = window.prompt("guess a number:");
let favNum = 23;
if (answer < favNum) {
  window.alert("too low");
  console.log("too low");
} else if (answer > favNum) {
  window.alert("too high");
  console.log("too high");
} else if (answer == favNum) {
  window.alert("Congratulations!!");
  console.log("Congratulations!!");
} else {
  window.alert("make sure to enter a number!");
  console.log("make sure to enter a number!");
}

// Exercise 2
let birthMonth = window.prompt(
  "What is your birth month? 1-Jan, 2-Feb, 3-March, 4-April, 5-May, 6-June, 7-July, 8-Aug, 9-Sept, 10-Oct, 11-Nov, 12-Dec"
);
switch (parseInt(birthMonth)) {
  case 12:
  case 1:
  case 2:
    window.alert("You were born in winter.");
    break;
  case 3:
  case 4:
  case 5:
    window.alert("You were born in spring.");
    break;
  case 6:
  case 7:
  case 8:
    window.alert("You were born in summer.");
    break;
  case 9:
  case 10:
  case 11:
    window.alert("You were born in fall.");
  default:
    window.alert("Please enter a number given.");
    break;
}

// Exercise 3

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case "01":
    type = "Tank top";
  case "02":
    type = "T-Shirt";
  case "03":
    type = "Long Sleeve";
  case "04":
    type == "Sweat Shirt";
  default:
    type = "Other";
}

switch (colorId) {
  case "BK":
    color = "Black";
  case "BL":
    color = "Blue";
  case "RD":
    color = "Red";
  case "PU":
    color = "Purple";
  default:
    color = "White";
}

switch (sizeId) {
  case "S":
    size = "Small";
  case "M":
    size = "Medium";
  case "L":
    size = "Large";
  case "XL":
    size = "Extra Large";
  default:
    size = "One Size Fits All";
}

console.log(`Product: ${size} ${color} ${type}`);
