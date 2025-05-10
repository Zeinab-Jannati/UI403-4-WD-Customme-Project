import '../index.css'
import '../styles/base.css'
import '../styles/components.nav.css'

import Navbar from '../components/Navbar'
import Contact from '../components/Contact'

import map from '../assets/images/map.png'
import Footer from '../components/Footer'

import userSignUpImage from '../assets/images/user-sign-up-image.svg'
import arrowDown from '../assets/icons/arrow-down.svg'

const UserSignUp = () => {
    return ( 
    <>
        <Navbar />
        
        <Contact />
        {/* todo: fix the form! */}
        <div className='flex justify-center gap-[3.5rem] mt-[1.5rem] mr-[1.5rem] mb-[4.375rem] '>
            <div>
                <h2 className='text-[var(--color-primary-tint-7)] font-bold text-xl !mb-[1.5rem]' style={{fontFamily: 'IRANYekanXVF'}}>فرم ثبت اطلاعات</h2>
                {/* h-[50.75rem] */}
                <form action="submit" 
                    className='flex justify-center w-[40.5rem] h-auto overflow-hidden mt-[2rem] items-start 
                                border border-[var(--color-custome-gray-5)] flex-col p-[1.5rem] rounded-[1.5rem]'>
                    <div className='flex flex-col gap-[1.5rem]'>
                        <div className='flex gap-[1.5rem] '>
                            <div className='w-[18rem] h-[4.25rem] flex flex-col gap-[0.25rem]'>
                                <div>
                                    <label for='cell-phone-number' className='text-[var(--color-custome-gray-5)]'>شماره موبایل</label>
                                </div>
                                <div>
                                    <input className='border border-[var(--color-custome-gray-5)] focus:outline-none rounded-[8px] w-full h-[2.5rem] pl-[0.5rem] text-sm' type="tel" id='cell-phone-number' value='۰۹۱۲********'/>
                                </div>
                            </div>
                            <div className='w-[18rem] h-[4.25rem] flex flex-col gap-[0.25rem]'>
                                <div>
                                    <label for='telephone-number' className='text-[var(--color-custome-gray-5)]'>شماره تلفن (همراه با کد شهر)</label>
                                </div>
                                <div>
                                    <input className='border border-[var(--color-custome-gray-5)] focus:outline-none rounded-[8px] w-full h-[2.5rem] pl-[0.5rem] text-sm' type="tel" id='telephone-number' value='۰۲۱۵۵۵۵۵۵۵۵'/>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-[1.5rem]'>
                            <div className='w-[18rem] h-[4.25rem] flex flex-col gap-[0.25rem]'>
                                <div>
                                    <label for='province' className='text-[var(--color-custome-gray-5)]'>استان</label>
                                </div>
                                <div className="relative">
                                    <select name="" id="province" className='appearance-none border border-[var(--color-custome-gray-5)] focus:outline-none rounded-[8px] w-full h-[2.5rem] pr-[0.5rem] text-sm'>
                                        <option value="تهران">تهران</option>
                                        <option value="اصفهان">اصفهان</option>
                                    </select>
                                    <div class="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none w-[1rem] h-[1rem]">
                                        <img src={ arrowDown } alt="arrow-down" />
                                    </div>
                                </div>
                            </div>
                            <div className='w-[18rem] h-[4.25rem] flex flex-col gap-[0.25rem]'>
                                <div>
                                    <label for='city' className='text-[var(--color-custome-gray-5)]'>شهر</label>
                                </div>
                                <div className="relative">
                                    <select name="" id="city" className='appearance-none border border-[var(--color-custome-gray-5)] focus:outline-none rounded-[8px] w-full h-[2.5rem] pr-[0.5rem] text-sm'>
                                        <option value="تهران">تهران</option>
                                        <option value="اصفهان">اصفهان</option>
                                    </select>
                                    <div class="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none w-[1rem] h-[1rem]">
                                        <img src={ arrowDown } alt="arrow-down" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-[1.5rem]'>
                            <div className='w-[18rem] h-[4.25rem] flex flex-col gap-[0.25rem]'>
                                <div>
                                    <label for='zip-code' className='text-[var(--color-custome-gray-5)]'>کد پستی</label>
                                </div>
                                <div>
                                    <input className='border border-[var(--color-custome-gray-5)] focus:outline-none rounded-[8px] w-full h-[2.5rem] pl-[0.5rem] text-sm' type="tel" id='zip-code' value='۹۹۹۹۹۹۹۹۹۹'/>
                                </div>
                            </div>
                        </div>
                        <div className='w-full h-[4.25rem] flex flex-col gap-[0.25rem]'>
                            <div>
                                <label for='phone-number' className='text-[var(--color-custome-gray-5)]'>آدرس  کامل  پستی (میتوانید از نقشه استفاه کنید)</label>
                            </div>
                            <div>
                                <input className='border border-[var(--color-custome-gray-5)] focus:outline-none rounded-[8px] w-full h-[2.5rem] pr-[0.5rem] text-sm text-[var(--color-custome-gray-9)]' type="tel" id='phone-number' value='تهران، خیابان ولیعصر، منطقه ۱۲، بلوار کاوه، کوچه ابوذر، پلاک ۱۵' dir='rtl'/>
                            </div>
                        </div>
                    </div>
                    
                    
                    <img src={ map } alt="map" className='w-[37.5rem] h-[18.75rem] mt-[2.375rem] mb-[2.5rem]'/>
                    <div className="w-full flex justify-end pl-[1.5rem]" style={{ marginRight: "1.5rem" }}>
                        <button className='w-[11.5rem] h-[3rem] rounded-[8px] text-white' style={{ backgroundColor: "var(--color-primary)"}}>ثبت اطلاعات</button>
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