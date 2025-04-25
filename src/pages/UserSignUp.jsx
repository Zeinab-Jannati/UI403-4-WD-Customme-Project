import '../index.css'
import '../styles/base.css'
import '../styles/components.nav.css'

import Navbar from '../components/Navbar'
import Contact from '../components/Contact'

import map from '../assets/images/map.png'
import Footer from './Footer'

const UserSignUp = () => {
    return ( 
    <>
        <Navbar />
        
        <Contact />
        {/* todo: fix the form! */}
        <h3>فرم ثبت اطلاعات</h3>

        <form action="submit" className='flex flex-wrap w-[40.5rem] h-[50.75rem] overflow-hidden rounded-[1.5rem] mb-[4.375rem] mr-[6.75rem] mt-[5.0625rem] items-start gap-y-[1.5rem]'>
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

        <Footer />
    </>
    );
}
 
export default UserSignUp;