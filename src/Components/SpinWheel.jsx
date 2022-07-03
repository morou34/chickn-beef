import React, {useState} from 'react'
import marker from '../images/marker.png'
import wheel from '../images/wheel.png'
import button from '../images/button.png'
import  '../index.css'

const SpinWheel = () => {

    let angle = 0;
    const minAngle = 33000;
    const [wheelStyle, newWheelStyle] = useState('wheelInRest');
    const [btnStyle, newBtnStyle] = useState('btnNotClicked');

    const changeStyle = () => {
        
        angle = Math.floor( minAngle + Math.random() * minAngle);
        document.documentElement.style.setProperty('--rotation-degrees', `${angle}deg`);
        console.log(angle);
        
        newWheelStyle("wheelSpining");
        newBtnStyle('btnIsClicked');

      };

  return (
    <div id='WheelOfFortune'>
        <img className={wheelStyle} src={wheel} alt="" />
        <img className='marker' src={marker} alt="" />
        <img onClick={changeStyle} className={btnStyle} src={button} alt="" />
    </div>
  )
}

export default SpinWheel