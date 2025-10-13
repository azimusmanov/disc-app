import React from 'react'
import './ProfileCard.css'
import defaultpfp from '../../assets/pfp.png'

function ProfileCard({pfp, username, role, favGenres}){

    // const toggle_mode = ()=>{
    //     theme == 'light' ? setTheme('dark') : setTheme('light');
    // }

    return(
      <div className='profileCard'>
        {/* <img src={pfp} alt="" /> */}
        <img className='profile_picture' src={defaultpfp} alt="" />
        <h3 className='username'>{username}</h3>
        <h4 className='role'>{role}</h4>
        <p className='favorite_genres'>{favGenres}</p>
      </div>
    )
  }

export default ProfileCard