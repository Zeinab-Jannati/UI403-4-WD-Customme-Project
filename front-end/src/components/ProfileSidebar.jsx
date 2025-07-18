import '../index.css'
import '../styles/base.css'
import '../styles/components.nav.css'

import userAvatar from '../assets/icons/user-avatar.svg'
import camera from '../assets/icons/camera.svg'
import plusIcon from '../assets/icons/plus-icon.svg'
import dashbordIcon from '../assets/icons/dashbord-icon.svg'
import historyIcon from '../assets/icons/history-icon.svg'
import galleryIcon from '../assets/icons/gallery-icon.svg'
import addressIcon from '../assets/icons/address-icon.svg'
import followIcon from '../assets/icons/follow-icon.svg'
import infoIcon from '../assets/icons/info-icon.svg'
import logoutIcon from '../assets/icons/logout-icon.svg'

import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'
import MainMenu from './MainMenu'
import Footer from './Footer'

import { useAuth } from '../contexts/AuthContext'

const ProfileSidebar = () => {

    const navigate = useNavigate();
    const { userProfile, isLoading, isAuthenticated, logout } = useAuth();
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
        return <div className="w-[18rem] bg-gray-100 p-4 rounded-lg">در حال بارگذاری نوار کناری...</div>;
    }

    
        const handleLogout = async () => {
            try {
                await logout();
                alert('با موفقیت از سیستم خارج شدید!');
                navigate('/');
            } catch (error) {
                alert(`خطا در خروج: ${error.message}`);
            }
        };

    return ( 
        <div className="flex flex-col gap-[1.25rem]">
            <h3 className='font-bold text-3xl !h-[2.8125] !w-[6.5625rem]'>پروفایل</h3>
            {/* h-[53.125rem] */}
            <div className="flex justify-center w-[24.5rem] rounded-[16px] mb-[10.1875rem] border border-[var(--color-custome-gray-3)]">
                {/*  h-[50.125rem] */}
                <div className="w-[20.125rem] h-auto flex flex-col gap-[1.5rem] items-center py-[1.5rem]">
                    {/* User Profile Avatar */}
                    <div className="flex flex-col items-center border-b border-[var(--color-custome-gray-3)] w-[20.1875rem] h-auto gap-[0.5rem]">
                        <div className="relative">
                            <img src={ userAvatar } alt="User avatar" className='w-[9rem] h-[9rem]' />
                            <div className="flex items-center justify-center absolute bottom-0 left-0 rounded-full w-[2.625rem] h-[2.625rem] bg-[var(--color-primary-tint-7)]">
                                <img className="w-[1.5rem] h-[1.5rem]" src={ camera } alt="camera" />
                            </div>
                        </div>
                        <div className='w-[11.875rem] flex flex-col justify-center items-center'>
                            <div className="h-[2.25rem] text-[var(--color-custome-gray-9)] text-xl">{ userData.username}</div>
                            <div className="h-[2.25rem] text-[var(--color-custome-gray-8)] text-xl">{ userData.email }</div>
                        </div>
                    </div>


                    <div className="flex gap-[4.75rem] w-[20.1875rem] h-[8.25rem] text-[var(--color-custome-gray-9)] text-xl whitespace-nowrap">
                        <div className='flex flex-col gap-[0.75rem]'>
                            <div className='flex gap-[0.5rem] items-center'>
                                <span className="">اعتبار خرید</span>
                                <a href="#"><img src={ plusIcon } alt="plus-icon" className='w-[1.25rem] h-[1.25rem]'/></a>
                            </div>
                            <span className="">تعداد طرح ها</span>
                            <span className="">تعداد سفارش ها</span>
                        </div>
                        <div className='flex flex-col gap-[0.75rem]'>
                            <span className="font-medium">۱۰۰,۰۰۰ تومان</span>
                            <span>۶۵</span>
                            <span>۷۰</span>
                        </div>
                    </div>

                    <ul className='w-[20.125rem] text-xl'>
                        <div className='h-[3rem] w-[20.1875rem] border-b border-[var(--color-primary-tint-7)] mt-0 flex items-center'>
                            <a href="#">
                                <span className='flex gap-[0.375rem] w-[5.8125rem] h-[2.25rem] text-[var(--color-primary)]'>
                                    <img src={ dashbordIcon } alt="dashbord-icon" className='w-[1.5rem] h-[1.5rem]'/>
                                    داشبورد
                                </span>
                            </a>

                        </div>
                        
                        <div className='h-[3.75rem] w-[20.1875rem] border-b border-[var(--color-custome-gray-3)] flex items-center text-[--color-custome-gray-9]'>
                            <Link to='/ordershistory'>
                                <span className='flex gap-[0.375rem] '>
                                    <img src={ historyIcon } alt="history-icon" />
                                    تاریخجه سفارشات
                                </span>
                            </Link>

                        </div>
                        
                        <div className='h-[3.75rem] w-[20.1875rem] border-b border-[var(--color-custome-gray-3)] flex items-center text-[--color-custome-gray-9]'>
                            <a href="#" className=''>
                                <span className='flex gap-[0.375rem] '>
                                    <img src={ galleryIcon } alt="gallery-icon" />
                                    گالری
                                </span>
                            </a>

                        </div>
                        
                        <div className='h-[3.75rem] w-[20.1875rem] border-b border-[var(--color-custome-gray-3)] flex items-center text-[--color-custome-gray-9]'>
                            <a href="#" className=''>
                                <span className='flex gap-[0.375rem] '>
                                    <img src={ addressIcon } alt="address-icon" />
                                    آدرس ها
                                </span>
                            </a>

                        </div>
                        
                        <div className='h-[3.75rem] w-[20.1875rem] border-b border-[var(--color-custome-gray-3)] flex items-center text-[--color-custome-gray-9]'>
                            <a href="#" className=''>
                                <span className='flex gap-[0.375rem] '>
                                    <img src={ followIcon } alt="follow-icon" />
                                    دنبال شوندگان
                                </span>
                            </a>

                        </div>
                        
                        <div className='h-[3.75rem] w-[20.1875rem] border-b border-[var(--color-custome-gray-3)] flex items-center text-[--color-custome-gray-9]'>
                            <a href="#" className=''>
                                <span className='flex gap-[0.375rem] '>
                                    <img src={ infoIcon } alt="info-icon" />
                                    اطلاعات حساب کاربری
                                </span>
                            </a>

                        </div>
                        
                        <div className='h-[3.75rem] w-[20.1875rem] border-b border-[var(--color-custome-gray-3)] flex items-center text-[--color-custome-gray-9]'>
                            <Link onClick={handleLogout}>
                                <span className='flex gap-[0.375rem] '>
                                    <img src={ logoutIcon } alt="logout-icon" />
                                    خروج
                                </span>
                            </Link>

                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
}
 
export default ProfileSidebar;