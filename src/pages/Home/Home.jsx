import '../../styles/base.css'
import '../../styles/home.css'

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import MainMenu from '../../components/MainMenu';
import ProductCard from '../../components/ProductCard';

import Hero from '../../assets/images/Hero.png'
import medalStar from '../../assets/icons/medal-star.svg'
import discountShape from '../../assets/icons/discount-shape.svg'
import productPic from '../../assets/images/product-image.svg'

const Home = () => {
    return (  
        <>
            <Navbar />
            <MainMenu />
            {/* todo: make the hero from scratch */}
            <div className='flex justify-center w-full my-[2.5rem]'>
                <img src={ Hero } alt="hero" className='w-[76.5rem] h-[27.75rem]' />
            </div>
            <div className='flex justify-center w-full'>
                <div className='flex items-center w-[76.5rem] whitespace-nowrap'>
                    <img src={ medalStar } alt="medal-star" />
                    <h4 className='text-2xl font-bold !mr-[0.5rem] !ml-[1.3125rem]'>دسته بندی محصولات</h4>
                    <hr className='w-full border-[var(--color-custome-gray-4)]' />
                </div>
            </div>
            <div className='flex justify-center w-full'>
                <div className='flex items-center w-[76.5rem] whitespace-nowrap'>
                    <img src={ medalStar } alt="medal-star" />
                    <h4 className='text-2xl font-bold !mr-[0.5rem] !ml-[1.3125rem]'>پر فروش ترین ها</h4>
                    <hr className='w-full border-[var(--color-custome-gray-4)]' />
                    <span className='py-[0.5rem] px-[1.53125rem] text-[var(--color-primary)] text-sm'>مشاهده بیشتر</span>
                </div>
            </div>
            <div className='w-full flex justify-center mt-[1.5rem] mb-[2.5rem]'>
                <div className='w-[76.5rem] h-auto flex flex-wrap gap-[1.5rem]'>
                    <ProductCard imageUrl={ productPic } productName="استیکر فرندز" productDescription="دارای رنگ بندی، قابل طراحی" price="۱۵۰,۰۰۰" />
                    <ProductCard imageUrl={ productPic } productName="استیکر فرندز" productDescription="دارای رنگ بندی، قابل طراحی" price="۱۵۰,۰۰۰" />
                    <ProductCard imageUrl={ productPic } productName="استیکر فرندز" productDescription="دارای رنگ بندی، قابل طراحی" price="۱۵۰,۰۰۰" />
                    <ProductCard imageUrl={ productPic } productName="استیکر فرندز" productDescription="دارای رنگ بندی، قابل طراحی" price="۱۵۰,۰۰۰" />
                    <ProductCard imageUrl={ productPic } productName="استیکر فرندز" productDescription="دارای رنگ بندی، قابل طراحی" price="۱۵۰,۰۰۰" />
                    <ProductCard imageUrl={ productPic } productName="استیکر فرندز" productDescription="دارای رنگ بندی، قابل طراحی" price="۱۵۰,۰۰۰" />
                    <ProductCard imageUrl={ productPic } productName="استیکر فرندز" productDescription="دارای رنگ بندی، قابل طراحی" price="۱۵۰,۰۰۰" />
                    <ProductCard imageUrl={ productPic } productName="استیکر فرندز" productDescription="دارای رنگ بندی، قابل طراحی" price="۱۵۰,۰۰۰" />
                </div>
            </div>
            <div className='flex justify-center w-full'>
                <div className='flex items-center w-[76.5rem] whitespace-nowrap'>
                    <img src={ discountShape } alt="discount-shape" />
                    <h4 className='text-2xl font-bold !mr-[0.5rem] !ml-[1.3125rem]'>فروش ویژه</h4>
                    <hr className='w-full border-[var(--color-custome-gray-4)]' />
                </div>
            </div>
            <Footer />
        </>
    );
}
 
export default Home;