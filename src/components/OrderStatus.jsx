import '../index.css'
import '../styles/base.css'
import '../styles/components.nav.css'

import greenTickIcon from '../assets/icons/tick-green-circle-icon.svg'

import products2Icon from '../assets/images/products2-image.svg'
import billIcon from '../assets/icons/bill-icon.svg'

const OrderStatus = () => {
    return ( 
        <div className='flex flex-col gap-[1rem] flex-1 p-[1rem] w-[47.5rem] h-[19.125rem] rounded-[8px] border' style={{ borderColor: "var(--color-custome-gray-4)"}}>
            <div className='flex flex-col gap-[2.5rem]'>
                <span className='flex gap-[0.5rem]'>
                    <img src={ greenTickIcon } alt="tick-green-circle-icon" />
                    تحویل شده
                </span>
                <div className='flex gap-[1.5rem]'>
                    <span>۳ شهریور ۱۴۰۲</span>
                    <span>کد سفارش ۳۵۴۵۳۴۵۲۱</span>
                    <span>مبلغ ۵۴۵,۰۰۰ تومان</span>
                    <span>تخفیف ۵۴۵,۰۰۰ تومان</span>
                </div>
            </div>
            <hr className='w-full' style={{ borderColor: "var(--color-custome-gray-4)"}}/>
            <div className='flex w-[45.5rem] h-[5.5rem] gap-[1.166875rem]'>
                <img src={products2Icon} alt="product2-image"className='rounded-[8px] w-[5.5rem] h-[5.5rem]' />
                <img src={products2Icon} alt="product2-image"className='rounded-[8px] w-[5.5rem] h-[5.5rem]' />
                <img src={products2Icon} alt="product2-image"className='rounded-[8px] w-[5.5rem] h-[5.5rem]' />
                <img src={products2Icon} alt="product2-image"className='rounded-[8px] w-[5.5rem] h-[5.5rem]' />
                <img src={products2Icon} alt="product2-image"className='rounded-[8px] w-[5.5rem] h-[5.5rem]'/>
                <img src={products2Icon} alt="product2-image"className='rounded-[8px] w-[5.5rem] h-[5.5rem]' />
                <img src={products2Icon} alt="product2-image"className='rounded-[8px] w-[5.5rem] h-[5.5rem]' />
            </div>
            <hr className='w-full' style={{ borderColor: "var(--color-custome-gray-4)"}}/>

            <div className='relative w-full'>
                <span className='flex gap-[0.25rem] w-[9.5rem] h-[2.5rem] absolute left-0 whitespace-nowrap items-center justify-center'>
                    <img src={ billIcon } alt="bill-icon" className='w-[1.5rem] h-[1.5rem]'/>
                    مشاهده سفارش
                </span>
            </div>
        </div>
     );
}
 
export default OrderStatus;