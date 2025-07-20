import magicPen from '../assets/icons/magicpen.svg'
import MobileCaseDropdown from './MobilCaseDropDown';
const MainMenu = () => {
    return ( 
        <div className="hidden sm:flex w-full justify-center mt-[1.5rem]">
            <nav className="flex justify-center items-center w-[75.6rem] h-[4rem] gap-[2rem]">
                <span className='flex items-center justify-center gap-[0.25rem] text-white w-[11.5rem] h-[3rem] rounded-[8px] bg-[var(--color-primary)]'>
                    <img src={ magicPen } alt="magic-pen" className='w-[1.5rem] h-[1.5rem]' />
                    <a href="#">
                        خودت طراحیش کن!
                    </a>
                </span>

                <div className="relative flex gap-[2.5rem] whitespace-nowrap">
                    <span className='flex justify-center w-[6.5rem] h-[1.5rem]'>
                        <a href="#" className="">پوشاک</a>
                    </span>
                    <span className='flex justify-center w-[6.5rem] h-[1.5rem]'>
                        <a href="#" className="">لوازم خانه</a>
                    </span>
                    <span className='flex justify-center w-[6.5rem] h-[1.5rem]'>
                        < MobileCaseDropdown />
                    </span>
                    <span className='flex justify-center w-[6.5rem] h-[1.5rem]'>
                        <a href="#" className="">اکسسوری</a>
                    </span>
                    <span className='flex justify-center w-[6.625rem] h-[1.5rem]'>
                        <a href="#" className="">مدرسه و اداره</a>
                    </span>
                    <span className='flex justify-center w-[6.5rem] h-[1.5rem]'>
                        <a href="#" className="">کارت و پوستر</a>
                    </span>
                    <span className='flex justify-center w-[7.375rem] h-[1.5rem]'>
                        <a href="#" className="">جشن و مهمانی</a>
                    </span>
                </div>

            </nav>
        </div>
     );
}
 
export default MainMenu;