// console.log("Hello World!\n==========\n");
// console.log(
//   "Follow the steps in the README.md file to complete the exercises:\n==========\n"
// );

// // Exercise 1
// let answer = window.prompt("guess a number:");
//   let favNum = 23;
//   if (answer < favNum) {
//     window.alert ("too low")
//     console.log("too low")
//   } else if (answer > favNum) {
//     window.alert ("too high")
//     console.log("too high")
//   } else if (answer == favNum){
//     window.alert ("Congratulations!!")
//     console.log("Congratulations!!")
//   } else {
//     window.alert("make sure to enter a number!")
//     console.log("make sure to enter a number!")
//   }

//   // Exercise 2
// let birthMonth = window.prompt("What is your birth month?");
//   switch (birthMonth) {
//     case "January":
//       window.alert("You were born in winter.")
//       break;
//     case "March":
//       window.alert("You were born in spring.")
//       break;
//     case "June":
//       window.alert("You were born in summer.")
//       break;
//     case "October":
//       window.alert("You were born in fall.")
//     default: window.alert("Season not determined.")
//       break;
//   }

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