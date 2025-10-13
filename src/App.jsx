import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import ProfileCard from './components/profilecard/ProfileCard'

function App() {

  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme?
    current_theme: 'light'
  );
  const [count, setCount] = useState(0);

  useEffect(()=>{
    localStorage.setItem('current_theme', theme);
  }, [theme])


  return (
    <>
      <div className={`container ${theme}`}>
        <Navbar theme = {theme} setTheme={setTheme} />
        <ProfileCard theme = {theme} setTheme={setTheme} pfp='' username='Azim' role='both' favGenres='Rap' />
        <ProfileCard theme = {theme} setTheme={setTheme} pfp='' username='Azim2' role='both' favGenres='Rap' />
      </div>

      
    </>
  )
}

export default App
