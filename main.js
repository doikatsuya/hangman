"use strict";
// console.log(typeof undefined);
// console.log(typeof null);
// console.log(parseInt("5",10) + 3);
// score >=80 ? console.log("Great") : console.log("OK...!");
// const score = 60;
// const name = "taguchi";
// if(score>=50 && name==="taguchi"){
//   console.log("Great! Taguchi");
// }
// if(signal === "red"){
//   console.log("stop!");
// }else if(signal ==="yellow"){
//   console.log("caution!");
// }else if(signal ==="blue"){
//   console.log("go!");
// }
let signal= "blue"
switch (signal){
  case "red":
    console.log("stop case");
    break;
  case "yellow":
    console.log("caution case");
    break;
  case "blue":
    console.log("go case");
    break;
  default:
    console.log("What is "+signal);
    break;
}
