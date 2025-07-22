import React, { useState, useEffect } from 'react';

import '../../styles/base.css';
import '../../styles/home.css';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import MainMenu from '../../components/MainMenu';
import ProductCard from '../../components/ProductCard';
import DesignCard from '../../components/DesignCard';
import DesignerCard from '../../components/DesignerCard';

import Hero from '../../assets/images/Hero.png';
import medalStar from '../../assets/icons/medal-star.svg';
import discountShape from '../../assets/icons/discount-shape.svg';
import { Link } from 'react-router-dom';

import ScrollLeft from '../../Icons/ScrollLeft';
import ScrollRight from '../../Icons/ScrollRight';
import pic from '../../assets/images/piccc.svg'
import leftCarousel from '../../assets/icons/left-carousel.svg'
import productPic from '../../assets/images/product-image.svg'
import star from '../../assets/icons/star.svg'
import like from '../../assets/icons/like.svg'

const Home = () => {
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
                        throw new Error(errorData.detail || errorData.message || `فراخوانی پرفروش‌ترین‌ها با مشکل مواجه شد: ${response.status}`);
                    } else {
                        throw new Error(`فراخوانی پرفروش‌ترین‌ها با مشکل مواجه شد. کد وضعیت: ${response.status}`);
                    }
                }
                const data = await response.json();
                console.log("محصولات پرفروش دریافت شده:", data.results);
                setBestSellerProducts(data.results);
            } catch (err) {
                console.error("خطا در گرفتن پرفروش‌ترین‌ها:", err);
                setErrorBestSellers(err.message);
            } finally {
                setLoadingBestSellers(false);
            }
        };

        fetchBestSellerProducts();
    }, []);

    return ( 
        <div className='flex flex-col min-h-screen'>
            <MainMenu />
            <div className='flex-grow w-full mx-auto px-[1.25rem] sm:px-0'>

                <div className='flex justify-center w-full my-[2.5rem]'>
                    <img src={ Hero } alt="hero" className='w-[20rem] h-[19.8125rem] sm:w-[50rem] sm:h-[27.75rem] md:w-[76.5rem] md:h-[27.75rem]' />
                </div>
                <div className="flex justify-center w-full mt-[2.5rem]">
                    <div className='flex w-full justify-center items-center max-w-[76.5rem] px-[1.25rem] sm:px-0 whitespace-nowrap'>
                        <div className='flex items-center flex-grow'>
                            <img src={ medalStar } alt="medal-star" className='hidden sm:block' />
                            <h4 className='text-[0.875rem] sm:text-2xl font-bold'>دسته بندی محصولات</h4>
                            <hr className='w-full border-[var(--color-custome-gray-4)] hidden sm:block' />
                        </div>
                        <div className='flex items-center gap-[0.25rem]'>
                            <ScrollRight/>
                            <ScrollLeft/>
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-center'>
                    <div className='w-[20rem] sm:w-full flex justify-center mt-[0.75rem] sm:mt-[1.5rem]'>
                        <div 
                            className='
                                sm:!w-[76.5rem] 
                                flex 
                                gap-[0.75rem]
                                sm:gap-[1.5rem]

                                overflow-x-auto
                                whitespace-nowrap
                            
                                '>
                            <div className='
                                !w-fit
                                !h-fit
                                border 
                                border-[var(--color-custome-gray-4)] 
                                rounded-[0.5rem] 
                                sm:rounded-[1rem] 
                                flex 
                                flex-col 
                                items-center 
                                justify-center 
                                p-[0.25rem]
                                sm:p-[0.5rem]'>
                                <img src={ pic } alt="" className='
                                                            w-[3.75rem]
                                                            h-[2rem]
                                                            sm:w-[10.5rem] 
                                                            sm:h-[4.9375rem] 
                                                            gap-[0.5rem] 
                                                            rounded-[4px]
                                                            sm:rounded-[0.5rem]'
                                                            />
                                <p className='text-[0.625rem] sm:text-[0.875rem]'>قاب موبایل</p>
                            </div>
                            <div className='
                                !w-fit
                                !h-fit
                                border 
                                border-[var(--color-custome-gray-4)] 
                                rounded-[0.5rem] 
                                sm:rounded-[1rem] 
                                flex 
                                flex-col 
                                items-center 
                                justify-center 
                                p-[0.25rem]
                                sm:p-[0.5rem]'>
                                <img src={ pic } alt="" className='
                                                            w-[3.75rem]
                                                            h-[2rem]
                                                            sm:w-[10.5rem] 
                                                            sm:h-[4.9375rem] 
                                                            gap-[0.5rem] 
                                                            rounded-[4px]
                                                            sm:rounded-[0.5rem]'
                                                            />
                                <p className='text-[0.625rem] sm:text-[0.875rem]'>قاب موبایل</p>
                            </div>
                            <div className='
                                !w-fit
                                !h-fit
                                border 
                                border-[var(--color-custome-gray-4)] 
                                rounded-[0.5rem] 
                                sm:rounded-[1rem] 
                                flex 
                                flex-col 
                                items-center 
                                justify-center 
                                p-[0.25rem]
                                sm:p-[0.5rem]'>
                                <img src={ pic } alt="" className='
                                                            w-[3.75rem]
                                                            h-[2rem]
                                                            sm:w-[10.5rem] 
                                                            sm:h-[4.9375rem] 
                                                            gap-[0.5rem] 
                                                            rounded-[4px]
                                                            sm:rounded-[0.5rem]'
                                                            />
                                <p className='text-[0.625rem] sm:text-[0.875rem]'>قاب موبایل</p>
                            </div>
                            <div className='
                                !w-fit
                                !h-fit
                                border 
                                border-[var(--color-custome-gray-4)] 
                                rounded-[0.5rem] 
                                sm:rounded-[1rem] 
                                flex 
                                flex-col 
                                items-center 
                                justify-center 
                                p-[0.25rem]
                                sm:p-[0.5rem]'>
                                <img src={ pic } alt="" className='
                                                            w-[3.75rem]
                                                            h-[2rem]
                                                            sm:w-[10.5rem] 
                                                            sm:h-[4.9375rem] 
                                                            gap-[0.5rem] 
                                                            rounded-[4px]
                                                            sm:rounded-[0.5rem]'
                                                            />
                                <p className='text-[0.625rem] sm:text-[0.875rem]'>قاب موبایل</p>
                            </div>
                            <div className='
                                !w-fit
                                !h-fit
                                border 
                                border-[var(--color-custome-gray-4)] 
                                rounded-[0.5rem] 
                                sm:rounded-[1rem] 
                                flex 
                                flex-col 
                                items-center 
                                justify-center 
                                p-[0.25rem]
                                sm:p-[0.5rem]'>
                                <img src={ pic } alt="" className='
                                                            w-[3.75rem]
                                                            h-[2rem]
                                                            sm:w-[10.5rem] 
                                                            sm:h-[4.9375rem] 
                                                            gap-[0.5rem] 
                                                            rounded-[4px]
                                                            sm:rounded-[0.5rem]'
                                                            />
                                <p className='text-[0.625rem] sm:text-[0.875rem]'>قاب موبایل</p>
                            </div>
                            <div className='
                                !w-fit
                                !h-fit
                                border 
                                border-[var(--color-custome-gray-4)] 
                                rounded-[0.5rem] 
                                sm:rounded-[1rem] 
                                flex 
                                flex-col 
                                items-center 
                                justify-center 
                                p-[0.25rem]
                                sm:p-[0.5rem]'>
                                <img src={ pic } alt="" className='
                                                            w-[3.75rem]
                                                            h-[2rem]
                                                            sm:w-[10.5rem] 
                                                            sm:h-[4.9375rem] 
                                                            gap-[0.5rem] 
                                                            rounded-[4px]
                                                            sm:rounded-[0.5rem]'
                                                            />
                                <p className='text-[0.625rem] sm:text-[0.875rem]'>قاب موبایل</p>
                            </div>
                    </div>
                </div>
                </div>
                


                <div className='flex justify-center w-full mt-[2.5rem]'>
                    <div className='flex w-full justify-center items-center max-w-[76.5rem] px-[1.25rem] sm:px-0 whitespace-nowrap'>
                        <div className="flex justify-between items-center w-[20rem] sm:w-[76.5rem] whitespace-nowrap">
                            <img src={ medalStar } alt="medal-star" className='hidden sm:block' />
                            <h4 className='text-[0.875rem] sm:text-2xl font-bold !mr-[0.5rem] !ml-[1.3125rem]'>پر فروش ترین ها</h4>
                            <hr className='hidden sm:block w-full border-[var(--color-custome-gray-4)]' />
                            <span className='py-[0.5rem] px-[1.53125rem] text-[var(--color-primary)] text-[0.625rem] sm:text-sm'>مشاهده بیشتر</span>
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-center mt-[1.5rem] mb-[2.5rem]'>
                    <div className='w-full h-auto flex flex-wrap justify-center sm:justify-start gap-[1rem] sm:gap-[1.5rem]'>
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

                
                <div className="flex justify-center w-full mt-[1.4735rem] sm:mt-[2.5rem]">
                    <div className='flex w-full justify-center items-center max-w-[76.5rem] px-[1.25rem] sm:px-0 whitespace-nowrap'>
                        <div className='flex items-center w-[20rem] sm:w-[76.5rem] whitespace-nowrap'>
                            <img src={ medalStar } alt="medal-star" className='hidden sm:block' />
                            <h4 className='text-[0.875rem] sm:text-2xl font-bold !mr-[0.5rem] !ml-[1.3125rem]'>فروش ویژه</h4>
                            <hr className='w-full border-[var(--color-custome-gray-4)] hidden sm:block' />
                        </div>
                    </div>
                </div>

                <div className='flex justify-center w-full mt-[2.5rem]'>
                    <div className='flex w-full justify-center items-center max-w-[76.5rem] px-[1.25rem] sm:px-0 whitespace-nowrap'>
                        <div className="flex justify-between items-center w-[20rem] sm:w-[76.5rem] whitespace-nowrap">
                            <img src={ medalStar } alt="medal-star" className='hidden sm:block' />
                            <h4 className='text-[0.875rem] sm:text-2xl font-bold !mr-[0.5rem] !ml-[1.3125rem]'>طرح‌های پرطرفدار</h4>
                            <hr className='hidden sm:block w-full border-[var(--color-custome-gray-4)]' />
                            <span className='py-[0.5rem] px-[1.53125rem] text-[var(--color-primary)] text-[0.625rem] sm:text-sm'>مشاهده بیشتر</span>
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-center mt-[1.5rem] mb-[2.5rem]'>
                    <div className='w-full h-auto flex flex-wrap justify-center sm:justify-start gap-[1rem] sm:gap-[1.5rem]'>
                        {loadingBestSellers && <p className='text-center w-full'>در حال بارگذاری پرفروش‌ترین‌ها...</p>}
                        {errorBestSellers && <p className='text-center w-full text-red-500'>خطا در دریافت پرفروش‌ترین‌ها: {errorBestSellers}</p>}
                        {!loadingBestSellers && !errorBestSellers && bestSellerProducts.length === 0 && <p className='text-center w-full'>محصول پرفروشی یافت نشد.</p>}

                        {!loadingBestSellers && bestSellerProducts.map(product => (
                            <Link key={product.id} to={`/product/${product.id}`}>
                                <DesignCard
                                    key={product.id} 
                                    id={product.id}
                                    imageUrl={product.image_url}
                                    productName={product.name} 
                                    productDescription={product.description} 
                                />
                            </Link>
                        ))}
                    </div>
                </div>
                

                <div className="flex justify-center w-full mt-[1.4735rem] sm:mt-[2.5rem]">
                    <div className='flex w-full justify-center items-center max-w-[76.5rem] px-[1.25rem] sm:px-0 whitespace-nowrap'>
                        <div className='flex items-center w-[20rem] sm:w-[76.5rem] whitespace-nowrap'>
                            <img src={ star } alt="star" className='hidden sm:block w-[2.5rem] h-[2.5rem]' />
                            <h4 className='text-[0.875rem] sm:text-[1.5rem] font-bold !mr-[0.5rem] !ml-[1.3125rem]'>طراحان برتر</h4>
                            <hr className='w-full border-[var(--color-custome-gray-4)] hidden sm:block' />
                        </div>
                    </div>
                </div>

                <div className='w-full flex justify-center mt-[1.5rem] mb-[2.5rem]'>
                    <div className='w-full h-auto flex flex-wrap justify-center sm:justify-start gap-[1rem] sm:gap-[1.5rem]'>
                        <DesignerCard />
                        <DesignerCard />
                        <DesignerCard />
                        <DesignerCard />
                        <DesignerCard />
                    </div>
                </div>

                <div className="flex justify-center w-full mt-[1.4735rem] sm:mt-[2.5rem]">
                    <div className='flex w-full justify-center items-center max-w-[76.5rem] px-[1.25rem] sm:px-0 whitespace-nowrap'>
                        <div className='flex items-center w-[20rem] sm:w-[76.5rem] whitespace-nowrap'>
                            <img src={ like } alt="like" className='hidden sm:block w-[2.5rem] h-[2.5rem]' />
                            <h4 className='text-[0.875rem] sm:text-[1.5rem] font-bold !mr-[0.5rem] !ml-[1.3125rem]'>علاقه‌مندی‌ها</h4>
                            <hr className='w-full border-[var(--color-custome-gray-4)] hidden sm:block' />
                        </div>
                    </div>
                </div>

                <div className='relative w-full flex gap-[1rem] overflow-hidden'>
                    <ProductCard imageUrl={ productPic } productName="استیکر فرندز" productDescription="دارای رنگ بندی، قابل طراحی" price="۱۵۰,۰۰۰" />
                    <ProductCard imageUrl={ productPic } productName="استیکر فرندز" productDescription="دارای رنگ بندی، قابل طراحی" price="۱۵۰,۰۰۰" />
                    <ProductCard imageUrl={ productPic } productName="استیکر فرندز" productDescription="دارای رنگ بندی، قابل طراحی" price="۱۵۰,۰۰۰" />
                    <img src={ leftCarousel } alt="left-carousel" className='absolute left-0 top-1/2 hidden sm:block' />
                </div>

            </div>

            <Footer special="" />
        </div>
    );
}
 
export default Home;