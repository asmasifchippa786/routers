import React from 'react'
import './index.css'

function Clock1() {
  return (
    <div className='clock1-body'>
       <div class="wrapper">

<div class="display">
    <div id="time">
    {setInterval(()=>{
            const time = document.querySelector('#time');
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconde = date.getSeconds();
        let day_night = "AM"
        if(hours > 12){
            day_night = "PM"
            hours = hours - 12;
        }
        if(hours < 10){
            hours = '0' + hours;
        }
        if(minutes < 10){
            minutes = '0' + minutes;
        }
        if(seconde < 10){
            seconde = '0' + seconde;
        }
        time.textContent = hours + ':' +  minutes + ':' +  seconde  + ' ' + day_night; 
        })}
    </div>
</div>
<span></span>
<span></span>
</div>
    </div>
  )
}

export default Clock1
