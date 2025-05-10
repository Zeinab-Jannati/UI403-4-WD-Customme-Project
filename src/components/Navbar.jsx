import '../index.css'
import '../styles/base.css'
import '../styles/components.nav.css'

import logo from '../assets/icons/logo.svg'
import searchNormal from '../assets/icons/search-normal.svg'
import shoppingCard from '../assets/icons/shopping-cart.svg'
import loginIcon from '../assets/icons/login-icon.svg'


const Navbar = () => {

    return ( 
        
        <nav className='flex items-center justify-evenly h-[6.5rem] border-b border-[var(--color-custome-gray-2)]'>
            <img src={ logo } alt="logo" />
            <div className=" relative searchBox flex items-center w-[37.25rem] h-[3rem] border-[0.006rem] border-[var(--color-custome-gray-4)] rounded-[16px]">
                <input type="text" placeholder='جستجو' className='w-full placeholder-[var(--color-primary)] focus:outline-none' />
                <span className='absolute flex h-[2rem] w-[2rem] my-[0.75rem] left-[1.5rem]'><img src={ searchNormal } alt="searchNormal" /></span>
            </div>
            <div className="links flex w-[18rem] h-[2.5rem] gap-[2.875rem] text-[var(--color-custome-gray-9)]">
                <div className="flex items-center gap-[0.25rem]">
                    <img src={ loginIcon } alt="login-icon" />
                    <span>ورود | ثبت‌نام</span>
                </div>
                <div className="flex items-center relative gap-[0.25rem]">
                    <div>
                        <div className='absolute top-[0.3rem] right-[-0.3rem] w-[0.8rem] h-[0.8rem] bg-[var(--color-primary-tint-5)] rounded-full'></div>
                        <img src={ shoppingCard } alt="shopping-cart" className='w-[1.5rem] h-[1.5rem]'/>
                    </div>
                    <span>سبد خرید</span>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;