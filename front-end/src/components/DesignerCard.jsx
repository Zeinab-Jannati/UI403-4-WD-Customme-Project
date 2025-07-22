import desingerAvatar from '../assets/icons/user-avatar.svg'
import fox from '../assets/images/fox.png'
import back from '../assets/images/back.png'

const DesignerCard = () => {
    return ( 
        <div className="flex flex-col gap-[0.75rem] sm:gap-[1rem] w-[9.5rem] sm:w-[18rem] sm:h-fit border border-[var(--color-custome-gray-7)] rounded-[16px]">
            <div className="relative w-full h-[4.25rem] sm:h-[7rem]">
                <div className="w-full h-[2.9375rem] sm:h-[4.5rem] bg-[var(--color-primary-tint-2)] rounded-[16px]"></div>
                <img src={ desingerAvatar } alt="" className='w-[3.5rem] h-[3.5rem] sm:w-[5rem] sm:h-[5rem] absolute left-[3rem] sm:left-[6.5rem] top-[0.6875rem] sm:top-[2rem]' />
            </div>
            <span className='w-full text-center text-[0.625rem] sm:text-[1rem] pb-[0.1875rem] sm:py-[0.5rem]'>نگار زمانی</span>
            <div className='flex flex-col justify-center items-center sm:flex-row sm:gap-[0.5rem] text-[0.625rem] text-[var(--color-custome-gray-7)] px-[0.90625rem]'>
                <span className=''>دنبال کنندگان : ۴۰۰</span>
                <span className=''> تعداد طرح ها : ۵۶</span>
                <span className=''> آمار فروش : ۳۷۰ </span>
            </div>

            <div className='hidden sm:flex gap-[0.75rem] w-full'>
                <div>
                    <img src={ fox } alt="fox" className='w-[5rem] h-[5rem]'/>
                </div>
                <div>
                    <img src={ fox } alt="fox" className='w-[5rem] h-[5rem]'/>
                </div>
                <div>
                    <img src={ fox } alt="fox" className='w-[5rem] h-[5rem]'/>
                </div>
            </div>
            <button className='mx-[0.75rem] sm:mx-[0.5rem] border-[1px] sm:border-[2px] border-[var(--color-primary)] text-[var(--color-primary)] text-[0.625rem] sm:text-[0.875rem] py-[0.5rem] rounded-[8px] mb-[1rem]'>
                دنبال کردن
            </button>
        </div>
     );
}
 
export default DesignerCard;