import '../index.css'
import '../styles/base.css'
import '../styles/components.nav.css'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MainMenu from '../components/MainMenu'
import ProfileSidebar from '../components/ProfileSidebar'


const AccountInfo = () => {
    return ( 
        <>
            <MainMenu />
            <div className='flex justify-center mt-[2rem] overflow-hidden'>
                <div className='flex gap-[1.5625rem]'>
                    <ProfileSidebar/>
                    <div className='w-[50.5rem] h-[37.625rem] rounded-[16px] border border-[var(--color-custome-gray-3)] mt-[3.1rem] m-[1.5rem]'>
                        <div className=''>
                            <h2 className='font-bold text-2xl p-[1.5rem]'>اطلاعات حساب کاربری</h2>
                            <div className="flex gap-[2.5rem] p-[1.5rem] pt-0 pb-[0.25rem]">
                                <a href="#" className="">اطلاعات کاربری</a>
                                <a href="#" className="">اطلاعات تماس</a>
                            </div>
                            <hr className='border-[var(--color-custome-gray-3)]'/>
                            <form action="submit" className='flex justify-center overflow-hidden mt-[2rem] items-start'>
                                <div className='flex flex-col gap-[2rem]'>
                                    <div className='flex gap-[1.5rem] '>
                                        <div className='w-[18rem] h-[4.25rem] flex flex-col gap-[0.25rem]'>
                                            <div>
                                                <label for='phone-number' className='text-[var(--color-custome-gray-5)]'>نام و نام خانوادگی</label>
                                            </div>
                                            <div>
                                                <input className='border border-[var(--color-custome-gray-5)] focus:outline-none rounded-[8px] w-full h-[2.5rem] pl-[0.5rem] text-sm' type="tel" id='phone-number' value='نگار زمانی' dir='rtl'/>
                                            </div>
                                        </div>
                                        <div className='w-[18rem] h-[4.25rem] flex flex-col gap-[0.25rem]'>
                                            <div>
                                                <label for='phone-number' className='text-[var(--color-custome-gray-5)]'>کد ملی</label>
                                            </div>
                                            <div>
                                                <input className='border border-[var(--color-custome-gray-5)] focus:outline-none rounded-[8px] w-full h-[2.5rem] pl-[0.5rem] text-sm' type="tel" id='phone-number' value='۹۹۹۹۹۹۹۹۹۹'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex gap-[1.5rem]'>
                                        <div className='w-[18rem] h-[4.25rem] flex flex-col gap-[0.25rem]'>
                                            <div>
                                                <label for='phone-number' className='text-[var(--color-custome-gray-5)]'>تحصیلات (اختیاری)</label>
                                            </div>
                                        
                                            <select name="" id="" className='border border-[var(--color-custome-gray-5)] focus:outline-none rounded-[8px] w-full h-[2.5rem] pl-[0.5rem] text-sm'>
                                                <option value="پیشفرض">انتخاب کنید</option>
                                                <option value="کارشناسی">کارشناسی</option>
                                            </select>
                                        </div>
                                        <div className='w-[18rem] h-[4.25rem] flex flex-col gap-[0.25rem]'>
                                            <div>
                                                <label for='phone-number' className='text-[var(--color-custome-gray-5)]'>شغل (اختیاری)</label>
                                            </div>
                                            <select name="" id="" className='border border-[var(--color-custome-gray-5)] focus:outline-none rounded-[8px] w-full h-[2.5rem] pl-[0.5rem] text-sm'>
                                                <option value="پیشفرض">انتخاب کنید</option>
                                                <option value="مهندس کامپیوتر">مهندس کامپیوتر</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='flex gap-[1.5rem]'>
                                        <div className='w-[18rem] h-[4.25rem] flex flex-col gap-[0.25rem]'>
                                            <div>
                                                <label for='phone-number' className='text-[var(--color-custome-gray-5)]'>تاریخ تولد</label>
                                            </div>
                                            <div>
                                                <input className='border border-[var(--color-custome-gray-5)] focus:outline-none rounded-[8px] w-full h-[2.5rem] pl-[0.5rem] text-sm' type="tel" id='phone-number' value='۱۳۷۰/۰۱/۰۱'/>
                                            </div>
                                        </div>
                                        <div className='w-[18rem] h-[4.25rem] flex flex-col gap-[0.25rem]'>
                                            <div>
                                                <label for='phone-number' className='text-[var(--color-custome-gray-5)]'>آدرس ایمیل</label>
                                            </div>
                                            <div>
                                                <input className='border border-[var(--color-custome-gray-5)] focus:outline-none rounded-[8px] w-full h-[2.5rem] pl-[0.5rem] text-sm' type="email" id='phone-number' value='n.zamani@gmail.com' dir='ltr'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex gap-[1.5rem]'>
                                        <div className='w-[18rem] h-[4.25rem] flex flex-col gap-[0.25rem]'>
                                            <div>
                                                <label for='password-recovery' className='text-[var(--color-custome-gray-5)]'>کلمه عبور جدید</label>
                                            </div>
                                            <div>
                                                <input className='border border-[var(--color-custome-gray-5)] focus:outline-none rounded-[8px] w-full h-[2.5rem] pl-[0.5rem] text-sm' type="password" id='password-recovery'/>
                                            </div>
                                        </div>
                                        <div className='w-[18rem] h-[4.25rem] flex flex-col gap-[0.25rem]'>
                                            <div>
                                                <label for='password-recovery-confirmation' className='text-[var(--color-custome-gray-5)]'>تکرار کلمه عبور جدید</label>
                                            </div>
                                            <div>
                                                <input className='border border-[var(--color-custome-gray-5)] focus:outline-none rounded-[8px] w-full h-[2.5rem] pl-[0.5rem] text-sm' type="password" id='password-recovery-confirmation' dir='ltr'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex justify-end'>
                                        <button className='w-[11.5rem] h-[2.5rem] bg-[var(--color-primary)] text-white rounded-[8px] text-base'>ثبت اطلاعات</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
     );
}
 
export default AccountInfo;