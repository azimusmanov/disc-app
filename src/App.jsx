import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'

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
      <div className={'container ${theme}'}>
        <Navbar theme = {theme} setTheme={setTheme} />
      </div>
    </>
  )
}

export default App
