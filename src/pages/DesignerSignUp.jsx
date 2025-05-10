import '../index.css'
import '../styles/base.css'
import '../styles/components.nav.css'
import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import DesignerSignUpPic from '../assets/images/deignersignup.png'

import arrowDown from '../assets/icons/arrow-down.svg'
import arrowLeftWhite from '../assets/icons/arrow-left-white.svg'
import calendar from '../assets/icons/calendar.svg'

const DesignerSignUp = () => {
    return ( 
        <>
            <Navbar />
            <Contact />
            <main className='flex justify-center'>
                {/* <form className='w-[40.5rem] h-[30.0625]' action="submit">
                    <input type="text" className='border border-black'/>
                </form> */}
                <div>
                    <h2 className='text-[var(--color-primary-tint-7)] font-bold text-xl !mb-[1.5rem]' style={{fontFamily: 'IRANYekanXVF'}}>فرم ثبت اطلاعات</h2>
                    <form action="submit"
                        className=' flex flex-wrap justify-center items-start p-[1.5rem]
                                    w-[40.5rem] h-auto overflow-hidden mb-[3.5625rem] gap-y-[1.5rem] 
                                    border border-[var(--color-custome-gray-4)] rounded-[0.5rem]'>
                        <div className='flex flex-col gap-[1.5rem]'>
                            <div className='flex gap-[1.5rem]'>
                                <div className='w-[18rem] h-[4.25rem]'>
                                    <div>
                                        <label for='phone-number' className='text-[var(--color-custome-gray-5)]'>نام و نام خانوادگی</label>
                                    </div>
                                    <div>
                                        <input className='border border-[var(--color-custome-gray-5)] focus:outline-none rounded-[8px] w-full h-[2.5rem] mt-[0.25rem] pr-[0.5rem]' type="tel" id='phone-number' value='نگار زمانی' dir='rtl'/>
                                    </div>
                                </div>
                                <div className='w-[18rem] h-[4.25rem]'>
                                    <div>
                                        <label for='phone-number' className='text-[var(--color-custome-gray-5)]'>کد ملی</label>
                                    </div>
                                    <div>
                                        <input className='border border-[var(--color-custome-gray-5)] focus:outline-none rounded-[8px] w-full h-[2.5rem] mt-[0.25rem] pl-[0.5rem]' type="tel" id='phone-number' value='۹۹۹۹۹۹۹۹۹۹'/>
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-[1.5rem]'>
                                <div className='w-[18rem] h-[4.25rem]'>
                                    <div>
                                        <label for='phone-number' className='text-[var(--color-custome-gray-5)]'>تحصیلات (اختیاری)</label>
                                    </div>

                                    <div className='relative'>
                                        <select name="" id="" className='appearance-none w-full h-[2.5rem] focus:outline-none rounded-[8px] border border-[var(--color-custome-gray-5)] pr-[0.5rem] mt-[0.25rem]'>
                                            <option value="پیشفرض">انتخاب کنید</option>
                                            <option value="کارشناسی">کارشناسی</option>
                                        </select>
                                        <div class="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none w-[1rem] h-[1rem]">
                                            <img src={ arrowDown } alt="arrow-down" />
                                        </div>
                                    </div>
                                </div>
                                <div className='w-[18rem] h-[4.25rem]'>
                                    <div>
                                        <label for='phone-number' className='text-[var(--color-custome-gray-5)]'>شغل (اختیاری)</label>
                                    </div>
                                    <div className='relative'>
                                        <select name="" id="" className='appearance-none focus:outline-none w-full h-[2.5rem] rounded-[8px] border border-[var(--color-custome-gray-5)] pr-[0.5rem] mt-[0.25rem]'>
                                            <option value="پیشفرض">انتخاب کنید</option>
                                            <option value="مهندس کامپیوتر">مهندس کامپیوتر</option>
                                        </select>
                                        <div class="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none w-[1rem] h-[1rem]">
                                            <img src={ arrowDown } alt="arrow-down" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-[1.5rem]'>
                                <div className='w-[18rem] h-[4.25rem]'>
                                    <div>
                                        <label for='phone-number' className='text-[var(--color-custome-gray-5)]'>آدرس ایمیل</label>
                                    </div>
                                    <div>
                                        <input className='border border-[var(--color-custome-gray-5)] focus:outline-none rounded-[8px] w-full h-[2.5rem] mt-[0.25rem] pl-[0.5rem]' type="email" id='phone-number' value='n.zamani@gmail.com' dir='ltr'/>
                                    </div>
                                </div>
                                <div className='w-[18rem] h-[4.25rem]'>
                                    <div>
                                        <label for='password' className='text-[var(--color-custome-gray-5)]'>کلمه عبور</label>
                                    </div>
                                    <div>
                                        <input className='border border-[var(--color-custome-gray-5)] focus:outline-none rounded-[8px] w-full h-[2.5rem] mt-[0.25rem] pl-[0.5rem]' type="passord" id='password' value='************' dir='ltr'/>
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-[1.5rem]'>
                                <div className='w-[18rem] h-[4.25rem]'>
                                    <div>
                                        <label for='DOB' className='text-[var(--color-custome-gray-5)]'>تاریخ تولد</label>
                                    </div>
                                    <span className='relative flex'>
                                        <input className='border border-[var(--color-custome-gray-5)] focus:outline-none rounded-[8px] w-full h-[2.5rem] mt-[0.25rem] pl-[0.5rem]' type="tel" id='DOB' value='۱۳۷۰/۰۱/۰۱'/>
                                        <img src={ calendar } alt="calendar" className='absolute right-[0.75rem] top-[1rem] !w-[1rem] !h-[1rem]'/>
                                    </span>
                                </div>
                            </div>
                            
                        </div>
                        <div className='w-full flex justify-end'>
                            <Link>
                                <span className='relative flex justify-center items-center gap-[0.25rem] bg-[var(--color-primary)] text-white w-[11.5rem] h-[3rem] rounded-[0.5rem]'>
                                    <button className=''>
                                        مرحله بعدی
                                    </button>
                                    <img src={ arrowLeftWhite } alt="arrow-left-white absolute left-0" style={{ width: '1.5rem', height: '1.5rem'}} />
                                </span>
                            </Link>
                        </div>
                    </form>
                </div>
                
                <div className='flex items-center w-[32.5rem] h-[30rem]'>
                    <img className='object-cover w-full h-[21.125rem]' src={ DesignerSignUpPic } alt="designer-sign-up-pic" />
                </div>
            </main>
            <Footer />
        </>
    );
}
 
export default DesignerSignUp;