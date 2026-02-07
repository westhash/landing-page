import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'
import Cookies from './pages/Cookies.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import ScrollToSection from './components/ScrollToSection.jsx'

// Calcola il basename dal tag <base> per supportare subdirectory
const getBasename = () => {
  const base = document.querySelector('base')?.href
  if (!base) return '/'
  
  const url = new URL(base, window.location.origin)
  return url.pathname
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={getBasename()}>
      <ScrollToTop />
      <ScrollToSection />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookies" element={<Cookies />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
