import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import UserSignUp from './pages/UserSignUp.jsx'
import Footer from './pages/Footer.jsx'
import DesignerSignUp from './pages/DesignerSignUp.jsx'
import MainMenu from './components/MainMenu.jsx'
import ProfileSidebar from './components/ProfileSidebar.jsx'
import UserProfile from './pages/UserProfile.jsx'
import ProductCard from './components/ProductCard.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* <Route path="/" element={<Footer />} /> */}
        {/* <Route path="/" element={<MainMenu />} /> */}
        {/* <Route path="/" element={<UserSignUp />} /> */}
        {/* <Route path="/" element={<DesignerSignUp />} /> */}
        {/* <Route path="/" element={<App />} /> */}
        {/* <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} /> */}
        {/* <Route path="/" element={<ProfileSidebar />} />  */}
        <Route path="/" element={<UserProfile />} /> 
        {/* <Route path="/" element={<ProductCard />} />  */}
      </Routes>
    </Router>
  </StrictMode>,
)
