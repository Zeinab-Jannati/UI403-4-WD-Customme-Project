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
        <div className='flex w-[47.6875rem] justify-center pt-[1.5rem] pb-[1rem] border-b border-[var(--color-custome-gray-3)]' >

          <div className='flex flex-col items-center gap-[0.8rem] px-[5rem]'>
            <div className="flex flex-col justify-center items-center">
              <span className='flex gap-[0.5rem] whitespace-nowrap '>
                <img src={pendingIcon} alt="pending-icon" className='w-[1.5rem] h-[1.5rem]'/>
                <div className='flex flex-col items-start'>
                  <span>۴۵ سفارش</span> 
                  <span className='text-sm'>جاری</span>
                </div>
              </span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className='flex gap-[0.5rem] whitespace-nowrap'>
                <img src={commentsIcon} alt="comment-icon" className='w-[1.5rem] h-[1.5rem]'/>
                <div className='flex flex-col items-start'>
                  <span>۵۴ نظر</span>
                  <span className='text-sm'> ثبت شده</span>
                </div>
              </span>
            </div>
          </div>

          <div className='flex flex-col items-center border-r border-l border-[var(--color-custome-gray-3)] gap-[0.8rem] px-[5rem]'>
            <div className="flex flex-col justify-center items-center">
              <span className='flex gap-[0.5rem] whitespace-nowrap'>
                <img src={tickCircleIcon} alt="tick-circle-icon" className='w-[1.5rem] h-[1.5rem]'/>
                <div className="flex flex-col items-start">
                  <span>۴۵ سفارش</span>
                  <span className='text-sm'>ارسال شده</span>
                </div>
              </span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className='flex gap-[0.5rem] whitespace-nowrap'>
                <img src={cancleCircleIcon} alt="cancel-circle-icon" className='w-[1.5rem] h-[1.5rem]'/>
                <div className="flex flex-col items-start">
                  <span>۲۱۵ سفارش</span>
                  <span className='text-sm'>لغو شده</span>
                </div>
              </span>
            </div>
          </div>

          <div className='flex flex-col items-center gap-[0.8rem] px-[5rem]'>
            <div className="flex flex-col justify-center items-center">
              <span className='flex gap-[0.5rem] whitespace-nowrap'>
                <img src={galleryIcon} alt="gallery-icon" className='w-[1.5rem] h-[1.5rem]'/>
                <div className="flex flex-col items-start">
                  <span>۱۰ محصول</span>
                  <span className='text-sm'>در گالری</span>
                </div>
              </span>
            </div>
            <div className="flex flex-col justify-center items-center">
                <span className='flex gap-[0.5rem] whitespace-nowrap'>
                  <img src={productsIcon} alt="products-icon" className='w-[1.5rem] h-[1.5rem]'/>
                  <div className="flex flex-col items-start">
                  <span>۲۸ محصول</span>
                  <span className='text-sm'>فیزیکی </span>
                </div>
                </span>
            </div>
          </div>
        </div>
        
      );
}
 
export default OrdersSummary;