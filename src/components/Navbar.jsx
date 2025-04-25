import '../index.css'
import '../styles/base.css'
import '../styles/components.nav.css'
import logo from '../assets/icons/logo.svg'
import searchNormal from '../assets/icons/search-normal.svg'
import shoppingCard from '../assets/icons/shopping-cart.svg'
import loginIcon from '../assets/icons/login-icon.svg'


const Navbar = () => {

    return ( 
        
        <nav className='flex items-center justify-evenly h-[6.5rem]'>
            <img src={ logo } alt="logo" />
            <div className="searchBox flex items-center w-[37.25rem] h-[3rem] border-[0.006rem] border-custome-gray-4 rounded-[16px]">
                {/* todo: fix placeholder color */}
                <input type="text" placeholder='جستجو' className='w-full placeholder-primary' />
                <span className='flex h-[2rem] w-[2rem] my-[0.75rem] ml-[1.5rem]'><img src={ searchNormal } alt="searchNormal" /></span>
            </div>
            <div className="links flex w-[18rem] h-[2.5rem] gap-[1rem]">
                <div className="flex items-center">
                    <img src={ shoppingCard } alt="shopping-cart" className='w-[1.5rem] h-[1.5rem]'/>
                    <span>سبد خرید</span>
                </div>
                <div className="flex items-center">
                    <img src={ loginIcon } alt="login-icon" />
                    <span>ورود | ثبت‌نام</span>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;