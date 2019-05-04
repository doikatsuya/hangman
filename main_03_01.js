"use strict";
{
  // document.getElementById("");
  // document.getElementsByClassName("");
  // document.getElementByTagName("");
  // document.querySelector("form button");
  // document.querySelectorAll("ul.menu > li");
  document.getElementById("target").
  textContent= "changed!";
  document.querySelector("h1").
  textContent = "!!H1!!";
  document.querySelectorAll("li:nth-child(odd)").
  forEach(li =>{
    li.textContent = "This is a li content!";
  }
  );


}
