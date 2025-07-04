import '../index.css'
import '../styles/base.css'
import '../styles/components.nav.css'

import greenTickIcon from '../assets/icons/tick-green-circle-icon.svg'

import products2Icon from '../assets/images/products2-image.svg'
import billIcon from '../assets/icons/bill-icon.svg'

const OrderStatus = () => {
    return ( 
        <div className='flex flex-col gap-[1rem] flex-1 p-[1rem] w-[47.5rem] h-[19.125rem] rounded-[8px] border border-[var(--color-custome-gray-3)]'>
            <div className='flex flex-col'>
                <span className='flex gap-[0.5rem] m-[1rem]'>
                    <img src={ greenTickIcon } alt="tick-green-circle-icon" />
                    تحویل شده
                </span>
                <div className='flex gap-[1.5rem]'>
                    <span className='text-[var(--color-custome-gray-7)]'>۳ شهریور ۱۴۰۲</span>
                    <span><span className='text-[var(--color-custome-gray-7)]'>کد سفارش </span>۳۵۴۵۳۴۵۲۱</span>
                    <span><span className='text-[var(--color-custome-gray-7)]'>مبلغ</span> ۵۴۵,۰۰۰ تومان</span>
                    <span><span className='text-[var(--color-custome-gray-7)]'>تخفیف</span> ۵۴۵,۰۰۰ تومان</span>
                </div>
            </div>
            <hr className='w-[calc(100%+2rem)] border-b border-[var(--color-custome-gray-3)] mx-[-1rem]'/>
            <div className='flex w-[45.5rem] h-[5.5rem] gap-[1.166875rem]'>
                <img src={products2Icon} alt="product2-image"className='rounded-[8px] w-[5.5rem] h-[5.5rem]' />
                <img src={products2Icon} alt="product2-image"className='rounded-[8px] w-[5.5rem] h-[5.5rem]' />
                <img src={products2Icon} alt="product2-image"className='rounded-[8px] w-[5.5rem] h-[5.5rem]' />
                <img src={products2Icon} alt="product2-image"className='rounded-[8px] w-[5.5rem] h-[5.5rem]' />
                <img src={products2Icon} alt="product2-image"className='rounded-[8px] w-[5.5rem] h-[5.5rem]'/>
                <img src={products2Icon} alt="product2-image"className='rounded-[8px] w-[5.5rem] h-[5.5rem]' />
                <img src={products2Icon} alt="product2-image"className='rounded-[8px] w-[5.5rem] h-[5.5rem]' />
            </div>
            <hr className='w-[calc(100%+2rem)] border-b border-[var(--color-custome-gray-3)] mx-[-1rem]'/>

            <div className='relative w-full flex justify-end'>
                <span className='flex gap-[0.25rem] w-[9.5rem] h-[2.5rem] text-[var(--color-primary)]'>
                    <img src={ billIcon } alt="bill-icon" className='w-[1.5rem] h-[1.5rem]'/>
                    مشاهده سفارش
                </span>
            </div>
        </div>
     );
}
 
export default OrderStatus;