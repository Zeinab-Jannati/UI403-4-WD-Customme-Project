import '../index.css'
import '../styles/base.css'
import '../styles/components.nav.css'

import Footer from '../components/Footer'
import MainMenu from '../components/MainMenu'
import ProductCard from '../components/ProductCard'
import Filter from '../components/Filter.jsx'
import Pagination from '../components/Pagination'

import productPic from '../assets/images/product-image.svg'

const OtherProduct = () => {
    return ( 
        <>
            <MainMenu />
            <div className='flex justify-center gap-[1.2rem] mt-[1.25rem]'>
                <Filter />
                {/*  h-[83.4375rem] */}
                <div className='h-auto'>
                    <div className="flex gap-[2.5rem] mb-[1.5rem] mr-[0.5rem]">
                        <a href="#" className="my-[0.5rem] mb-[0.34375rem]">پربازدیدترین </a>
                        <a href="#" className="my-[0.5rem] mb-[0.34375rem]">جدیدترین</a>
                        <a href="#" className="my-[0.5rem] mb-[0.34375rem]">پرفروش ترین</a>
                        <a href="#" className="my-[0.5rem] mb-[0.34375rem]">گران ترین</a>
                        <a href="#" className="my-[0.5rem] mb-[0.34375rem]">ارزان ترین</a>
                    </div>
                    <div className='flex flex-wrap w-[57rem] gap-[1.25rem] justify-center'>
                        <ProductCard imageUrl={ productPic } productName="استیکر فرندز" productDescription="دارای رنگ بندی، قابل طراحی" price="۱۵۰,۰۰۰" />
                        <ProductCard imageUrl={ productPic } productName="استیکر فرندز" productDescription="دارای رنگ بندی، قابل طراحی" price="۱۵۰,۰۰۰" />
                        <ProductCard imageUrl={ productPic } productName="استیکر فرندز" productDescription="دارای رنگ بندی، قابل طراحی" price="۱۵۰,۰۰۰" />
                        <ProductCard imageUrl={ productPic } productName="استیکر فرندز" productDescription="دارای رنگ بندی، قابل طراحی" price="۱۵۰,۰۰۰" />
                        <ProductCard imageUrl={ productPic } productName="استیکر فرندز" productDescription="دارای رنگ بندی، قابل طراحی" price="۱۵۰,۰۰۰" />
                        <ProductCard imageUrl={ productPic } productName="استیکر فرندز" productDescription="دارای رنگ بندی، قابل طراحی" price="۱۵۰,۰۰۰" />
                        <ProductCard imageUrl={ productPic } productName="استیکر فرندز" productDescription="دارای رنگ بندی، قابل طراحی" price="۱۵۰,۰۰۰" />
                        <ProductCard imageUrl={ productPic } productName="استیکر فرندز" productDescription="دارای رنگ بندی، قابل طراحی" price="۱۵۰,۰۰۰" />
                        <ProductCard imageUrl={ productPic } productName="استیکر فرندز" productDescription="دارای رنگ بندی، قابل طراحی" price="۱۵۰,۰۰۰" />

                    </div>
                    <Pagination />
                </div>
            </div>
            <Footer />
        </>
     );
}
 
export default OtherProduct;