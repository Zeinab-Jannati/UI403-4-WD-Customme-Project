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

    return ( 
        <div className="border rounded-[16px] flex flex-col p-[1rem] w-[18rem] h-[26.8125rem]" style={{ borderColor: "var(--color-custome-gray-4)" }}>
            {/* <div className='rounded-full flex justify-center items-center'>
            </div> */}
            <div className='relative  w-[16rem] h-[16rem]'>
                <img src={ imageUrl } alt="product-card-image" className='rounded-[8px] w-[16rem] h-[16rem]' />
                <Circles />
            </div>
            <div className='flex flex-col gap-[0.75em]'>
                <div className='flex flex-col gap-[0.625rem]'>
                    <span className='flex w-full justify-between mt-[1rem]'>
                        <span className='font-bold text-xl'>{ productName }</span>
                        <img src={ heartIcon } alt="heart-icon" />
                    </span>
                    <span>{ productDescription }</span>
                </div>
                <h3 className='font-semibold text-xl text-left'>{ price } تومان</h3>
            </div>
        </div>
     );
}
 
export default ProductCard;