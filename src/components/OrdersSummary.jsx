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
        <div className='flex w-[50.5rem] justify-center my-[1rem]' >

          <div className='flex flex-col items-center gap-[0.8rem] px-[5rem]'>
            <div className="flex flex-col justify-center items-center">
              <span className='flex gap-[0.5rem] whitespace-nowrap'>
                <img src={pendingIcon} alt="pending-icon" />
                ۴۵ سفارش
              </span>
              <span className='text-sm'>جاری</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className='flex gap-[0.5rem] whitespace-nowrap'>
                <img src={commentsIcon} alt="comment-icon" />
                ۵۴ نظر
              </span>
              <span className='text-sm'> ثبت شده</span>
            </div>
          </div>

          <div className='flex flex-col items-center border-r border-l border-black gap-[0.8rem] px-[5rem]'>
            <div className="flex flex-col justify-center items-center">
              <span className='flex gap-[0.5rem] whitespace-nowrap'>
                <img src={tickCircleIcon} alt="tick-circle-icon" />
                ۴۵ سفارش
              </span>
              <span className='text-sm'>ارسال شده</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className='flex gap-[0.5rem] whitespace-nowrap'>
                <img src={cancleCircleIcon} alt="cancel-circle-icon" />
                ۲۱۵ سفارش
              </span>
              <span className='text-sm'>لغو شده</span>
            </div>
          </div>

          <div className='flex flex-col items-center gap-[0.8rem] px-[5rem]'>
            <div className="flex flex-col justify-center items-center">
              <span className='flex gap-[0.5rem] whitespace-nowrap'>
                <img src={galleryIcon} alt="gallery-icon" />
                ۱۰ محصول 
              </span>
              <span className='text-sm'>در گالری</span>
            </div>
            <div className="flex flex-col justify-center items-center">
                <span className='flex gap-[0.5rem] whitespace-nowrap'>
                  <img src={productsIcon} alt="products-icon" />
                  ۲۸ محصول 
                </span>
                <span className='text-sm'>فیزیکی </span>
            </div>
          </div>
        </div>
        
      );
}
 
export default OrdersSummary;