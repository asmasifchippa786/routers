import React from 'react'
import './index.css'

function Clock2() {
    
    setInterval(() =>{
        let hours = document.getElementById('hours');
        let minutes = document.getElementById('minutes');
        let secondes = document.getElementById('secondes');
        let ampm = document.getElementById('ampm');

        let hh = document.getElementById('hh');
        let mm = document.getElementById('mm');
        let ss = document.getElementById('ss');
    
            let hr_dot = document.querySelector('.hr_dot');
            let min_dot = document.querySelector('.min_dot');
            let sec_dot = document.querySelector('.sec_dot');

            let h = new Date().getHours();
        let m = new Date().getMinutes();
        let s = new Date().getSeconds();
        let am = h >= 12 ? "PM" : "AM"

        // convert 24 hr clock into 12hr
        if(h > 12){
            h = h - 12;
        }
        // add zero before single digit
        h = (h < 10) ? '0' + h : h;
        m = (m < 10) ? '0' + m : m;
        s = (s < 10) ? '0' + s : s;

        hours.innerHTML = h + '<br><span>Hours</span>';
        minutes.innerHTML = m + '<br><span>Minutes</span>';
        secondes.innerHTML = s + '<br><span>Seconds</span>';
        ampm.innerHTML = am;

        hh.style.strokeDashoffset = 440 - (440 * h) / 12;
        mm.style.strokeDashoffset = 440 - (440 * m) / 60;
        ss.style.strokeDashoffset = 440 - (440 * s) / 60;

        hr_dot.style.transform = `rotate(${h * 30}deg)`;
        min_dot.style.transform = `rotate(${m * 6}deg)`;
        sec_dot.style.transform = `rotate(${s * 6}deg)`;
    })    
  return (
    <div className='kilopiu'>
      <div id="time2">
        <div className="circle" style={{'--clr': '#ff2972'}}>
            <div className="dots hr_dot"></div>
            <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70" id="hh"></circle>
            </svg>
            <div id="hours">
                00
            </div>
        </div>
        <div className="circle" style={{'--clr': '#fee800'}}>
            <div className="dots min_dot"></div>
            <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70" id="mm"></circle>
            </svg>
            <div id="minutes">
                00
            </div>
        </div>
        <div className="circle" style={{'--clr': '#04fc43'}}>
            <div className="dots sec_dot"></div>
            <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70" id="ss"></circle>
            </svg>
            <div id="secondes">
                00
            </div>
        </div>
        <div className="ap">
            <div id="ampm">AM</div>
        </div>
    </div>
    <div className="red">
        Sorry ! yOu OnLy SeE DiGiTaL ClOlCk & AnAlOg DiGiTaL oN WIdTh Of 700 Px . NoW yOu OnLy SeE tHe WoRld ClOck
    </div>
    </div>
  )
}

export default Clock2
