import swtichButton from '../assets/icons/switch-button.svg'
import arrowDown from '../assets/icons/arrow-down.svg'

const Filter = () => {
    return (  
        <div className="w-[18rem] h-auto border border-[var(--color-custome-gray-4)] rounded-[8px] p-[1.25rem]">
            <div className='flex justify-between mb-[1.25rem]'>
                <span className='text-lg'>فیلتر ها</span>
                <span className='font-semibold text-[var(--color-primary)] text-sm'>حذف فیلترها</span>
            </div>
            <div className="w-[15.5rem] h-auto flex flex-col gap-[1.25rem]">
                <div className='flex justify-between items-center w-full h-[2rem]'>
                    <span>نوع طرح</span>
                    <img src={ arrowDown } alt="arrow-down" className='w-[1rem] h-[1rem]'/>
                </div>
                <div className='flex justify-between items-center w-full h-[2rem]'>
                    <span>اندازه</span>
                    <img src={ arrowDown } alt="arrow-down" className='w-[1rem] h-[1rem]'/>
                </div>
                <div className='flex justify-between items-center w-full h-[2rem]'>
                    <span>رنگ</span>
                    <img src={ arrowDown } alt="arrow-down" className='w-[1rem] h-[1rem]'/>
                </div>
                <div className='flex justify-between items-center w-full h-[2rem]'>
                    <span>ارسال امروز</span>
                    <img src={ swtichButton } alt="switch-button" className='w-[2.5rem] h-[1.25rem]'/>
                </div>
                <div className='flex justify-between items-center w-full h-[2rem]'>
                    <span>فقط کالاهای موجود</span>
                    <img src={ swtichButton } alt="switch-button" className='w-[2.5rem] h-[1.25rem]'/>
                </div>
                <div className='flex justify-between items-center w-full h-[2rem]'>
                    <span>محدوده قیمت</span>
                    <img src={ arrowDown } alt="arrow-down" className='w-[1rem] h-[1rem]'/>
                </div>
                <div className='flex justify-between items-center w-full h-[2rem]'>
                    <span>مدل</span>
                    <img src={ arrowDown } alt="arrow-down" className='w-[1rem] h-[1rem]'/>
                </div>
                <div className='flex justify-between items-center w-full h-[2rem]'>
                    <span>طرح</span>
                    <img src={ arrowDown } alt="arrow-down" className='w-[1rem] h-[1rem]'/>
                </div>
            </div>
        </div>
    );
}
 
export default Filter;