import closeCircle from '../assets/icons/close-square.svg'
import productPic from '../assets/images/product-image.svg'
import closeSquare from '../assets/icons/close-square.svg'
import minus from '../assets/icons/-.svg'
import plus from '../assets/icons/+.svg'
import one from '../assets/icons/1.svg'
import truckFast from '../assets/icons/truck-fast.svg'

const ShoppingCardProduct = () => {
    return ( 
        <div className="w-[50.5rem] h-auto">
            <div className="w-full h-auto flex flex-col">
                <div className='w-full h-auto flex gap-[1.5rem] items-center justify-between !px-[1.5rem]'>
                    <div className='flex gap-[1.5rem] items-center'>
                        <img src={ closeSquare } alt="close-square" />
                        <img src={ productPic } alt="product-pic" className='w-[7.875rem] h-[7.5rem]' />
                        <span className='font-bold text-base'>تیشرت سفید طرح دار</span>
                        <span className='font-bold text-base'>۲۴۰.۰۰۰ تومان</span>
                    </div>
                    <div className='flex w-[6.3125rem] h-auto border border-[var(--color-custome-gray-4)] rounded-[8px]'>
                        <div className='w-[2rem] h-[2rem] flex justify-center items-center'>
                            <img src={ plus } alt=""/>
                        </div>
                        <hr className='w-[0.01rem] h-[2rem] border-none bg-[var(--color-custome-gray-4)]'/>
                        <div className='w-[2rem] h-[2rem] flex justify-center items-center'>
                            <img src={ one } alt=""/>
                        </div>
                        <hr className='w-[0.01rem] h-[2rem] border-none bg-[var(--color-custome-gray-4)]'/>
                        <div className='w-[2rem] h-[2rem] flex justify-center items-center'>
                            <img src={ minus } alt="" />
                        </div>
                    </div>
                </div>
                <div className='h-[2.5rem] w-full flex justify-end border-b border-[var(--color-custome-gray-4)] pb-[0.46875rem] pl-[0.5rem]'>
                    <span className='flex items-center gap-[0.25rem] whitespace-nowrap'>
                        <img src={ truckFast } alt="truck-fast" className='w-[1.5rem] h-[1.5rem]' />
                        ارسال از ۳ روز آینده
                    </span>
                </div>
            </div>
        </div>
     );
}
 
export default ShoppingCardProduct;