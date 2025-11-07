import React, { useState, useEffect } from 'react'
import { useTheme } from '../contexts/ThemeContext'
import ProfileCard from '../components/profilecard/ProfileCard'
import { supabase } from '../config/supabase'

const BrowseAccounts = () => {
  const { theme } = useTheme()
//   Inititializing profiles state to Null
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers()
  }, [])

  async function getUsers() {
    const url = "http://localhost:3000/users/profiles"
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`)
      }

      const result = await response.json()
      console.log(result)
      setUsers(result)  // ← Move this inside
    } catch (error) {
      console.error(error.message)
    }
    // setUsers(result)
  }

  return (
    <div className={`browse-accounts-page ${theme}`} style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Browse Accounts</h1>
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center',
        gap: '20px'
      }}>
        {users && users.map(user => (
          <ProfileCard 
            key={user.id}
            pfp={user.profilePicture}
            username={user.date_of_birth}
            // role={user.email}
            // favGenres={user.major}
          />
        ))}
      </div>
    </div>
  )
}

export default BrowseAccounts