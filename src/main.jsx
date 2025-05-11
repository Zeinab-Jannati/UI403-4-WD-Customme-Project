import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home/Home.jsx'
import UserSignUp from './pages/UserSignUp.jsx'
import Footer from './components/Footer.jsx'
import DesignerSignUp from './pages/DesignerSignUp.jsx'
import MainMenu from './components/MainMenu.jsx'
import ProfileSidebar from './components/ProfileSidebar.jsx'
import UserProfile from './pages/UserProfile.jsx'
import OrdersSummary from './components/OrdersSummary.jsx'
import OrdersHistory from './pages/OrdersHistory.jsx'
import OrderStatus from './components/OrderStatus.jsx'
import AccountInfo from './pages/AccountInfo.jsx'
import OtherProduct from './pages/OtherProducts.jsx'
import ProductCard from './components/ProductCard.jsx'
import Circles from './components/Circles.jsx'

import productPic from './assets/images/product-image.svg'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/" element={<Footer />} /> */}
        {/* <Route path="/" element={<MainMenu />} /> */}
        {/* <Route path="/" element={<UserSignUp />} /> */}
        {/* <Route path="/" element={<DesignerSignUp />} /> */}
        {/* <Route path="/" element={<App />} /> */}
        {/* <Route path="/" element={<ProfileSidebar />} />  */}
        {/* <Route path="/" element={<OtherProduct />} />  */}
        {/* <Route path="/" element={<AccountInfo />} />  */}
        {/* <Route path="/" element={<UserProfile />} />  */}
        {/* <Route path="/" element={<OrderStatus />} />  */}
        <Route path="/" element={<OrdersHistory />} /> 
        {/* <Route path="/" element={<Circles />} />  */}
        {/* <Route path="/" element={<ProductCard imageUrl={ productPic } productName="استیکر فرندز" productDescription="دارای رنگ بندی، قابل طراحی" price="۱۵۰,۰۰۰" />} />  */}
      </Routes>
    </Router>
  </StrictMode>,
)
