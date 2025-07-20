import '../index.css'
import '../styles/base.css'
import '../styles/components.nav.css'

import Circles from './Circles'

import heartIcon from '../assets/icons/heart-icon.svg'

const ProductCard = (props) => {
    const imageUrl = props.imageUrl;
    const productName = props.productName;
    const productDescription = props.productDescription;
    const price = props.price;
    const id = props.id;

    return ( 
        <div className="border rounded-[16px] flex flex-col justify-center p-[1rem] w-[9.5rem] sm:w-[18rem] h-auto" style={{ borderColor: "var(--color-custome-gray-4)" }}>
            {/* <div className='rounded-full flex justify-center items-center'>
            </div> */}
            <div className='relative w-[6rem] sm:w-[16rem] h-[6rem] sm:h-[16rem]'>
                <img src={ imageUrl } alt="product-card-image" className='rounded-[8px] w-[6rem] sm:!w-[16rem] h-[6rem] sm:h-[16rem]' />
                <Circles />
            </div>
            <div className='flex flex-col gap-[0.75em]'>
                <div className='flex flex-col gap-[0.625rem]'>
                    <span className='flex w-full justify-between mt-[1rem]'>
                        <span className='font-bold text-[0.875rem] sm:text-[1.125rem]'>{ productName }</span>
                        <img src={ heartIcon } alt="heart-icon" />
                    </span>
                    <span className='text-[0.75rem] sm:text-[0.785rem]'>{ productDescription }</span>
                </div>
                <h3 className='font-semibold text-[1.125rem] sm:text-[1.25rem] text-left whitespace-nowrap'>{ price } تومان</h3>
            </div>
        </div>
     );
}
 
export default ProductCard;