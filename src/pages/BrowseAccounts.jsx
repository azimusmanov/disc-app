import React, { useState, useEffect } from 'react'
import { useTheme } from '../contexts/ThemeContext'
import ProfileCard from '../components/profilecard/ProfileCard'

async function getData(){
    const url = "https://disc-assignment-5-users-api-iyct.onrender.com/api/users";
    let result;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error.message);
    }
    return result;
}

const BrowseAccounts = ({ theme }) => {
  const { theme } = useTheme()
//   Inititializing profiles state to Null
  const [data, setData] = useState(null);
 
  useEffect(() => {
    console.log('TEST: this runs after the componenet renders')
    
    async function fetchData() {
        const data = await getData();
        setData(data);
        console.log(data)
    }

    // Calling aboe function
    fetchData();
}, [])

  return (
    <div className={`browse-accounts-page ${theme}`}style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Browse Accounts</h1>
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center',
        gap: '20px'
      }}>
        {data && data.map(user => (
          <ProfileCard 
            key={user.id}
            pfp={user.profilePicture}
            username={user.firstName}
            role={user.email}
            favGenres={user.major}
          />
        ))}
      </div>
    </div>
  )
}

export default BrowseAccounts