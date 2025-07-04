import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import '../index.css'
import '../styles/base.css'
import '../styles/components.nav.css'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MainMenu from '../components/MainMenu'
import ProfileSidebar from '../components/ProfileSidebar'
import ProductCard from '../components/ProductCard'
import OrderSummary from '../components/OrdersSummary'

import productPic from '../assets/images/product-image.svg'
import leftCarousel from '../assets/icons/left-carousel.svg'

const UserProfile = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(''); 

    useEffect(() => {
        const fetchUserProfile = async () => {
            const token = localStorage.getItem('authToken'); 

            if (!token) {
                console.warn("No auth token found. Redirecting to login page.");
                navigate('/login');
                return;
            }

            try {
                setLoading(true); 
                const response = await fetch('http://127.0.0.1:8000/api/auth/profile/', { 
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Token ${token}`,
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setUserData(data); 
                    console.log("User profile data fetched successfully:", data);
                } else {
                    const errorData = await response.json();
                    setError(errorData.detail || 'خطا در دریافت اطلاعات پروفایل.');
                    console.error('Failed to fetch user profile:', errorData);
                    if (response.status === 401 || response.status === 403) {
                        localStorage.removeItem('authToken'); 
                        navigate('/login');
                    }
                }
            } catch (err) {
                setError('خطای شبکه یا خطای غیرمنتظره در هنگام دریافت اطلاعات پروفایل.');
                console.error('Network or unexpected error:', err);
            } finally {
                setLoading(false); 
            }
        };

        fetchUserProfile();
    }, [navigate]); 

    if (loading) {
        return (
            <>
                <Navbar />
                <MainMenu />
                <div className="flex justify-center items-center h-[calc(100vh-var(--navbar-height)-var(--footer-height))]">
                    <p className="text-lg text-[var(--color-primary)]">در حال بارگذاری اطلاعات پروفایل...</p>
                </div>
                <Footer />
            </>
        );
    }

    if (error) {
        return (
            <>
                <Navbar />
                <MainMenu />
                <div className="flex justify-center items-center h-[calc(100vh-var(--navbar-height)-var(--footer-height))]">
                    <p className="text-lg text-red-500">{error}</p>
                </div>
                <Footer />
            </>
        );
    }

    if (!userData) {
        return null; 
    }

    return ( 
        <>
            <Navbar />
            <MainMenu />
            <div className='flex justify-center mt-[2rem] h-auto'>
                <div className='flex gap-[1.5625rem] h-auto p-[1.5rem]'>
                    <ProfileSidebar userData={userData} />
                    <div className='w-[50.5rem] h-auto  border border-[var(--color-custome-gray-3)] rounded-[16px] p-[1.5rem] mt-[4.0625rem] mb-[3.75rem] overflow-x-hidden'>
                        <h2 className='font-bold text-2xl'>سفارشات من</h2>
                        <OrderSummary />

                        <div className='border-b border-[var(--color-custome-gray-3)] pb-[1.5rem] w-full'>
                            <span className='flex justify-between items-center my-[1.5rem]'>
                                <h2 className='font-bold text-2xl'>علاقه مندی های من</h2>
                                <a href="#" className='w-[8rem] h-[2.5rem] text-[var(--color-primary)] flex items-center justify-center'>مشاهده بیشتر</a>
                            </span>
                            {/* todo: fix left carousel */}
                            <div className='relative flex gap-[1rem]'>
                                <ProductCard imageUrl={ productPic } productName="استیکر فرندز" productDescription="دارای رنگ بندی، قابل طراحی" price="۱۵۰,۰۰۰" />
                                <ProductCard imageUrl={ productPic } productName="استیکر فرندز" productDescription="دارای رنگ بندی، قابل طراحی" price="۱۵۰,۰۰۰" />
                                <ProductCard imageUrl={ productPic } productName="استیکر فرندز" productDescription="دارای رنگ بندی، قابل طراحی" price="۱۵۰,۰۰۰" />
                                <div className='overflow-visible absolute left-[-2rem] top-1/2 w-[2.5rem] h-[2.5rem] z-10'>
                                    <img src={ leftCarousel } alt="left-carousel" className='' />
                                </div>
                            </div>

                        </div>

                        <div className='border-b border-[var(--color-custome-gray-3)] pb-[1.5rem]'>
                            <span className='flex justify-between items-center my-[1.5rem]'>
                                <h2 className='font-bold text-2xl'>خرید های پرتکرار من </h2>
                                <a href="#" className='w-[8rem] h-[2.5rem] text-[var(--color-primary)] flex items-center justify-center'>مشاهده بیشتر</a>
                            </span>
                            <div className='flex gap-[1rem] relative'>
                                <ProductCard imageUrl={ productPic } productName="استیکر فرندز" productDescription="دارای رنگ بندی، قابل طراحی" price="۱۵۰,۰۰۰" />
                                <ProductCard imageUrl={ productPic } productName="استیکر فرندز" productDescription="دارای رنگ بندی، قابل طراحی" price="۱۵۰,۰۰۰" />
                                <ProductCard imageUrl={ productPic } productName="استیکر فرندز" productDescription="دارای رنگ بندی، قابل طراحی" price="۱۵۰,۰۰۰" />
                                <img src={ leftCarousel } alt="left-carousel" className='absolute left-0 top-1/2' />

                            </div>
                        </div>

                        <div>
                            <span className='flex justify-between items-center my-[1.5rem]'>
                                <h2 className='font-bold text-2xl'>گالری من</h2>
                                <a href="#" className='w-[8rem] h-[2.5rem] text-[var(--color-primary)] flex items-center justify-center'>مشاهده بیشتر</a>
                            </span>
                            <div className='flex gap-[1rem] relative'>
                                <ProductCard imageUrl={ productPic } productName="استیکر فرندز" productDescription="دارای رنگ بندی، قابل طراحی" price="۱۵۰,۰۰۰" />
                                <ProductCard imageUrl={ productPic } productName="استیکر فرندز" productDescription="دارای رنگ بندی، قابل طراحی" price="۱۵۰,۰۰۰" />
                                <ProductCard imageUrl={ productPic } productName="استیکر فرندز" productDescription="دارای رنگ بندی، قابل طراحی" price="۱۵۰,۰۰۰" />
                                <img src={ leftCarousel } alt="left-carousel" className='absolute left-0 top-1/2' />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
     );
}
 
export default UserProfile;