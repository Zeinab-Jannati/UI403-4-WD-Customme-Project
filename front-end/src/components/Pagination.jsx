import productPic from '../assets/images/product-image.svg'

import leftCarousel from '../assets/icons/left-carousel.svg'
import rightCarousel from '../assets/icons/right-carousel.svg'


const Pagination = () => {
    return ( 
        <div className='flex w-[50.5rem] h-[3.5rem] mb-[3.5rem] mt-[1rem] gap-[0.75rem] items-center justify-between'>
            <img src={ rightCarousel } alt="right-carousel" className='w-[2.5rem] h-[2.5rem]' />
            <div className='rounded-[2rem] border justify-center items-center flex py-[0.75rem] px-[2.3125rem]' style={{ borderColor: "var(--color-custome-gray-4)"}}>
                <div className='flex gap-[1.5rem]'>
                    <div className='w-[2rem] h-[2rem] rounded-full border border-[var(--color-custome-gray-8)] text-center content-center'>۵۰</div>
                    <div className='w-[0.9375rem] h-[1.5rem] rounded-full text-center content-center'>...</div>
                    <div className='w-[2rem] h-[2rem] rounded-full border border-[var(--color-custome-gray-8)] text-center content-center'>۱۰</div>
                    <div className='w-[2rem] h-[2rem] rounded-full border border-[var(--color-custome-gray-8)] text-center content-center'>۹</div>
                    <div className='w-[2rem] h-[2rem] rounded-full border border-[var(--color-custome-gray-8)] text-center content-center'>۸</div>
                    <div className='w-[2rem] h-[2rem] rounded-full border border-[var(--color-custome-gray-8)] text-center content-center'>۷</div>
                    <div className='w-[2rem] h-[2rem] rounded-full border border-[var(--color-custome-gray-8)] text-center content-center'>۶</div>
                    <div className='w-[2rem] h-[2rem] rounded-full border border-[var(--color-custome-gray-8)] text-center content-center'>۵</div>
                    <div className='w-[2rem] h-[2rem] rounded-full border border-[var(--color-custome-gray-8)] text-center content-center'>۴</div> 
                    <div className='w-[2rem] h-[2rem] rounded-full border border-[var(--color-custome-gray-8)] text-center content-center'>۳</div>
                    <div className='w-[2rem] h-[2rem] rounded-full bg-[var(--color-primary-tint-6)] text-center content-center'>۲</div>
                    <div className='w-[2rem] h-[2rem] rounded-full border border-[var(--color-custome-gray-8)] text-center content-center'>۱</div>
                </div>
            </div>
            <img src={ leftCarousel } alt="left-carousel" className='w-[2.5rem] h-[2.5rem]'/>   
        </div>
     );
}
 
export default Pagination;