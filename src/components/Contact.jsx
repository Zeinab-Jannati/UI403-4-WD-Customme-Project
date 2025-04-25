import '../index.css'
import '../styles/base.css'
import '../styles/components.nav.css'

import userInfo from '../assets/icons/user.svg'
import contactInfo from '../assets/icons/call.svg'

const contact = () => {
    return ( 
        <div className="flex justify-center items-center mt-[2rem]">
            <div className='w-[19.1875rem] h-[4.125rem] flex justify-between'>
                <div className="flex flex-col items-center justify-center">
                    <img src={ userInfo } alt="user-info" />
                    <span>اطلاعات کاربر</span>
                </div>

                <div>
                    
                </div>

                <div className="flex flex-col items-center justify-center">
                    <img src={contactInfo} alt="contact-info" />
                    <span className=''>اطلاعات تماس</span>
                </div>
            </div>
        </div>
    );
}
 
export default contact;