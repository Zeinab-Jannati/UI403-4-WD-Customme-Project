import '../index.css'
import '../styles/base.css'
import '../styles/components.nav.css'

import Navbar from '../components/Navbar'
import Contact from '../components/Contact'

import map from '../assets/images/map.png'
import Footer from '../components/Footer'

import userSignUpImage from '../assets/images/user-sign-up-image.svg'

const UserSignUp = () => {
    return ( 
    <>
        <Navbar />
        
        <Contact />
        {/* todo: fix the form! */}
        <div className='flex justify-center gap-[3.5rem] mt-[1.5rem] mr-[1.5rem] mb-[4.375rem] '>
            <div className=' border flex flex-col p-[1rem] rounded-[24px]'  style={{ borderColor: "var(--color-custome-gray-4:)"}}>
                <h3 className='font-bold' style={{ marginRight: "1.5rem" }}>فرم ثبت اطلاعات</h3>
                {/* h-[50.75rem] */}
                <form action="submit" className='flex flex-wrap justify-center w-[40.5rem] h-auto overflow-hidden mt-[2rem] items-start gap-y-[1.5rem] '>
                    <div>
                        <div className='flex gap-[1.5rem] '>
                            <div className='w-[18rem] h-[4.25rem]'>
                                <div>
                                    <label for='phone-number'>شماره موبایل</label>
                                </div>
                                <div>
                                    <input className='border rounded-[8px] w-full h-[2.5rem] mt-[0.25rem] text-center' type="tel" id='phone-number' value='۰۹۱۲********'/>
                                </div>
                            </div>
                            <div className='w-[18rem] h-[4.25rem]'>
                                <div>
                                    <label for='phone-number'>شماره تلفن (همراه با کد شهر)</label>
                                </div>
                                <div>
                                    <input className='border rounded-[8px] w-full h-[2.5rem] mt-[0.25rem] pl-[0.5rem]' type="tel" id='phone-number' value='۰۲۱۵۵۵۵۵۵۵۵'/>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-[1.5rem] my-[1.5rem]'>
                            <div className='w-[18rem] h-[4.25rem]'>
                                <div>
                                    <label for='phone-number'>استان</label>
                                </div>
                                {/* think about it */}
                                {/* doens't change the size of the option tag */}
                                <select name="" id="" className='w-full rounded-[8px] border pr-[0.5rem] mt-[0.25rem]'>
                                    <option value="تهران">تهران</option>
                                    <option value="اصفهان">اصفهان</option>
                                </select>
                            </div>
                            <div className='w-[18rem] h-[4.25rem]'>
                                <div>
                                    <label for='phone-number'>شهر</label>
                                </div>
                                {/* think about it */}
                                <select name="" id="" className='w-full rounded-[8px] border pr-[0.5rem] mt-[0.25rem]'>
                                    <option value="تهران">تهران</option>
                                    <option value="اصفهان">اصفهان</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex gap-[1.5rem]'>
                            <div className='w-[18rem] h-[4.25rem]'>
                                <div>
                                    <label for='phone-number'>کد پستی</label>
                                </div>
                                <div>
                                    <input className='border rounded-[8px] w-full h-[2.5rem] mt-[0.25rem] pl-[0.5rem]' type="tel" id='phone-number' value='۹۹۹۹۹۹۹۹۹۹'/>
                                </div>
                            </div>
                        </div>
                        <div className='w-full h-[4.25rem] mt-[1.5rem]'>
                            <div>
                                <label for='phone-number'>آدرس  کامل  پستی (میتوانید از نقشه استفاه کنید)</label>
                            </div>
                            <div>
                                <input className='border rounded-[8px] w-full h-[2.5rem] mt-[0.25rem]' type="tel" id='phone-number' value='تهران، خیابان ولیعصر، منطقه ۱۲، بلوار کاوه، کوچه ابوذر، پلاک ۱۵' dir='rtl'/>
                            </div>
                        </div>
                    </div>
                    
                    
                    <img src={ map } alt="map" className='w-[37.5rem] h-[18.75rem]'/>
                    <div className="w-full" style={{ marginRight: "1.5rem" }}>
                        <button className='w-[11.5rem] h-[3rem] rounded-[8px] text-white' style={{ backgroundColor: "var(--color-primary)"}}>ثبت اطلاعات</button>
                    </div>

                </form>
            </div>
            <img src={ userSignUpImage } alt="user-signup-image w-[32.5rem] h-[32rem]" />
        </div>

        <Footer />
    </>
    );
}
 
export default UserSignUp;