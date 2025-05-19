import { Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react';

import Navbar from "../components/Navbar";
import MainMenu from "../components/MainMenu";
import Footer from "../components/Footer";
import RatingStars from "../components/RatingStars";
import ReviewSection from '../components/ReviewSection';
import ReviewCard from '../components/ReviewCard';

import tshirt from '../assets/images/t-shirt.png'
import carouselDown from '../assets/icons/carousel-down.svg'
import arrowDown from '../assets/icons/arrow-down-red.svg'
import m from '../assets/icons/m.svg'
import magicPen from '../assets/icons/magicpen-red.svg'
import shoppingCardIcon from '../assets/icons/shopping-cart-white.svg'
import likeButton from '../assets/icons/like.svg'
import cancelCircleBlack from '../assets/icons/cancel-circle-black.svg'

const SelectedProduct = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const popupRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
            setIsPopupOpen(false);
        }
        }

        if (isPopupOpen) {
        document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isPopupOpen]);

    return ( 
        <>
            <Navbar />
            <MainMenu />
            {/* { isPopupOpen && (
                <ReviewCard />
            )} */}

            {isPopupOpen && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
                    <div
                    ref={popupRef}
                    className="bg-white py-[1.5rem] rounded-xl w-[40.5625rem] shadow-lg relative"
                    >
                    {/* Close button */}
                    <button
                        onClick={() => setIsPopupOpen(false)}
                        className="absolute top-[1.5rem] left-[1.5rem] cursor-pointer"
                    >
                    <img src={ cancelCircleBlack } alt="cancel-circle-black" className='w-[1.5rem] h-[1.5rem]'/>
                    </button>

                    {/* Popup content */}
                    <ReviewCard />
                    </div>
                </div>
                )}


            <div className="flex justify-center gap-[2rem] mt-[2rem]  mb-[2.6875rem]"> 
                <div className="flex gap-[2.25rem] w-[41.875rem] h-auto mb-[1.5rem]'">
                    {/* is this needed for the next line: mb-[1.3125rem] ? */}
                    <div className="w-auto h-auto flex flex-col justify-start items-center gap-[2.1875rem]">
                        <div className="w-[6.5rem] h-[30rem] flex flex-col gap-[1.666875rem]">
                            <img src={ tshirt } alt="t-shirt" className="w-[6.5rem] h-[6.25rem] rounded-[8px]"/>
                            <img src={ tshirt } alt="t-shirt" className="w-[6.5rem] h-[6.25rem] rounded-[8px]"/>
                            <img src={ tshirt } alt="t-shirt" className="w-[6.5rem] h-[6.25rem] rounded-[8px]"/>
                            <img src={ tshirt } alt="t-shirt" className="w-[6.5rem] h-[6.25rem] rounded-[8px]"/>
                        </div>
                        <div className="w-[3rem] h-[3rem] flex justify-center"> 
                            <img src={ carouselDown } alt="carousel-down" className="w-[2.5rem] h-[2.5rem]" />
                        </div>
                    </div>
                    <div className="w-full h-auto">
                        <img src={ tshirt } alt="t-shirt" className="w-[33.125rem] h-[36rem] rounded-[8px]" />
                    </div>
                </div>
                <div className="w-[32.625rem] mt-[2.6875rem]">
                    <div className="w-full h-auto">
                        <h4 className="text-2xl font-bold text-[var(--color-primary-shade-7)] pb-[1rem] border-b border-[var(--color-custome-gray-3)]">مشخصات محصول</h4>
                    </div>
                    <div className="w-auto h-auto flex flex-col gap-[0.75rem] text-[var(--color-custome-gray-9)] text-xl mt-[1.5rem]">
                        <div>جنس: نخ، پلی استر</div>
                        <div>شستشو: با دست</div>
                        <div>سایز ها: S, M, L, XL, XXL, XXXL </div>
                        <div>رنگ ها: مشکی، سفید، قرمز، سبز، نارنجی، زرشکی، بنفش</div>
                        <div>قد: ۶۰ سانتی متر </div>
                    </div>
                    <button className="flex gap-[0.5rem] py-[0.75rem] px-[1.5rem] border border-[var(--color-primary)] rounded-[8px] mt-[1rem]">
                        <img src={ m } alt="M" className="w-auto h-auto"/>
                        <img src={ arrowDown } alt="arrow-down-red" className="w-[1.5rem] h-[1.5rem]" />
                    </button>
                    <div className="flex justify-end mt-[0.4375rem]">
                        <div className="mt-[0.4375rem] flex flex-col flex-start w-[26rem] gap-[4rem]">
                            <h4 className="text-2xl font-bold text-left"> ۱۲۷,۰۰۰ تومان</h4>
                            <div className="flex justify-between w-[26rem] gap-[1.5rem]">
                                <button>
                                    <span className="flex text-[var(--color-primary)] gap-[0.5rem] p-[0.75rem] border border-[va(--color-primary)] rounded-[8px] border-[2px] whitespace-nowrap">
                                        <img src={ magicPen } alt="magic-pen" className="w-[1.5rem] h-[1.5rem]" />
                                        شخصی سازی محصول
                                    </span>
                                </button>
                                <button>
                                    <span className="flex text-white gap-[0.5rem] py-[0.75rem] px-[2rem] border bg-[var(--color-primary)] rounded-[8px] border-[2px] whitespace-nowrap">
                                        <img src={ shoppingCardIcon } alt="magic-pen" className="w-[1.5rem] h-[1.5rem]" />
                                        افزودن  به سبد
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center gap-[6.5rem]">
                <div className="!w-[18rem] h-[17.8125rem]">
                    <div className='outline outline-[var(--color-custome-gray-3)] rounded-[1rem]  p-[1.5rem]'>
                        <h4 className="text-[var(--color-primary-shade-7)] text-2xl font-bold !mb-[2rem]">امتیاز و دیدگاه کاربران</h4>
                        <div className="flex gap-[0.5rem]">
                            <h4 className="text-2xl font-bold !mb-[1.4375rem]">۴.۱</h4>
                            <h5 className="text-lg font-bold text-[var(--color-custome-gray-7)]">از ۵</h5>
                        </div>
                        <div className="flex gap-[0.5rem] items-center w-[13.375rem] h-[2rem] mb-[1rem]">
                            <RatingStars rating={4.1}/>
                            <span className="text-[var(--color-custome-gray-7)] text-xs">از  مجموع ۱۲۰ امتیاز</span>
                        </div>
                        <p className="text-[var(--color-custome-gray-8)] mb-[0.5rem]">نظر خود را ثبت کنید</p>
                        <button 
                            className="
                            text-[var(--color-primary)] 
                            border border-[] 
                            border-[var(--color-primary)] 
                            rounded-[8px] 
                            py-[0.75rem] 
                            px-[3rem] 
                            cursor-pointer
                            "
                            onClick={() => setIsPopupOpen(true)}
                        >ثبت دیدگاه</button>
                    </div>
                </div>
                <div className="mt-[4.9375rem] w-[52rem]">
                    <div className="mb-[1.5rem]">
                        <span className="flex itmes-center text-[var(--color-custome-gray-7)]">
                            <img src={ likeButton } alt="like-button" className="w-[1.5rme] h-[1.5rem]"/>
                            &nbsp;۷۰٪ ( ۱۲۰ نفر) از خرید این محصول رضایت داشته اند
                        </span>
                    </div>
                    <div className="flex gap-[1.5rem] mb-[1.0625rem]">
                        <img src={ tshirt } alt="tshirt" className="w-[5.5rem] h-[5.5rem] rounded-[8px]"/>
                        <img src={ tshirt } alt="tshirt" className="w-[5.5rem] h-[5.5rem] rounded-[8px]"/>
                        <img src={ tshirt } alt="tshirt" className="w-[5.5rem] h-[5.5rem] rounded-[8px]"/>
                    </div>
                    {/* mb-[1rem] doesn't work for the next line*/}
                    <Link className='text-[var(--color-custome-gray-9)]'>مشاهده بیشتر</Link>
                    <ReviewSection date='۱۶ آذر ۱۴۰۲' name='نگار زمانی' role='خریدار' comment='بسیار عالی و با کیفیت ' rating='3'/>
                    <ReviewSection date='۱۶ آذر ۱۴۰۲' name='نگار زمانی' role='خریدار' comment='بسیار عالی و با کیفیت ' rating='3'/>
                    <ReviewSection date='۱۶ آذر ۱۴۰۲' name='نگار زمانی' role='خریدار' comment='بسیار عالی و با کیفیت ' rating='3'/>
                </div>
            </div>
            <Footer />
        </>
     );
}
 
export default SelectedProduct;