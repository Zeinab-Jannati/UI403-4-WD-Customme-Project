import '../index.css'
import '../styles/base.css'
import '../styles/components.nav.css'
import { Link, useNavigate } from 'react-router-dom'
import React, { useState, useContext } from 'react';
import { RegistrationContext } from './RegistrationContext';

import Contact from '../components/Contact'
import Footer from '../components/Footer'
import DesignerSignUpPic from '../assets/images/deignersignup.png'

import arrowDown from '../assets/icons/arrow-down.svg'
import arrowLeftWhite from '../assets/icons/arrow-left-white.svg'
import calendar from '../assets/icons/calendar.svg'

const DesignerSignUp = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        DOB: '',
        //fullName: '', 
        nationalCode: '', 
        isDesigner: true, 
        education: '', 
        job: '', 
    });
    const navigate = useNavigate();
    const { updateRegistrationData } = useContext(RegistrationContext);

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(false); 
    const validatePassword = (password) => {
        const passwordErrors = [];
        if (password.length < 8) {
            passwordErrors.push('رمز عبور باید حداقل ۸ کاراکتر باشد.');
        }
        if (!/[A-Z]/.test(password)) {
            passwordErrors.push('رمز عبور باید حداقل شامل یک حرف بزرگ باشد.');
        }
        if (!/[a-z]/.test(password)) {
            passwordErrors.push('رمز عبور باید حداقل شامل یک حرف کوچک باشد.');
        }
        if (!/[0-9]/.test(password)) {
            passwordErrors.push('رمز عبور باید حداقل شامل یک عدد باشد.');
        }
        if (!/[!@#$%^&*]/.test(password)) {
            passwordErrors.push('رمز عبور باید حداقل شامل یک کاراکتر خاص (!@#$%^&*) باشد.');
        }
        return passwordErrors;
    };

    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [id]: type === 'checkbox' ? checked : value,
        });

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

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true); 
        setErrors({}); 
        setSuccessMessage(''); 

        const newErrors = {};

        if (!formData.username.trim()) {
            newErrors.username = 'نام و نام خانوادگی الزامی است.';
        }
        if (!formData.nationalCode.trim()) {
            newErrors.nationalCode = 'کد ملی الزامی است.';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'آدرس ایمیل الزامی است.';
        }
        if (!formData.password.trim()) {
            newErrors.password = ['کلمه عبور الزامی است.'];
        }

        const passwordValidationErrors = validatePassword(formData.password);
        if (passwordValidationErrors.length > 0) {
            newErrors.password = [...(newErrors.password || []), ...passwordValidationErrors];
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setLoading(false); 
            return;
        }

        updateRegistrationData(formData);
        localStorage.setItem('registrationFormData', JSON.stringify(formData)); 
        navigate('/usersignup');
        setLoading(false);
    };


    return (
        <>
            <Contact />
            <main className='flex justify-center'>
                {/* <form className='w-[40.5rem] h-[30.0625]' action="submit">
                    <input type="text" className='border border-black'/>
                </form> */}
                <div>
                    <h2 className='text-[var(--color-primary-tint-7)] font-bold text-xl !mb-[1.5rem]' style={{ fontFamily: 'IRANYekanXVF' }}>فرم ثبت اطلاعات</h2>
                    <form onSubmit={handleSubmit}
                        className=' flex flex-wrap justify-center items-start p-[1.5rem]
                                       w-[40.5rem] h-auto overflow-hidden mb-[3.5625rem] gap-y-[1.5rem]
                                       border border-[var(--color-custome-gray-4)] rounded-[0.5rem]'>
                        {successMessage && <p className="text-green-500 text-sm w-full text-center mb-2">{successMessage}</p>}
                        {(errors.general || errors.non_field_errors) && (
                            <p className="text-red-500 text-sm w-full text-center mb-2">
                                {errors.general || errors.non_field_errors}
                            </p>
                        )}

                        <div className='flex flex-col gap-[1.5rem]'>
                            <div className='flex gap-[1.5rem]'>
                                <div className='w-[18rem] h-[4.25rem] flex flex-col gap-[0.25rem]'>
                                    <div>
                                        <label htmlFor='username' className='text-[var(--color-custome-gray-5)]'>نام و نام خانوادگی</label>
                                    </div>
                                    <div>
                                        <input className='border border-[var(--color-custome-gray-5)] focus:outline-none rounded-[8px] w-full h-[2.5rem] mt-[0.25rem] pr-[0.5rem] text-sm' type="text" id='username' placeholder='نگار زمانی' dir='rtl' value={formData.username} onChange={handleChange} />
                                        {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}

                                    </div>
                                </div>
                                <div className='w-[18rem] h-[4.25rem] flex flex-col gap-[0.25rem]'>
                                    <div>
                                        <label htmlFor='nationalCode' className='text-[var(--color-custome-gray-5)]'>کد ملی</label>
                                    </div>
                                    <div>
                                        <input className='border border-[var(--color-custome-gray-5)] focus:outline-none rounded-[8px] w-full h-[2.5rem] mt-[0.25rem] pl-[0.5rem] text-sm' type="tel" id='nationalCode' placeholder='۹۹۹۹۹۹۹۹۹۹' value={formData.nationalCode} onChange={handleChange} />
                                        {errors.nationalCode && <p className="text-red-500 text-xs mt-1">{errors.nationalCode}</p>}
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-[1.5rem]'>
                                <div className='w-[18rem] h-[4.25rem] flex flex-col gap-[0.25rem]'>
                                    <div>
                                        <label htmlFor='education' className='text-[var(--color-custome-gray-5)]'>تحصیلات (اختیاری)</label>
                                    </div>

                                    <div className='relative'>
                                        <select id="education" value={formData.education} onChange={handleChange} className='appearance-none w-full h-[2.5rem] focus:outline-none rounded-[8px] border border-[var(--color-custome-gray-5)] pr-[0.5rem] mt-[0.25rem] text-sm'>
                                            <option value="">انتخاب کنید</option> 
                                            <option value="کارشناسی">کارشناسی</option>
                                            <option value="کارشناسی ارشد">کارشناسی ارشد</option> 
                                            <option value="دکترا">دکترا</option>
                                        </select>
                                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none w-[1rem] h-[1rem]">
                                            <img src={arrowDown} alt="arrow-down" />
                                        </div>
                                        {errors.education && <p className="text-red-500 text-xs mt-1">{errors.education}</p>}
                                    </div>
                                </div>
                                <div className='w-[18rem] h-[4.25rem] flex flex-col gap-[0.25rem]'>
                                    <div>
                                        <label htmlFor='job' className='text-[var(--color-custome-gray-5)]'>شغل (اختیاری)</label>
                                    </div>
                                    <div className='relative'>
                                        <select id="job" value={formData.job} onChange={handleChange} className='appearance-none focus:outline-none w-full h-[2.5rem] rounded-[8px] border border-[var(--color-custome-gray-5)] pr-[0.5rem] mt-[0.25rem] text-sm'>
                                            <option value="">انتخاب کنید</option>
                                            <option value="مهندس کامپیوتر">مهندس کامپیوتر</option>
                                            <option value="معمار">معمار</option>
                                            <option value="طراح گرافیک">طراح گرافیک</option>
                                        </select>
                                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none w-[1rem] h-[1rem]">
                                            <img src={arrowDown} alt="arrow-down" />
                                        </div>
                                        {errors.job && <p className="text-red-500 text-xs mt-1">{errors.job}</p>}
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-[1.5rem]'>
                                <div className='w-[18rem] h-[4.25rem] flex flex-col gap-[0.25rem]'>
                                    <div>
                                        <label htmlFor='email' className='text-[var(--color-custome-gray-5)]'>آدرس ایمیل</label>
                                    </div>
                                    <div>
                                        <input className='border border-[var(--color-custome-gray-5)] focus:outline-none rounded-[8px] w-full h-[2.5rem] mt-[0.25rem] pl-[0.5rem] text-sm' type="email" id='email' placeholder='n.zamani@gmail.com' dir='ltr' value={formData.email} onChange={handleChange} />
                                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                    </div>
                                </div>
                                <div className='w-[18rem] h-[4.25rem] flex flex-col gap-[0.25rem]'>
                                    <div>
                                        <label htmlFor='password' className='text-[var(--color-custome-gray-5)]'>کلمه عبور</label>
                                    </div>
                                    <div>
                                        <input className='border border-[var(--color-custome-gray-5)] focus:outline-none rounded-[8px] w-full h-[2.5rem] mt-[0.25rem] pl-[0.5rem] text-sm' type="password" id='password' placeholder='************' dir='ltr' value={formData.password} onChange={handleChange} />
                                        {errors.password && Array.isArray(errors.password) ? (
                                            errors.password.map((err, index) => (
                                                <p key={index} className="text-red-500 text-xs mt-1">{err}</p>
                                            ))
                                        ) : (
                                            errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-[1.5rem]'>
                                <div className='w-[18rem] h-[4.25rem] flex flex-col gap-[0.25rem]'>
                                    <div>
                                        <label htmlFor='DOB' className='text-[var(--color-custome-gray-5)]'>تاریخ تولد</label>
                                    </div>
                                    <span className='relative flex'>
                                        <input className='border border-[var(--color-custome-gray-5)] focus:outline-none rounded-[8px] w-full h-[2.5rem] mt-[0.25rem] pl-[0.5rem] text-sm' type="text" id='DOB' placeholder='۱۳۷۰/۰۱/۰۱' value={formData.DOB} onChange={handleChange} /> {/* type به text برگشت تا با placeholder فارسی شما سازگار باشد. اگر می خواهید انتخابگر تاریخ داشته باشید، type را date بگذارید و placeholder را حذف کنید. */}
                                        <img src={calendar} alt="calendar" className='absolute right-[0.75rem] top-[1rem] !w-[1rem] !h-[1rem]' />
                                    </span>
                                </div>
                            </div>

                        </div>
                        <div className='w-full flex justify-end'>
                            
                                <span className='relative flex justify-center items-center gap-[0.25rem] bg-[var(--color-primary)] text-white w-[11.5rem] h-[3rem] rounded-[0.5rem]'>
                                    <button type="submit" className='' disabled={loading}> 
                                        {loading ? 'در حال بررسی...' : 'مرحله بعدی'}
                                    </button>
                                    <img src={arrowLeftWhite} alt="arrow-left-white absolute left-0" style={{ width: '1.5rem', height: '1.5rem' }} />
                                </span>
                            
                        </div>
                    </form>
                </div>

                <div className='flex items-center w-[32.5rem] h-[30rem]'>
                    <img className='object-cover w-full h-[21.125rem]' src={DesignerSignUpPic} alt="designer-sign-up-pic" />
                </div>
            </main>
            <Footer classname="hidden sm:block" />
        </>
    );
}

export default DesignerSignUp;