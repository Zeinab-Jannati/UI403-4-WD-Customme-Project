import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';
import '../styles/base.css';
import '../styles/components.nav.css';

import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [id]: value
        }));
        if (errors[id]) {
            setErrors(prevErrors => {
                const newErrors = { ...prevErrors };
                delete newErrors[id];
                return newErrors;
            });
        }
        if (successMessage) setSuccessMessage('');
        if (errors.general) setErrors(prev => ({ ...prev, general: '' }));
        if (errors.non_field_errors) setErrors(prev => ({ ...prev, non_field_errors: '' }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); 
        setErrors({}); 
        setSuccessMessage(''); 

        const newErrors = {};

        if (!formData.username.trim()) {
            newErrors.username = 'نام کاربری الزامی است.';
        }
        if (!formData.password.trim()) {
            newErrors.password = 'رمز عبور الزامی است.';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setLoading(false);
            return;
        }

        const payload = {
            username: formData.username,
            password: formData.password,
        };

        console.log("Login payload:", payload);

        try {
            const response = await fetch('http://127.0.0.1:8000/api/auth/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json(); 

            if (response.ok) {
                const token = data.token; 
                if (token) {
                    localStorage.setItem('authToken', token); 
                    setSuccessMessage('ورود موفقیت‌آمیز! در حال انتقال به صفحه پروفایل...');
                    console.log("Auth Token received and stored:", token);
                    setTimeout(() => {
                        navigate('/userprofile');
                    }, 1500);
                } else {
                    setErrors({ general: 'پاسخ سرور معتبر نیست: توکن یافت نشد.' });
                }
            } else {
                setErrors(data); 
                console.error('Login failed:', data);
            }
        } catch (error) {
            console.error('Network error or unexpected error during login:', error);
            setErrors({ general: 'خطایی غیرمنتظره رخ داد. لطفا دوباره تلاش کنید.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar />
            <Contact />
            <main className='flex justify-center items-center min-h-[calc(100vh-var(--navbar-height)-var(--footer-height))] py-8'>
                <div className='flex flex-col md:flex-row items-center justify-center bg-white p-8 rounded-xl shadow-lg gap-8 w-full max-w-4xl'>
                    <div className='w-full md:w-1/2'>
                        <h2 className='text-[var(--color-primary-tint-7)] font-bold text-2xl mb-6 text-center' style={{ fontFamily: 'IRANYekanXVF' }}>ورود به حساب کاربری</h2>
                        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                            {/* نمایش پیام‌های عمومی موفقیت/خطا */}
                            {successMessage && <p className="text-green-500 text-sm w-full text-center mb-2">{successMessage}</p>}
                            {(errors.general || errors.non_field_errors) && (
                                <p className="text-red-500 text-sm w-full text-center mb-2">
                                    {errors.general || errors.non_field_errors}
                                </p>
                            )}

                            {/* فیلد نام کاربری */}
                            <div className='flex flex-col gap-1'>
                                <label htmlFor='username' className='text-[var(--color-custome-gray-5)] text-sm'>نام کاربری</label>
                                <input
                                    className={`border ${errors.username ? 'border-red-500' : 'border-[var(--color-custome-gray-5)]'} focus:outline-none rounded-[8px] w-full h-[2.5rem] px-3 text-sm`}
                                    type="text"
                                    id='username'
                                    value={formData.username}
                                    onChange={handleChange}
                                    dir='ltr'
                                    placeholder='نام کاربری خود را وارد کنید'
                                    required
                                />
                                {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
                            </div>

                            {/* فیلد رمز عبور */}
                            <div className='flex flex-col gap-1'>
                                <label htmlFor='password' className='text-[var(--color-custome-gray-5)] text-sm'>رمز عبور</label>
                                <input
                                    className={`border ${errors.password ? 'border-red-500' : 'border-[var(--color-custome-gray-5)]'} focus:outline-none rounded-[8px] w-full h-[2.5rem] px-3 text-sm`}
                                    type="password"
                                    id='password'
                                    value={formData.password}
                                    onChange={handleChange}
                                    dir='ltr'
                                    placeholder='رمز عبور خود را وارد کنید'
                                    required
                                />
                                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                            </div>

                            {/* دکمه ورود */}
                            <button
                                type="submit"
                                disabled={loading}
                                className='mt-4 w-full flex justify-center items-center gap-2 bg-[var(--color-primary)] text-white h-[3rem] rounded-[0.5rem] text-lg font-medium hover:opacity-90 transition-opacity duration-300'
                            >
                                {loading ? 'در حال ورود...' : 'ورود'}
                            </button>

                            {/* لینک ثبت نام */}
                            <p className="text-center text-sm text-gray-600 mt-4">
                                حساب کاربری ندارید؟{' '}
                                <Link to="/designersignup" className="text-[var(--color-primary)] hover:underline">
                                    ثبت نام کنید
                                </Link>
                            </p>
                        </form>
                    </div>
                    <div className='w-full md:w-1/2 flex justify-center items-center'>
                        {/* <img src={LoginImage} alt="Login Illustration" className='max-w-full h-auto rounded-lg shadow-md' /> */}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Login;
