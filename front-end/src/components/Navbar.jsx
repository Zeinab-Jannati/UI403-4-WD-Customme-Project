import { Link, useNavigate } from 'react-router-dom'
import '../index.css'
import '../styles/base.css'
import '../styles/components.nav.css'

import { useAuth } from '../contexts/AuthContext'

import logo from '../assets/icons/logo.svg'
import logoMobile from '../assets/icons/logo-mobile.png'
import customme from '../assets/icons/customme.svg'
import menu from '../assets/icons/menu.svg'
import searchNormal from '../assets/icons/search-normal.svg'
import shoppingCard from '../assets/icons/shopping-cart.svg'
import loginIcon from '../assets/icons/login-icon.svg'
import userIcon from '../assets/icons/user-gray.svg'


const Navbar = ({}) => {
    const { isAuthenticated, userProfile, isLoading, logout } = useAuth();


    return ( 
        
        <nav className='w-full sm:flex items-center justify-center h-[6.5rem] border-b border-[var(--color-custome-gray-2)] !gap-0'>
            <div className='mx-[1.25rem] sm:mx-[6.75rem] flex items-center sm:gap-[4.72125rem] gap-[0.75rem]'>
                <img src={ logo } alt="logo" className='hidden sm:block'/>
                <img src={ menu } alt="menu" className='sm:hidden h-[1.5rem] w-[1.5rem] ml-[0.75rem] mr-[1.25rem]'/>
                <div className=" relative searchBox flex items-center border-[0.006rem] border-[var(--color-custome-gray-4)] rounded-[16px]">
                    <div className='sm:hidden flex items-center h-[2rem] w-[14.5rem]'> 
                        <span className='flex '>
                            <input type="text" placeholder='جستجو در' className=' w-full placeholder-[var(--color-primary)]' />
                            <span><img src={ customme } alt="logo" className='absolute'/></span>
                        </span>
                        <span className='absolute h-[2rem] w-[2rem] my-[0.75rem] left-[0.75rem]'><img src={ searchNormal } alt="searchNormal" /></span>
                    </div>
                    <div className='hidden sm:flex relative w-[37.25rem] h-[3rem]'>
                        <input type="text" placeholder='جستجو' className='w-full placeholder-[var(--color-primary)] focus:outline-none' />
                        <span className='absolute h-[2rem] w-[2rem] my-[0.75rem] left-[1.5rem]'><img src={ searchNormal } alt="searchNormal" /></span>
                    </div>
                </div>
                <div className="hidden sm:flex links w-[18rem] h-[2.5rem] gap-[2.875rem] text-[var(--color-custome-gray-9)]">
                    {isLoading ? (<p>درحال بارگذاری</p>): isAuthenticated ? (
                        <button className="flex items-center gap-[0.25rem] cursor-pointer">
                            <img src={ userIcon } alt="login-icon" />
                            <Link to="/userprofile">
                                <span>حساب کاربری</span>
                            </Link>
                        </button>
                    ) : (
                        <button className="flex items-center gap-[0.25rem] cursor-pointer">
                            <img src={ loginIcon } alt="login-icon" />
                            <Link to="/login">
                                <span>ورود | ثبت‌نام</span>
                            </Link>
                        </button>
                    )}
                    <div className="flex items-center relative gap-[0.25rem]">
                        <div>
                            <div className='absolute top-[0.3rem] right-[-0.3rem] w-[0.8rem] h-[0.8rem] bg-[var(--color-primary-tint-5)] rounded-full'></div>
                            <img src={ shoppingCard } alt="shopping-cart" className='!w-[1.5rem] !h-[1.5rem]'/>
                        </div>
                        <Link to="/shoppingcard">
                            <span>سبد خرید</span>
                        </Link>
                    </div>
                </div> 
                <img src={ logoMobile } alt="logo-mobile" className='sm:hidden !w-[2.5rem] !h-[2.5rem] mr-[0.75rem] ml-[1.25rem]' />
            </div>
        </nav>
     );
}
 
export default Navbar;