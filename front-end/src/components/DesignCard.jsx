import heartIcon from '../assets/icons/heart-icon.svg'

const DesignCard = (props) => {
    const imageUrl = props.imageUrl;
    const productName = props.productName;
    const productDescription = props.productDescription;
    const id = props.id;
    return ( 
    <>
        <div className="border rounded-[16px] flex flex-col justify-center p-[1rem] w-[9.5rem] sm:w-[18rem] h-auto" style={{ borderColor: "var(--color-custome-gray-4)" }}>
            {/* <div className='rounded-full flex justify-center items-center'>
            </div> */}
            <div className='relative w-[6rem] sm:w-[16rem] h-[6rem] sm:h-[16rem]'>
                <img src={ imageUrl } alt="product-card-image" className='rounded-[8px] w-[6rem] sm:!w-[16rem] h-[6rem] sm:h-[16rem]' />
            </div>
            <div className='flex flex-col gap-[0.75em]'>
                <div className='flex flex-col gap-[0.625rem]'>
                    <span className='flex w-full justify-between mt-[1rem]'>
                        <span className='font-bold text-[0.875rem] sm:text-[1.125rem]'>{ productName }</span>
                        <img src={ heartIcon } alt="heart-icon" />
                    </span>
                    <span className='text-[0.75rem] sm:text-[0.785rem]'>{ productDescription }</span>
                </div>
                <button className='w-full h-[2.5rem] border border-[var(--color-primary)] rounded-[8px] text-[var(--color-primary)] text-[0.875rem]'>افزودن به گالری</button>
            </div>
        </div>
    </> );
}
 
export default DesignCard;