"use strict"
{
  const btn = document.getElementById("btn");

  btn.addEventListener("click",()=>{
    // const results =["大吉","吉","凶","大凶"];
    // const results =["大吉","大吉","大吉","凶","大凶"];
    // const n = Math.floor(Math.random()*results.length);
    // btn.textContent = results[n];
    const n = Math.random();
    if(n<0.05){
      btn.textContent = "大吉"; //5%
    }else if(n < 0.2){
      btn.textContent = "中吉";//15%
    }else{
      btn.textContent = "凶"; //85%
    }
  });
  btn.addEventListener("mousedown",()=>{
    btn.classList.add("pressed");
  });
  btn.addEventListener("mouseup",()=>{
    btn.classList.remove("pressed");
  });
}
