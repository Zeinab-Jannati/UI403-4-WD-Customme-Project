import '../index.css'
import '../styles/base.css'
import '../styles/components.nav.css'

import Navbar from '../components/Navbar'

import userInfo from '../assets/icons/user.svg'
import contactInfo from '../assets/icons/call.svg'
import map from '../assets/images/map.png'

const UserSignUp = () => {
    return ( 
    <>
        <Navbar />
        <div className="flex justify-center items-center mt-[2rem]">
            <div className='w-[19.1875rem] h-[4.125rem] flex justify-between'>
                <div className="flex flex-col items-center justify-center">
                    <img src={ userInfo } alt="user-info" />
                    <span>اطلاعات کاربر</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img src={contactInfo} alt="contact-info" />
                    <span className=''>اطلاعات تماس</span>
                </div>
            </div>
        </div>

        {/* todo: fix the form! */}
        <h3>فرم ثبت اطلاعات</h3>

        <form action="submit" className='flex flex-wrap w-[40.5rem] h-[50.75rem] overflow-hidden rounded-[1.5rem] mr-[6.75rem] mt-[5.0625rem] items-start gap-y-[1.5rem]'>
            <div className='w-[18rem] h-[4.25rem] p-[1.5rem]'>
                <div>
                    <label for='phone-number'>شماره موبایل</label>
                </div>
                <div>
                    <input className='border rounded-[8px] w-full h-[2.5rem] mt-[0.25rem]' type="tel" id='phone-number' value='09'/>
                </div>
            </div>
            <div className='w-[18rem] h-[4.25rem] my-[1.5rem] mr-[1.5rem]'>
                <div>
                    <label for='phone-number'>شماره موبایل</label>
                </div>
                <div>
                    <input className='border rounded-[8px] w-full h-[2.5rem] mt-[0.25rem]' type="tel" id='phone-number' value='09'/>
                </div>
            </div>
            <div className='w-[18rem] h-[4.25rem] my-[1.5rem] mr-[1.5rem]'>
                <div>
                    <label for='phone-number'>شماره موبایل</label>
                </div>
                <div>
                    <input className='border rounded-[8px] w-full h-[2.5rem] mt-[0.25rem]' type="tel" id='phone-number' value='09'/>
                </div>
            </div>
            <div className='w-[18rem] h-[4.25rem] my-[1.5rem] mr-[1.5rem]'>
                <div>
                    <label for='phone-number'>شماره موبایل</label>
                </div>
                <div>
                    <input className='border rounded-[8px] w-full h-[2.5rem] mt-[0.25rem]' type="tel" id='phone-number' value='09'/>
                </div>
            </div>
            <div className='w-[18rem] h-[4.25rem] my-[1.5rem] mr-[1.5rem]'>
                <div>
                    <label for='phone-number'>شماره موبایل</label>
                </div>
                <div>
                    <input className='border rounded-[8px] w-full h-[2.5rem] mt-[0.25rem]' type="tel" id='phone-number' value='09'/>
                </div>
            </div>
            <div className='w-full h-[4.25rem] my-[1.5rem] mr-[1.5rem]'>
                <div>
                    <label for='phone-number'>شماره موبایل</label>
                </div>
                <div>
                    <input className='border rounded-[8px] w-full h-[2.5rem] mt-[0.25rem]' type="tel" id='phone-number' value='09'/>
                </div>
            </div>
            
            <img src={ map } alt="map" className='w-[37.5rem] h-[18.75rem] mr-[1.5rem]'/>
            <div className="w-full relative">
                <button className='absolute left-[1.5rem] w-[11.5rem] h-[3rem] bg-amber-600 rounded-[8px] text-white'>ثبت اطلاعات</button>
            </div>
        </form>
    </>
    );
}
 
export default UserSignUp;