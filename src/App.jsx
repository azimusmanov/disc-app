import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { ThemeProvider, useTheme } from './contexts/ThemeContext'
import { AuthProvider, useAuth} from './contexts/AuthContext'
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
          <Route path="/upload" element={
            <div className="coming-soon">
              <p>This page will allow you to simultaneously post videos</p>
            </div>
          } />
          <Route path="/discover" element={
            <div className="coming-soon">
              <h3>Coming Soon</h3>
              <h1>Discover Page.</h1>
              <p>Find trending content and explore new creators across all platforms.</p>
            </div>
          } />
          <Route path="/your-account" element={
            <div className="coming-soon">
              <h3>Your Dashboard</h3>
              <h1>Manage Your Content.</h1>
              <p>View analytics, schedule uploads, and manage your connected platforms all in one place.</p>
            </div>
          } />
        </Routes>
      </main>
      
      {/* Floating upload button */}
      <a href="/upload" className="floating-upload-btn">
        <span className="plus-icon">+</span>
        <span className="upload-text">Post</span>
      </a>
    </div>
  )
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ThemeProvider>
          <AppContent />
        </ThemeProvider>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App