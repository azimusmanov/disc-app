import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { ThemeProvider, useTheme } from './contexts/ThemeContext'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import BrowseAccounts from './pages/BrowseAccounts'

function AppContent() {
  const { theme } = useTheme()

  return (
    <div className={`container ${theme}`}>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse-accounts" element={<BrowseAccounts />} />
          <Route path="/discover" element={<div className="coming-soon">Discover page coming soon...</div>} />
          <Route path="/your-account" element={<div className="coming-soon">Your Account page coming soon...</div>} />
        </Routes>
      </main>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App