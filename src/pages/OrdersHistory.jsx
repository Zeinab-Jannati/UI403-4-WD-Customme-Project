import '../index.css'
import '../styles/base.css'
import '../styles/components.nav.css'

import Navbar from '../components/Navbar'
import MainMenu from '../components/MainMenu'
import Footer from '../components/Footer'
import ProfileSidebar from '../components/ProfileSidebar'
import OrderStatus from '../components/OrderStatus'

import productPic from '../assets/images/product-image.svg'

import leftCarousel from '../assets/icons/left-carousel.svg'
import rightCarousel from '../assets/icons/right-carousel.svg'


const OrdersHistory = () => {
    return ( 
        <>
        <Navbar />
        <MainMenu />
        <div className='flex justify-center mt-[2rem]'>
            <div className='flex gap-[1.5625rem]'>
                <ProfileSidebar />
                {/* todo: h-[215.875rem] */}
                <div className='w-[50.5rem] h-auto'>
                    <div className='border rounded-[16px] flex flex-col flex-1 p-[1.5rem]' style={{ borderColor: "var(--color-custome-gray-4)"}}>
                        <h2 className='font-extrabold mb-[2rem]' style={{ marginBottom: "2rem"}}>تاریخچه ی سفارشات</h2>
                        <div className='w-[47.5rem] border-b' style={{ borderColor: "var(--color-custome-gray-4)"}}>
                            <div className="flex w-[27.5625rem] h-[2rem] gap-[1.6875rem] mb-[1rem]">
                                <button>جاری ۰</button>
                                <button>تحویل شده ۲۶</button>
                                <button>مرجوع شده ۴</button>
                                <button>لغو شده ۴</button>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[1.5rem]'>
                            <OrderStatus />
                            <OrderStatus />
                            <OrderStatus />
                            <OrderStatus />
                            <OrderStatus />
                            <OrderStatus />
                            <OrderStatus />
                            <OrderStatus />
                            <OrderStatus />
                            <OrderStatus />
                            <OrderStatus />
                        </div>
                    </div>
                    <div className='flex w-[50.5rem] h-[3.5rem] mb-[3.5rem] mt-[1rem] gap-[0.75rem] items-center justify-between'>
                        <img src={ rightCarousel } alt="right-carousel" className='w-[2.5rem] h-[2.5rem]' />
                        <div className='rounded-[2rem] border justify-center items-center flex py-[0.75rem] px-[2.3125rem]' style={{ borderColor: "var(--color-custome-gray-4)"}}>
                            <div className='flex gap-[1.5rem]'>
                                <div className='w-[2rem] h-[2rem] rounded-full border text-center'>۵۰</div>
                                <div className='w-[2rem] h-[2rem] rounded-full text-center'>...</div>
                                <div className='w-[2rem] h-[2rem] rounded-full border text-center'>۹</div>
                                <div className='w-[2rem] h-[2rem] rounded-full border text-center'>۸</div>
                                <div className='w-[2rem] h-[2rem] rounded-full border text-center'>۷</div>
                                <div className='w-[2rem] h-[2rem] rounded-full border text-center'>۶</div>
                                <div className='w-[2rem] h-[2rem] rounded-full border text-center'>۵</div>
                                <div className='w-[2rem] h-[2rem] rounded-full border text-center'>۴</div> 
                                <div className='w-[2rem] h-[2rem] rounded-full border text-center'>۳</div>
                                <div className='w-[2rem] h-[2rem] rounded-full border text-center'>۲</div>
                                <div className='w-[2rem] h-[2rem] rounded-full border text-center'>۱</div>
                            </div>
                        </div>
                        <img src={ leftCarousel } alt="left-carousel" className='w-[2.5rem] h-[2.5rem]'/>
                       
                    </div>

                </div>
            </div>
        </div>
        <Footer />
        </>
     );
}
 
export default OrdersHistory;