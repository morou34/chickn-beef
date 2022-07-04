import React, {useState} from 'react'
import marker from '../images/marker.png'
import wheel from '../images/wheel4.png'
import button from '../images/button2.png'
import  '../index.css'
import { signInWithGoogle } from '../Firebase'
import { getAuth, onAuthStateChanged } from "firebase/auth"


const SpinWheel = () => {

    let angle = 0;
    const [wheelStyle, newWheelStyle] = useState('wheelInRest');
    const [btnStyle, newBtnStyle] = useState('btnNotClicked');

    const isLogged = () => {
      const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        signInWithGoogle()
      } else {
        changeStyle()
      }
    })
    };
    const changeStyle = () => {
      const values = [22, 65, 114, 155, 205, 250, 295, 335]
      const chances = [12.5, 12.5, 12.5,12.5,12.5,12.5,12.5,12.5]
      const randomValue = Math.random()*100;
      let runningSum = 0;
      let choice;
      for(let i = 0; i < chances.length; i++) {
        runningSum += chances[i];
        if (randomValue <= runningSum) {
          choice = values[i];
          break;
        }
      }
        angle = Math.floor( 36000 + choice);
        document.documentElement.style.setProperty('--rotation-degrees', `${angle}deg`);
        console.log(angle);
        
        newWheelStyle("wheelSpining");
        newBtnStyle('btnIsClicked');

      };

  return (
    <div id='WheelOfFortune'>
        <img className={wheelStyle} src={wheel} alt="" />
        <img className='marker' src={marker} alt="" />
        <img onClick={isLogged} className={btnStyle} src={button} alt="" />
    </div>
  )
}

export default SpinWheel