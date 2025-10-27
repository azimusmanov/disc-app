import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
import logo_light from '../../assets/logo-black.png'
import logo_dark from '../../assets/logo-white.png'
import search_icon_light from '../../assets/search-w.png'
import search_icon_dark from '../../assets/search-b.png'
import toggle_dark from '../../assets/day.png'
import toggle_light from '../../assets/night.png'


const Navbar = ({theme, setTheme}) => {
    const location = useLocation();

    const toggle_mode = ()=>{
        theme == 'light' ? setTheme('dark') : setTheme('light');
    }

  return (
    <div className='navbar'>

        {/* Determine which logo to display based on theme state */}
      <Link to="/">
        <img src={theme == 'light' ? logo_light : logo_dark} alt="" className='logo'/>
      </Link>
      <ul>
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/browse-accounts" className={location.pathname === '/browse-accounts' ? 'active' : ''}>
            Browse Accounts
          </Link>
        </li>
        <li>
          <Link 
            to="/discover" className={location.pathname === '/discover' ? 'active' : ''}>
            Discover
          </Link>
        </li>
        <li>
          <Link to="/your-account" className={location.pathname === '/your-account' ? 'active' : ''}>
            Your Account
          </Link>
        </li>
      </ul>
      <div className='search-box'>
        <input type='text' placeholder='Search' />
        <img src={theme == 'light' ? search_icon_light : search_icon_dark} alt="" />
      </div>

      <img onClick={()=>{toggle_mode()}} src={theme == 'light' ? toggle_light : toggle_dark} alt="" className='toggle-icon'/>
    </div>
  )
}

export default Navbar
