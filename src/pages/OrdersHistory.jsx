import '../index.css'
import '../styles/base.css'
import '../styles/components.nav.css'

import Navbar from '../components/Navbar'
import MainMenu from '../components/MainMenu'
import Footer from '../components/Footer'
import ProfileSidebar from '../components/ProfileSidebar'

import productPic from '../assets/images/product-image.svg'


const OrdersHistory = () => {
    return ( 
        <>
        <Navbar />
        <MainMenu />
        <div className='flex justify-center mt-[2rem] overflow-hidden'>
            <div className='flex gap-[1.5625rem]'>
                <ProfileSidebar />
                <div className='w-[50.5rem] h-[215.875rem]'>
                    <h2 className='font-extrabold'>تاریخچه ی سفارشات</h2>


                    <div className='w-full border-b' style={{ borderColor: "var(--color-custome-gray-4)"}}>
                        <div className="flex w-[27.5625rem] h-[2rem] gap-[1.6875rem]">
                            <button>جاری ۰</button>
                            <button>تحویل شده ۲۶</button>
                            <button>مرجوع شده ۴</button>
                            <button>لغو شده ۴</button>
                        </div>
                    </div>

                    <div>

                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
     );
}
 
export default OrdersHistory;