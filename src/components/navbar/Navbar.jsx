import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../../contexts/ThemeContext'
import { useAuth } from '../../contexts/AuthContext'
import './Navbar.css'

const Navbar = () => {
  const { theme, toggleTheme } = useTheme()

  // same values fronm ThemeContext
  const {user, signInWithGoogle, signOut} = useAuth()
  const location = useLocation()

  return (
    <div className='navbar'>
      <Link to="/">
        <div style={{padding: '10px', background: '#ddd', borderRadius: '5px'}}>LOGO</div>
      </Link>
      <ul>
        <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
        <li><Link to="/browse-accounts" className={location.pathname === '/browse-accounts' ? 'active' : ''}>Browse Accounts</Link></li>
        <li><Link to="/discover" className={location.pathname === '/discover' ? 'active' : ''}>Discover</Link></li>
        <li>{user ? 
          <Link to="/your-account" className={location.pathname === '/your-account' ? 'active' : ''}>Your Account</Link> : 
          <button className={location.signInButton} onClick={signInWithGoogle} style={{padding: '10px'}}>
            <p>Sign In</p>
          </button>}</li>
      </ul>
      <button onClick={toggleTheme} style={{padding: '10px'}}>
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </div>
  )
}

export default Navbar