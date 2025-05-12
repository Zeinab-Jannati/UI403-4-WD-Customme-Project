import closeCircle from '../assets/icons/close-square.svg'
import productPic from '../assets/images/product-image.svg'
import closeSquare from '../assets/icons/close-square.svg'
import minus from '../assets/icons/-.svg'
import plus from '../assets/icons/+.svg'
import one from '../assets/icons/1.svg'

const ShappingCardProduct = () => {
    return ( 
        <div className="w-[50.5rem] h-auto border-b border-[var(--color-custome-gray-4)]">
            <div className="w-full h-auto">
                <div className='w-full h-auto flex gap-[1.5rem] items-center'>
                    <img src={ closeSquare } alt="close-square" />
                    <img src={ productPic } alt="product-pic" className='w-[7.875rem] h-[7.5rem]' />
                    <span className='w-[14.8125rem] h-auto flex justify-between whitespace-nowrap text-sm font-bold'>
                        <span>تیشرت سفید طرح دار</span>
                        <span>۲۴۰.۰۰۰ تومان</span>
                    </span>
                </div>
                <div className='flex w-[6.3125rem] h-auto border border-[var(--color-custome-gray-4)] rounded-[8px]'>
                    <img src={ minus } alt="" />
                    <hr className='w-[0.5rem] h-full border-[--color-custome-gray-4]'/>
                    <img src={ plus } alt="" />
                    <img src={ one } alt="" />
                </div>
            </div>
        </div>
     );
}
 
export default ShappingCardProduct;