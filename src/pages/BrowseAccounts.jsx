import React from 'react'
import ProfileCard from '../components/profilecard/ProfileCard'

const BrowseAccounts = ({ theme }) => {
  const profiles = [
    {
      id: 1,
      username: 'Alex',
      role: 'Producer',
      favGenres: 'Hip-Hop, R&B'
    },
    {
      id: 2,
      username: 'Sarah',
      role: 'Vocalist',
      favGenres: 'Pop, Jazz'
    },
    {
      id: 3,
      username: 'Mike',
      role: 'Guitarist',
      favGenres: 'Rock, Blues'
    }
  ]

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Browse Accounts</h1>
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center',
        gap: '20px'
      }}>
        {profiles.map(profile => (
          <ProfileCard 
            key={profile.id}
            username={profile.username}
            role={profile.role}
            favGenres={profile.favGenres}
          />
        ))}
      </div>
    </div>
  )
}

export default BrowseAccounts