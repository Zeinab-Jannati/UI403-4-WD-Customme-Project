import React, { useState, useEffect } from 'react';

import '../../styles/base.css';
import '../../styles/home.css';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import MainMenu from '../../components/MainMenu';
import ProductCard from '../../components/ProductCard';

import Hero from '../../assets/images/Hero.png';
import medalStar from '../../assets/icons/medal-star.svg';
import discountShape from '../../assets/icons/discount-shape.svg';
import { Link } from 'react-router-dom';

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
        <>
            <MainMenu />
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