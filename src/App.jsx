import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import BrowseAccounts from './pages/BrowseAccounts'

function App() {

  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme?
    current_theme: 'light'
  );

  useEffect(()=>{
    localStorage.setItem('current_theme', theme);
  }, [theme])

  return (
    <BrowserRouter>
      <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home theme={theme} />} />
            <Route path="/browse-accounts" element={<BrowseAccounts theme={theme} />} />
            <Route path="/discover" element={<div className="coming-soon">Discover page coming soon...</div>} />
            <Route path="/your-account" element={<div className="coming-soon">Your Account page coming soon...</div>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
