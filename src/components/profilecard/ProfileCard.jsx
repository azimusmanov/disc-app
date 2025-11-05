import React from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import './ProfileCard.css'
import defaultpfp from '../../assets/pfp.png'

function ProfileCard({pfp, username, role, favGenres}){
    const { theme } = useTheme()

    return(
      <div className={`profileCard ${theme}`}>
        <img className='profile_picture' src={pfp || defaultpfp} alt="" />
        <h3 className='username'>{username}</h3>
        <h4 className='role'>{role}</h4>
        <p className='favorite_genres'>{favGenres}</p>
      </div>
    )
  }

export default ProfileCard