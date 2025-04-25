import '../index.css'
import '../styles/base.css'
import '../styles/components.nav.css'

import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import DesignerSignUpPic from '../assets/images/DesignerSignUp.svg'

const DesignerSignUp = () => {
    return ( 
        <>
            <Navbar />
            <Contact />
            <main className='flex justify-center'>
                {/* <form className='w-[40.5rem] h-[30.0625]' action="submit">
                    <input type="text" className='border border-black'/>
                </form> */}

                <form action="submit" className='flex flex-wrap justify-center w-[40.5rem] h-auto overflow-hidden mt-[2rem] items-start gap-y-[1.5rem] '>
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
                            <div className='w-[18rem] h-[4.25rem]'>
                                <div>
                                    <label for='phone-number'>آدرس ایمیل</label>
                                </div>
                                <div>
                                    <input className='border rounded-[8px] w-full h-[2.5rem] mt-[0.25rem] pl-[0.5rem]' type="email" id='phone-number' value='n.zamani@gmail.com' dir='ltr'/>
                                </div>
                            </div>
                            <div className='w-[18rem] h-[4.25rem]'>
                                <div>
                                    <label for='phone-number'>کلمه عبور</label>
                                </div>
                                <div>
                                    <input className='border rounded-[8px] w-full h-[2.5rem] mt-[0.25rem] pl-[0.5rem]' type="passord" id='phone-number' value='************'/>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-[1.5rem]'>
                            <div className='w-[18rem] h-[4.25rem]'>
                                <div>
                                    <label for='phone-number'>تاریخ تولد</label>
                                </div>
                                <div>
                                    <input className='border rounded-[8px] w-full h-[2.5rem] mt-[0.25rem] pl-[0.5rem]' type="tel" id='phone-number' value='۱۳۷۰/۰۱/۰۱'/>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </form>
                
                <div className='flex items-center w-[32.5rem] h-[30rem]'>
                    <img className='w-full h-[21.125rem]' src={ DesignerSignUpPic } alt="designer-sign-up-pic" />
                </div>
            </main>
            <Footer />
        </>
    );
}
 
export default DesignerSignUp;