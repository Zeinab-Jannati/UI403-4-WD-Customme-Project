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
import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

const UserProfile = () => {
    const [bestSellerProducts, setBestSellerProducts] = useState([]);
    const [loadingBestSellers, setLoadingBestSellers] = useState(true);
    const [errorBestSellers, setErrorBestSellers] = useState(null);

    useEffect(() => {
        const fetchBestSellerProducts = async () => {
            setLoadingBestSellers(true);
            setErrorBestSellers(null);
            const apiUrl = 'http://127.0.0.1:8000/api/products/?sort_by=best_sellers';
            
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    const contentType = response.headers.get("content-type");
                    if (contentType && contentType.indexOf("application/json") !== -1) {
                        const errorData = await response.json(); 
                        throw new Error(errorData.detail || errorData.message || `فراخوانی علاقه مندیها با مشکل مواجه شد: ${response.status}`);
                    } else {
                        throw new Error(`فراخوانی علاقه مندیها با مشکل مواجه شد. کد وضعیت: ${response.status}`);
                    }
                }
                const data = await response.json();
                console.log("محصولات علاقه مندی دریافت شده:", data.results);
                setBestSellerProducts(data.results);
            } catch (err) {
                console.error("خطا در گرفتن علاقه مندیها:", err);
                setErrorBestSellers(err.message);
            } finally {
                setLoadingBestSellers(false);
            }
        };

        fetchBestSellerProducts();
    }, []);
    return ( 
        <>
            <MainMenu />
            <div className='flex justify-center mt-[2rem] h-auto'>
                <div className='flex gap-[1.5625rem] h-auto p-[1.5rem]'>
                    <ProfileSidebar/>
                    <div className='w-[50.5rem] h-auto  border border-[var(--color-custome-gray-3)] rounded-[16px] p-[1.5rem] mt-[4.0625rem] mb-[3.75rem] overflow-x-hidden'>
                        <h2 className='font-bold text-2xl'>سفارشات من</h2>
                        <OrderSummary />

                        <div className='border-b border-[var(--color-custome-gray-3)] pb-[1.5rem] w-full'>
                            <span className='flex justify-between items-center my-[1.5rem]'>
                                <h2 className='font-bold text-2xl'>علاقه مندی های من</h2>
                                <a href="#" className='w-[8rem] h-[2.5rem] text-[var(--color-primary)] flex items-center justify-center'>مشاهده بیشتر</a>
                            </span>
                            {/* todo: fix left carousel */}
                            {/* <div className='relative flex gap-[1rem]'>
                                <ProductCard imageUrl={ productPic } productName="استیکر فرندز" productDescription="دارای رنگ بندی، قابل طراحی" price="۱۵۰,۰۰۰" />
                                <ProductCard imageUrl={ productPic } productName="استیکر فرندز" productDescription="دارای رنگ بندی، قابل طراحی" price="۱۵۰,۰۰۰" />
                                <ProductCard imageUrl={ productPic } productName="استیکر فرندز" productDescription="دارای رنگ بندی، قابل طراحی" price="۱۵۰,۰۰۰" />
                                <div className='overflow-visible absolute left-[-2rem] top-1/2 w-[2.5rem] h-[2.5rem] z-10'>
                                    <img src={ leftCarousel } alt="left-carousel" className='' />
                                </div>
                            </div> */}

                            <div className='relative w-full flex justify-center mt-[1.5rem] mb-[2.5rem]'>
                                <div className='w-[76.5rem] h-auto flex flex-wrap gap-[1.5rem]'>
                                    {loadingBestSellers && <p className='text-center w-full'>در حال بارگذاری پرفروش‌ترین‌ها...</p>}
                                    {errorBestSellers && <p className='text-center w-full text-red-500'>خطا در دریافت پرفروش‌ترین‌ها: {errorBestSellers}</p>}
                                    {!loadingBestSellers && !errorBestSellers && bestSellerProducts.length === 0 && <p className='text-center w-full'>محصول پرفروشی یافت نشد.</p>}

                                    {!loadingBestSellers && bestSellerProducts.map(product => (
                                        <Link key={product.id} to={`/product/${product.id}`}>
                                            <ProductCard 
                                                key={product.id} 
                                                id={product.id}
                                                imageUrl={product.image_url}
                                                productName={product.name} 
                                                productDescription={product.description} 
                                                price={product.price} 
                                            />
                                        </Link>
                                    ))}
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