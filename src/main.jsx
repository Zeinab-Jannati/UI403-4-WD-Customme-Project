import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import UserSignUp from './pages/UserSignUp.jsx'
import Footer from './pages/Footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* <Route path="/" element={<Footer />} /> */}
        <Route path="/" element={<UserSignUp />} />
        {/* <Route path="/" element={<App />} /> */}
        {/* <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  </StrictMode>,
)
