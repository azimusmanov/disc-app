import React from 'react'
import { useTheme } from '../contexts/ThemeContext'
import './Home.css'

const Home = () => {
  const { theme } = useTheme()
  
  return (
    <div className={`home-page ${theme}`}>
      <div className="hero-section">
        <h3 className="greeting">Nice to meet you! Welcome to</h3>
        <h1 className="hero-title">Parallel Uploads.</h1>
        
        <div className="info-section">
          <h2 className="section-heading">WHAT WE DO</h2>
          <p className="section-text">
            Upload your short-form content once and distribute it across multiple platforms automatically. 
            Save time and maximize your reach effortlessly.
          </p>
        </div>

        <div className="info-section">
          <h2 className="section-heading">HOW IT WORKS</h2>
          <p className="section-text">
            Connect your social media accounts, upload your content, and let our platform handle the rest. 
            Seamless distribution to TikTok, Instagram Reels, YouTube Shorts, and more.
          </p>
        </div>

        <div className="info-section">
          <h2 className="section-heading">GET STARTED</h2>
          <p className="section-text">
            Create an account to start uploading and managing your content across all platforms from one place.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home