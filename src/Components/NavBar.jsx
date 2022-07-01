import React, {useState} from 'react'
import {Link} from 'react-scroll'
import logo from '../images/logo1.png'

const NavBar = () => {
  const [nav, setnav] = useState(false);
  const changeBackground = () => {
    if(window.scrollv >=50){
      setnav(true);
    }
    else{
      setnav(false);
    }
  }

  window.addEventListener('scroll', changeBackground);


  return (
    <nav className={nav ? "nav active": "nav"}>
      <Link to='main' className="logo">
        <img src={logo} alt="" />
      </Link>
      <input className="menu-btn" type="checkbox" id='menu-btn' />
      <label className="menu-icon" type="menu-btn">
        <span className='nav-icon'></span>
      </label>
      <ul>
        <li><Link to="#">Order</Link></li>
        <li><Link to="#">Bugers</Link></li>
        <li><Link to="#">Boissons</Link></li>
        <li><Link to="#">Desserts</Link></li>
        <li><Link to="#">Restaurants</Link></li>
        <li><Link to="#">Contact</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar