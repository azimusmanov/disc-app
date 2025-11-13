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

  const handleLogout = async () => {
    console.log('Logout button clicked!')
    console.log('User before logout:', user)
    await signOut()
    console.log('Logout completed')
  }

  return (
    <div className='navbar'>
      <Link to="/">
        <div style={{padding: '10px', background: '#ddd', borderRadius: '5px'}}>LOGO</div>
      </Link>
      <ul>
        <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
        <li><Link to="/browse-accounts" className={location.pathname === '/browse-accounts' ? 'active' : ''}>Browse Accounts</Link></li>
        <li><Link to="/discover" className={location.pathname === '/discover' ? 'active' : ''}>Discover</Link></li>
        <li>
          {user ? (
            <>
              <Link to="/your-account" className={location.pathname === '/your-account' ? 'active' : ''}>Your Account</Link>
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </>
          ) : (
            <button onClick={signInWithGoogle} style={{padding: '10px 20px', cursor: 'pointer'}}>
              Sign In with Google
            </button>
          )}
        </li>
      </ul>
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </div>
  )
}

export default Navbar