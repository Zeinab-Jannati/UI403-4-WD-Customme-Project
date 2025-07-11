import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import '../styles/base.css';
import '../styles/components.nav.css';
import { RegistrationContext } from './RegistrationContext';


import Navbar from '../components/Navbar';
import Contact from '../components/Contact';

import map from '../assets/images/map.png';
import Footer from '../components/Footer';

import userSignUpImage from '../assets/images/user-sign-up-image.svg';
import arrowDown from '../assets/icons/arrow-down.svg';

const UserSignUp = () => {
    const navigate = useNavigate(); 
    const { registrationData, setRegistrationData, updateRegistrationData } = useContext(RegistrationContext);
    const [errors, setErrors] = useState({}); 
    const [successMessage, setSuccessMessage] = useState(''); 
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        cellPhoneNumber: '',
        telephoneNumber: '',
        province: '',
        city: '',
        zipCode: '',
        address: '' 
    });

    useEffect(() => {
        const storedData = localStorage.getItem('registrationFormData');
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            if (Object.keys(registrationData).length === 0) {
                setRegistrationData(parsedData);
                console.log("Registration data restored from localStorage:", parsedData);
            }
        }

        if (Object.keys(registrationData).length === 0 || !registrationData.username) {
            console.warn("UserSignUp - No initial registration data found. Redirecting to Designer Sign Up.");
            navigate('/designersignup');
        }
    }, [registrationData, navigate, setRegistrationData]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [id]: value
        }));

        if (errors[id] || errors[id.replace(/([A-Z])/g, "_$1").toLowerCase()]) {
            setErrors(prevErrors => {
                const newErrors = { ...prevErrors };
                delete newErrors[id];
                delete newErrors[id.replace(/([A-Z])/g, "_$1").toLowerCase()]; 
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

        if (!formData.cellPhoneNumber.trim()) {
            newErrors.cellPhoneNumber = 'شماره موبایل الزامی است.';
        }
        if (!formData.province.trim()) {
            newErrors.province = 'استان الزامی است.';
        }
        if (!formData.city.trim()) {
            newErrors.city = 'شهر الزامی است.';
        }
        if (!formData.address.trim()) { 
            newErrors.address = 'آدرس کامل پستی الزامی است.';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setLoading(false); 
            return; 
        }

        const finalPayload = {
            username: registrationData.username,
            email: registrationData.email,
            password: registrationData.password,
            // full_name: registrationData.fullName, 
            national_code: registrationData.nationalCode, 
            birth_date: registrationData.DOB || null, 
            is_designer: registrationData.isDesigner, 

            phone_number: formData.cellPhoneNumber, 
            telephone_number: formData.telephoneNumber || null, 
            province: formData.province,
            city: formData.city,
            zip_code: formData.zipCode || null,
            address: formData.address, 
            education: registrationData.education, 
            job: registrationData.job,
        };

        console.log("Final payload to be sent:", finalPayload);

        try {
            const response = await fetch('http://127.0.0.1:8000/api/auth/register-designer/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(finalPayload),
            });

            let data;
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.indexOf("application/json") !== -1) {
                data = await response.json();
            } else {
                const text = await response.text();
                console.error("UserSignUp - Server responded with non-JSON:", text);
                throw new Error("Server did not return JSON. Response: " + text);
            }

            if (response.ok) {
                setSuccessMessage('ثبت نام با موفقیت انجام شد! در حال انتقال به صفحه ورود...');
                setRegistrationData({}); 
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            } else {
                setErrors(data);
                console.error('Registration failed:', data);
            }
        } catch (error) {
            console.error('Network error or unexpected error during registration:', error);
            setErrors({ general: 'خطایی غیرمنتظره رخ داد. لطفا دوباره تلاش کنید.' });
        } finally {
            setLoading(false);
        }
    };

    if (!registrationData || Object.keys(registrationData).length === 0 || !registrationData.username) {
        return <p className="text-center mt-8">در حال بارگذاری اطلاعات ثبت نام...</p>;
    }

    return ( 
    <>
        
        <Contact />
        <div className='flex justify-center gap-[3.5rem] mt-[1.5rem] mr-[1.5rem] mb-[4.375rem] '>
            <div>
                <h2 className='text-[var(--color-primary-tint-7)] font-bold text-xl !mb-[1.5rem]' style={{fontFamily: 'IRANYekanXVF'}}>فرم ثبت اطلاعات تکمیلی</h2>
                <form onSubmit={ handleSubmit }
                    className='flex justify-center w-[40.5rem] h-auto overflow-hidden mt-[2rem] items-start 
                               border border-[var(--color-custome-gray-5)] flex-col p-[1.5rem] rounded-[1.5rem]'>

                    {successMessage && <p className="text-green-500 text-sm w-full text-center mb-2">{successMessage}</p>}
                    {(errors.general || errors.non_field_errors || errors.username || errors.email || errors.password) && (
                        <p className="text-red-500 text-sm w-full text-center mb-2">
                            {errors.general || errors.non_field_errors}
                        </p>
                    )}
                    
                    <div className='flex flex-col gap-[1.5rem]'>
                        <div className='flex gap-[1.5rem] '>
                            <div className='w-[18rem] h-[4.25rem] flex flex-col gap-[0.25rem]'>
                                <div>
                                    <label htmlFor='cellPhoneNumber' className='text-[var(--color-custome-gray-5)]'>شماره موبایل</label>
                                </div>
                                <div>
                                    <input
                                        className={`border ${errors.phone_number || errors.cellPhoneNumber ? 'border-red-500' : 'border-[var(--color-custome-gray-5)]'} focus:outline-none rounded-[8px] w-full h-[2.5rem] pl-[0.5rem] text-sm`}
                                        type="tel"
                                        id='cellPhoneNumber'
                                        onChange={ handleChange }
                                        value={formData.cellPhoneNumber}
                                        placeholder='۰۹۱۲********'
                                        required
                                    />
                                    {(errors.phone_number || errors.cellPhoneNumber) && <p className="text-red-500 text-xs mt-1">{errors.phone_number || errors.cellPhoneNumber}</p>}
                                </div>
                            </div>
                            <div className='w-[18rem] h-[4.25rem] flex flex-col gap-[0.25rem]'>
                                <div>
                                    <label htmlFor='telephoneNumber' className='text-[var(--color-custome-gray-5)]'>شماره تلفن (همراه با کد شهر)</label>
                                </div>
                                <div>
                                    <input
                                        className={`border ${errors.telephone_number || errors.telephoneNumber ? 'border-red-500' : 'border-[var(--color-custome-gray-5)]'} focus:outline-none rounded-[8px] w-full h-[2.5rem] pl-[0.5rem] text-sm`}
                                        type="tel"
                                        id='telephoneNumber'
                                        onChange={ handleChange }
                                        value={formData.telephoneNumber}
                                        placeholder='۰۲۱۵۵۵۵۵۵۵۵'
                                    />
                                    {(errors.telephone_number || errors.telephoneNumber) && <p className="text-red-500 text-xs mt-1">{errors.telephone_number || errors.telephoneNumber}</p>}
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-[1.5rem]'>
                            <div className='w-[18rem] h-[4.25rem] flex flex-col gap-[0.25rem]'>
                                <div>
                                    <label htmlFor='province' className='text-[var(--color-custome-gray-5)]'>استان</label>
                                </div>
                                <div className="relative">
                                    <select
                                        id="province"
                                        value={formData.province}
                                        onChange={ handleChange }
                                        className={`appearance-none border ${errors.province ? 'border-red-500' : 'border-[var(--color-custome-gray-5)]'} focus:outline-none rounded-[8px] w-full h-[2.5rem] pr-[0.5rem] text-sm`}
                                        required
                                    >
                                        <option value="">انتخاب کنید</option>
                                        <option value="تهران">تهران</option>
                                        <option value="اصفهان">اصفهان</option>
                                    </select>
                                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none w-[1rem] h-[1rem]">
                                        <img src={ arrowDown } alt="arrow-down" />
                                    </div>
                                    {errors.province && <p className="text-red-500 text-xs mt-1">{errors.province}</p>}
                                </div>
                            </div>
                            <div className='w-[18rem] h-[4.25rem] flex flex-col gap-[0.25rem]'>
                                <div>
                                    <label htmlFor='city' className='text-[var(--color-custome-gray-5)]'>شهر</label>
                                </div>
                                <div className="relative">
                                    <select
                                        id="city"
                                        value={formData.city}
                                        onChange={ handleChange }
                                        className={`appearance-none border ${errors.city ? 'border-red-500' : 'border-[var(--color-custome-gray-5)]'} focus:outline-none rounded-[8px] w-full h-[2.5rem] pr-[0.5rem] text-sm`}
                                        required
                                    >
                                        <option value="">انتخاب کنید</option>
                                        <option value="تهران">تهران</option>
                                        <option value="اصفهان">اصفهان</option>
                                    </select>
                                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none w-[1rem] h-[1rem]">
                                        <img src={ arrowDown } alt="arrow-down" />
                                    </div>
                                    {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-[1.5rem]'>
                            <div className='w-[18rem] h-[4.25rem] flex flex-col gap-[0.25rem]'>
                                <div>
                                    <label htmlFor='zipCode' className='text-[var(--color-custome-gray-5)]'>کد پستی (اختیاری)</label>
                                </div>
                                <div>
                                    <input
                                        className={`border ${errors.zip_code || errors.zipCode ? 'border-red-500' : 'border-[var(--color-custome-gray-5)]'} focus:outline-none rounded-[8px] w-full h-[2.5rem] pl-[0.5rem] text-sm`}
                                        type="tel"
                                        id='zipCode'
                                        onChange={ handleChange }
                                        value={formData.zipCode}
                                        placeholder='۹۹۹۹۹۹۹۹۹۹'
                                    />
                                    {(errors.zip_code || errors.zipCode) && <p className="text-red-500 text-xs mt-1">{errors.zip_code || errors.zipCode}</p>}
                                </div>
                            </div>
                        </div>
                        <div className='w-full h-[4.25rem] flex flex-col gap-[0.25rem]'>
                            <div>
                                <label htmlFor='address' className='text-[var(--color-custome-gray-5)]'>آدرس کامل پستی (میتوانید از نقشه استفاه کنید)</label>
                            </div>
                            <div>
                                <textarea
                                    className={`border ${errors.address ? 'border-red-500' : 'border-[var(--color-custome-gray-5)]'} focus:outline-none rounded-[8px] w-full h-[5rem] pr-[0.5rem] text-sm p-2 text-[var(--color-custome-gray-9)]`}
                                    id='address' // نام فیلد در formData و id در input یکسان شد
                                    onChange={ handleChange }
                                    value={formData.address}
                                    placeholder='تهران، خیابان ولیعصر، منطقه ۱۲، بلوار کاوه، کوچه ابوذر، پلاک ۱۵'
                                    dir='rtl'
                                    required
                                ></textarea>
                                {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                            </div>
                        </div>
                    </div>
                    
                    <img src={ map } alt="map" className='w-[37.5rem] h-[18.75rem] mt-[2.375rem] mb-[2.5rem]'/>
                    <div className="w-full flex justify-end pl-[1.5rem]" style={{ marginRight: "1.5rem" }}>
                        <button
                            type='submit'
                            disabled={loading} 
                            className='w-[11.5rem] h-[3rem] rounded-[8px] text-white opacity-100 hover:opacity-90 transition-opacity duration-300'
                            style={{ backgroundColor: "var(--color-primary)"}}
                        >
                            {loading ? 'در حال ارسال...' : 'ثبت اطلاعات'}
                        </button>
                    </div>

                </form>
            </div>
            <img src={ userSignUpImage } alt="user-signup-image" className='self-end w-[32.5rem] h-[32rem] mr-[2rem]' />
        </div>

        <Footer />
    </>
    );
}
 
export default UserSignUp;
