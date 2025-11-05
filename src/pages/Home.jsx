import React from 'react'
import { useTheme } from '../contexts/ThemeContext'

const Home = () => {
  const { theme } = useTheme()
  
  return (
    <div className={theme} style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Welcome to Eduford</h1>
      <p>Connect with musicians, artists, and producers on campus</p>
      <div style={{ marginTop: '40px' }}>
        <h2>Find Your Musical Community</h2>
        <p>Discover like-minded people who share your passion for music</p>
      </div>
    </div>
  )
}

export default Home