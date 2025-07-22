import '../index.css'
import '../styles/base.css'
import '../styles/components.nav.css'
import React from 'react'

import pendingIcon from '../assets/icons/pending-icon.svg'
import tickCircleIcon from '../assets/icons/tick-circle-icon.svg'
import galleryIcon from '../assets/icons/gallery-icon.svg'
import commentsIcon from '../assets/icons/comments-icon.svg'
import cancleCircleIcon from '../assets/icons/cancel-circle.svg'
import productsIcon from '../assets/icons/products-icon.svg'

const OrdersSummary = () => {
    return (
        <div className='flex w-full sm:w-[47.6875rem] justify-evenly sm:justify-center pt-[1.5rem] pb-[1rem] sm:border-b sm:border-[var(--color-custome-gray-3)]' >

          <div className='flex flex-col items-center gap-[1.59rem] sm:gap-[0.8rem] sm:px-[5rem]'>
            <div className="flex flex-col justify-center items-center">
              <span className='flex gap-[0.5rem] whitespace-nowrap '>
                <img src={pendingIcon} alt="pending-icon" className='w-[1.25rem] sm:w-[1.5rem] h-[1.25rem] sm:h-[1.5rem]'/>
                <div className='flex flex-col items-start'>
                  <span className="text-[0.875rem]">۴۵ سفارش</span> 
                  <span className='text-[0.625rem] sm:text-sm'>جاری</span>
                </div>
              </span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className='flex gap-[0.5rem] whitespace-nowrap'>
                <img src={commentsIcon} alt="comment-icon" className='w-[1.25rem] sm:w-[1.5rem] h-[1.25rem] sm:h-[1.5rem]'/>
                <div className='flex flex-col items-start'>
                  <span className="text-[0.875rem]">۵۴ نظر</span>
                  <span className='text-[0.625rem] sm:text-sm'> ثبت شده</span>
                </div>
              </span>
            </div>
          </div>

          <div className='flex flex-col items-center sm:border-r sm:-l sm:border-[var(--color-custome-gray-3)] gap-[0.8rem] sm:px-[5rem]'>
            <div className="flex flex-col justify-center items-center">
              <span className='flex gap-[0.5rem] whitespace-nowrap'>
                <img src={tickCircleIcon} alt="tick-circle-icon" className='w-[1.25rem] sm:w-[1.5rem] h-[1.25rem] sm:h-[1.5rem]'/>
                <div className="flex flex-col items-start">
                  <span className="text-[0.875rem]">۴۵ سفارش</span>
                  <span className='text-[0.625rem] sm:text-sm'>ارسال شده</span>
                </div>
              </span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className='flex gap-[0.5rem] whitespace-nowrap'>
                <img src={cancleCircleIcon} alt="cancel-circle-icon" className='w-[1.25rem] sm:w-[1.5rem] h-[1.25rem] sm:h-[1.5rem]'/>
                <div className="flex flex-col items-start">
                  <span className="text-[0.875rem]">۲۱۵ سفارش</span>
                  <span className='text-[0.625rem] sm:text-sm'>لغو شده</span>
                </div>
              </span>
            </div>
          </div>

          <div className='flex flex-col items-center gap-[0.8rem] sm:px-[5rem]'>
            <div className="flex flex-col justify-center items-center">
              <span className='flex gap-[0.5rem] whitespace-nowrap'>
                <img src={galleryIcon} alt="gallery-icon" className='w-[1.25rem] sm:w-[1.5rem] h-[1.25rem] sm:h-[1.5rem]'/>
                <div className="flex flex-col items-start">
                  <span className="text-[0.875rem]">۱۰ محصول</span>
                  <span className='text-[0.625rem] sm:text-sm'>در گالری</span>
                </div>
              </span>
            </div>
            <div className="flex flex-col justify-center items-center">
                <span className='flex gap-[0.5rem] whitespace-nowrap'>
                  <img src={productsIcon} alt="products-icon" className='w-[1.25rem] sm:w-[1.5rem] h-[1.25rem] sm:h-[1.5rem]'/>
                  <div className="flex flex-col items-start">
                  <span className="text-[0.875rem]">۲۸ محصول</span>
                  <span className='text-[0.625rem] sm:text-sm'>فیزیکی </span>
                </div>
                </span>
            </div>
          </div>
        </div>
        
      );
}
 
export default OrdersSummary;