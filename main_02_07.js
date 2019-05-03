"use strict";
{
  // setInterval(関数,ミリ秒);

  let i = 0;
  const showTime = () =>{
    console.log(new Date());
    let timerId = setTimeout(showTime,2000);
    i++;
    if(i>3){
      clearTimeout(timerId);
    }
  };
  // let timerId = setInterval(showTime,1000);
  // setTimeout(showTime,2000);

  showTime();
}
