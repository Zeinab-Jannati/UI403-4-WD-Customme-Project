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
            <Navbar />
            <MainMenu />
            <div className='flex justify-center mt-[2rem] overflow-hidden'>
                <div className='flex gap-[1.5625rem]'>
                    <ProfileSidebar/>
                    <div className='w-[50.5rem] h-[37.625rem] rounded-[16px] border border-black mt-[3.1rem]'>
                        <div className='m-[1rem]'>
                            <h2 className='font-bold text-2xl p-[1.5rem]'>اطلاعات حساب کاربری</h2>
                            <div className="flex gap-[2.5rem] p-[1.5rem] pt-0 pb-[0.25rem]">
                                <a href="#" className="">اطلاعات کاربری</a>
                                <a href="#" className="">اطلاعات تماس</a>
                            </div>
                            <hr />
                            <form action="submit" className='flex flex-wrap justify-center overflow-hidden mt-[2rem] items-start gap-y-[1.5rem] '>
                                <div>
                                    <div className='flex gap-[1.5rem] '>
                                        <div className='w-[18rem] h-[4.25rem]'>
                                            <div>
                                                <label for='phone-number'>نام و نام خانوادگی</label>
                                            </div>
                                            <div>
                                                <input className='border rounded-[8px] w-full h-[2.5rem] mt-[0.25rem] pr-[0.5rem]' type="tel" id='phone-number' value='نگار زمانی' dir='rtl'/>
                                            </div>
                                        </div>
                                        <div className='w-[18rem] h-[4.25rem]'>
                                            <div>
                                                <label for='phone-number'>کد ملی</label>
                                            </div>
                                            <div>
                                                <input className='border rounded-[8px] w-full h-[2.5rem] mt-[0.25rem] pl-[0.5rem]' type="tel" id='phone-number' value='۹۹۹۹۹۹۹۹۹۹'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex gap-[1.5rem] my-[1.5rem]'>
                                        <div className='w-[18rem] h-[4.25rem]'>
                                            <div>
                                                <label for='phone-number'>تحصیلات (اختیاری)</label>
                                            </div>
                                        
                                            <select name="" id="" className='w-full rounded-[8px] border pr-[0.5rem] mt-[0.25rem]'>
                                                <option value="پیشفرض">انتخاب کنید</option>
                                                <option value="کارشناسی">کارشناسی</option>
                                            </select>
                                        </div>
                                        <div className='w-[18rem] h-[4.25rem]'>
                                            <div>
                                                <label for='phone-number'>شغل (اختیاری)</label>
                                            </div>
                                            <select name="" id="" className='w-full rounded-[8px] border pr-[0.5rem] mt-[0.25rem]'>
                                                <option value="پیشفرض">انتخاب کنید</option>
                                                <option value="مهندس کامپیوتر">مهندس کامپیوتر</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='flex gap-[1.5rem]'>
                                        <div className='flex gap-[1.5rem]'>
                                            <div className='w-[18rem] h-[4.25rem]'>
                                                <div>
                                                    <label for='phone-number'>تاریخ تولد</label>
                                                </div>
                                                <div>
                                                    <input className='border rounded-[8px] w-full h-[2.5rem] mt-[0.25rem] pl-[0.5rem]' type="tel" id='phone-number' value='۱۳۷۰/۰۱/۰۱'/>
                                                </div>
                                            </div>
                                            <div className='w-[18rem] h-[4.25rem]'>
                                                <div>
                                                    <label for='phone-number'>آدرس ایمیل</label>
                                                </div>
                                                <div>
                                                    <input className='border rounded-[8px] w-full h-[2.5rem] mt-[0.25rem] pl-[0.5rem]' type="email" id='phone-number' value='n.zamani@gmail.com' dir='ltr'/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex gap-[1.5rem]'>
                                        <div className='flex gap-[1.5rem]'>
                                            <div className='w-[18rem] h-[4.25rem]'>
                                                <div>
                                                    <label for='password-recovery'>کلمه عبور جدید</label>
                                                </div>
                                                <div>
                                                    <input className='border rounded-[8px] w-full h-[2.5rem] mt-[0.25rem] pl-[0.5rem]' type="password" id='password-recovery'/>
                                                </div>
                                            </div>
                                            <div className='w-[18rem] h-[4.25rem]'>
                                                <div>
                                                    <label for='password-recovery-confirmation'>تکرار کلمه عبور جدید</label>
                                                </div>
                                                <div>
                                                    <input className='border rounded-[8px] w-full h-[2.5rem] mt-[0.25rem] pl-[0.5rem]' type="password" id='password-recovery-confirmation' dir='ltr'/>
                                                </div>
                                            </div>
                                        </div>
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