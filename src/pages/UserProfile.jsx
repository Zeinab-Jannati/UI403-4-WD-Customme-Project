import '../index.css'
import '../styles/base.css'
import '../styles/components.nav.css'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MainMenu from '../components/MainMenu'
import ProfileSidebar from '../components/ProfileSidebar'
import ProductCard from '../components/ProductCard'
import OrderSummary from '../components/OrdersSummary'

import productPic from '../assets/images/product-image.svg'
import leftCarousel from '../assets/icons/left-carousel.svg'

const UserProfile = () => {
    return ( 
        <>
            <Navbar />
            <MainMenu />
            <div className='flex justify-center mt-[2rem] overflow-hidden'>
                <div className='flex gap-[1.5625rem]'>
                    <ProfileSidebar />
                    <div className='w-[50.5rem] h-[104.125rem]  border border-black rounded-[16px] p-[1.5rem] mb-[3.75rem] h-auto'>
                        <h2 className='font-bold text-2xl'>سفارشات من</h2>
                        <OrderSummary />

                        <div>
                            <span className='flex justify-between my-[1.5rem]'>
                                <h2 className='font-bold text-2xl'>علاقه مندی های من</h2>
                                <a href="#">مشاهده بیشتر</a>
                            </span>
                            <div className='flex gap-[1rem] relative'>
                                <ProductCard imageUrl={ productPic } productName="استیکر فرندز" productDescription="دارای رنگ بندی، قابل طراحی" price="۱۵۰,۰۰۰" />
                                <ProductCard imageUrl={ productPic } productName="استیکر فرندز" productDescription="دارای رنگ بندی، قابل طراحی" price="۱۵۰,۰۰۰" />
                                <ProductCard imageUrl={ productPic } productName="استیکر فرندز" productDescription="دارای رنگ بندی، قابل طراحی" price="۱۵۰,۰۰۰" />
                                <img src={ leftCarousel } alt="left-carousel" className='absolute left-0 top-1/2' />
                            </div>

                        </div>

                        <div>
                            <span className='flex justify-between my-[1.5rem]'>
                                <h2 className='font-bold text-2xl'>خرید های پرتکرار من </h2>
                                <a href="#">مشاهده بیشتر</a>
                            </span>
                            <div className='flex gap-[1rem] relative'>
                                <ProductCard imageUrl={ productPic } productName="استیکر فرندز" productDescription="دارای رنگ بندی، قابل طراحی" price="۱۵۰,۰۰۰" />
                                <ProductCard imageUrl={ productPic } productName="استیکر فرندز" productDescription="دارای رنگ بندی، قابل طراحی" price="۱۵۰,۰۰۰" />
                                <ProductCard imageUrl={ productPic } productName="استیکر فرندز" productDescription="دارای رنگ بندی، قابل طراحی" price="۱۵۰,۰۰۰" />
                                <img src={ leftCarousel } alt="left-carousel" className='absolute left-0 top-1/2' />

                            </div>
                        </div>

                        <div>
                            <span className='flex justify-between my-[1.5rem]'>
                                <h2 className='font-bold text-2xl'>گالری من</h2>
                                <a href="#">مشاهده بیشتر</a>
                            </span>
                            <div className='flex gap-[1rem] relative'>
                                <ProductCard imageUrl={ productPic } productName="استیکر فرندز" productDescription="دارای رنگ بندی، قابل طراحی" price="۱۵۰,۰۰۰" />
                                <ProductCard imageUrl={ productPic } productName="استیکر فرندز" productDescription="دارای رنگ بندی، قابل طراحی" price="۱۵۰,۰۰۰" />
                                <ProductCard imageUrl={ productPic } productName="استیکر فرندز" productDescription="دارای رنگ بندی، قابل طراحی" price="۱۵۰,۰۰۰" />
                                <img src={ leftCarousel } alt="left-carousel" className='absolute left-0 top-1/2' />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
     );
}
 
export default UserProfile;