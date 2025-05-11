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
            <div className='flex justify-center mt-[2rem] h-auto'>
                <div className='flex gap-[1.5625rem] h-auto p-[1.5rem]'>
                    <ProfileSidebar />
                    <div className='w-[50.5rem] h-auto  border border-[var(--color-custome-gray-3)] rounded-[16px] p-[1.5rem] mt-[4.0625rem] mb-[3.75rem] overflow-x-hidden'>
                        <h2 className='font-bold text-2xl'>سفارشات من</h2>
                        <OrderSummary />

                        <div className='border-b border-[var(--color-custome-gray-3)] pb-[1.5rem] w-full'>
                            <span className='flex justify-between items-center my-[1.5rem]'>
                                <h2 className='font-bold text-2xl'>علاقه مندی های من</h2>
                                <a href="#" className='w-[8rem] h-[2.5rem] text-[var(--color-primary)] flex items-center justify-center'>مشاهده بیشتر</a>
                            </span>
                            {/* todo: fix left carousel */}
                            <div className='relative flex gap-[1rem]'>
                                <ProductCard imageUrl={ productPic } productName="استیکر فرندز" productDescription="دارای رنگ بندی، قابل طراحی" price="۱۵۰,۰۰۰" />
                                <ProductCard imageUrl={ productPic } productName="استیکر فرندز" productDescription="دارای رنگ بندی، قابل طراحی" price="۱۵۰,۰۰۰" />
                                <ProductCard imageUrl={ productPic } productName="استیکر فرندز" productDescription="دارای رنگ بندی، قابل طراحی" price="۱۵۰,۰۰۰" />
                                <div className='overflow-visible absolute left-[-2rem] top-1/2 w-[2.5rem] h-[2.5rem] z-10'>
                                    <img src={ leftCarousel } alt="left-carousel" className='' />
                                </div>
                            </div>

                        </div>

                        <div className='border-b border-[var(--color-custome-gray-3)] pb-[1.5rem]'>
                            <span className='flex justify-between items-center my-[1.5rem]'>
                                <h2 className='font-bold text-2xl'>خرید های پرتکرار من </h2>
                                <a href="#" className='w-[8rem] h-[2.5rem] text-[var(--color-primary)] flex items-center justify-center'>مشاهده بیشتر</a>
                            </span>
                            <div className='flex gap-[1rem] relative'>
                                <ProductCard imageUrl={ productPic } productName="استیکر فرندز" productDescription="دارای رنگ بندی، قابل طراحی" price="۱۵۰,۰۰۰" />
                                <ProductCard imageUrl={ productPic } productName="استیکر فرندز" productDescription="دارای رنگ بندی، قابل طراحی" price="۱۵۰,۰۰۰" />
                                <ProductCard imageUrl={ productPic } productName="استیکر فرندز" productDescription="دارای رنگ بندی، قابل طراحی" price="۱۵۰,۰۰۰" />
                                <img src={ leftCarousel } alt="left-carousel" className='absolute left-0 top-1/2' />

                            </div>
                        </div>

                        <div>
                            <span className='flex justify-between items-center my-[1.5rem]'>
                                <h2 className='font-bold text-2xl'>گالری من</h2>
                                <a href="#" className='w-[8rem] h-[2.5rem] text-[var(--color-primary)] flex items-center justify-center'>مشاهده بیشتر</a>
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