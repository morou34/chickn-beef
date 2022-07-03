import React, {useState} from 'react'

const Header = () => {
  const [btnText, setBtnText] = useState('Start Review');
  const  handleClick = () =>  setBtnText('Waiting ...');

    return (
    <div id='main'>
      <div className='header-heading'>
        <h3>It's Great Time for A Good Taste of Chicken Burger</h3>
        <h1><span>BUGER </span>For<br/>WEEK</h1>
        <p className='details'>Order This Fucking BURGER, I need money and you<br/> need to EAT, that's it. that's the truth.</p>
        <div className='header-btns'>
          <a onClick={handleClick} href="https://google.com/" target="_blank" className='header-btn'>{btnText}</a>
        </div>
      </div>
    </div>
  )
}

export default Header