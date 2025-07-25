import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RegistrationProvider } from './pages/RegistrationContext.jsx';
import './index.css';
import App from './App.jsx';
import Home from './pages/Home/Home.jsx';
import UserSignUp from './pages/UserSignUp.jsx';
import DesignerSignUp from './pages/DesignerSignUp.jsx';
import UserProfile from './pages/UserProfile.jsx';
import OrdersHistory from './pages/OrdersHistory.jsx';
import AccountInfo from './pages/AccountInfo.jsx';
import OtherProduct from './pages/OtherProducts.jsx';
import ShoppingCard from './pages/ShoppingCard.jsx';
import SelectedProduct from './pages/SelectedProduct.jsx';
import ConfirmUserInfo from './pages/ConfirmUserInfo.jsx'; 
import Login from './pages/Login.jsx';

import { AuthProvider } from './contexts/AuthContext.jsx';
import Navbar from './components/Navbar.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <RegistrationProvider>
        <AuthProvider>
          <Navbar />
          <Routes>
            {/* <Route path="/" element={<ShappingCardProduct />} />  */}
            <Route path="/" element={<Home />} />
            {/* <Route path="/" element={<Footer />} />
            <Route path="/" element={<MainMenu />} /> */}
              <Route path="/usersignup" element={<UserSignUp />} />
              <Route path="/designersignup" element={<DesignerSignUp />} />
            {/* <Route path="/" element={<ProfileSidebar />} />  */}
            <Route path="/otherproducts" element={<OtherProduct />} /> 
            <Route path="/accountinfo" element={<AccountInfo />} /> 
            <Route path="/userprofile" element={<UserProfile />} /> 
            {/* <Route path="/" element={<OrderStatus />} />  */}
            <Route path="/ordershistory" element={<OrdersHistory />} /> 
            {/* <Route path="/" element={<Circles />} />  */}
            <Route path="/shoppingcard" element={<ShoppingCard />} /> 
            {/* <Route path="/" element={<Filter />} />  */}
            <Route path="/product/:id" element={<SelectedProduct />} /> 
            <Route path="/confirm-user-info" element={<ConfirmUserInfo />} /> 
            <Route path="/login" element={<Login />} /> 
          </Routes>
        </AuthProvider>
      </RegistrationProvider>
    </Router>
  </StrictMode>,
);