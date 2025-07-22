import '../index.css'
import '../styles/base.css'
import '../styles/components.nav.css'

import instagram from '../assets/icons/instagram.svg'
import facebook from '../assets/icons/facebook.svg'
import pinterest from '../assets/icons/pinterest.svg'
import youtube from '../assets/icons/youtube.svg'

import e1 from '../assets/icons/e1.svg'
import e2 from '../assets/icons/e2.svg'
import e3 from '../assets/icons/e3.svg'

import HomeIcon2 from '../Icons/HomeIcon2'
import CustomDesign from '../Icons/CustomDesign'
import ShoppingCart from '../Icons/ShoppingCart'
import User from '../Icons/User'

const Footer = ({classname, special}) => {
    return ( 
        <div className={`${classname} w-[100vw]`}>

        {/* h-[33.4375rem] */}
        <div className="w-full h-auto relative text-white" style={{backgroundColor: "var(--color-primary)"}}>

            <div className={`${special}"w-full flex sm:justify-around h-[11.25rem] items-center sm:y-[1rem]"`} style={{ backgroundColor: "var(--color-primary-shade-6)"}}>
                <div className='sm:h-full sm:flex sm:items-center sm:justify-evenly'>
                    <div className="hidden sm:flex items-baseline-last gap-[0.75rem]">
                        <div className=" w-[29rem] h-[4.25rem] flex flex-col gap-[0.25rem]">
                            <label className='whitespace-nowrap' htmlFor="email-input">برای دریافت آخرین اخبار و تخفیف های جدید،ایمیل خود را وارد نمایید</label>
                            <input className="border rounded-[8px] w-full h-[2.5rem]" type="text" id="email-input" placeholder="ایمیل شما" />
                        </div>
                        {/* is this right? to make the button into an a tag? */}
                        <a href="#"><button action='submit' className="w-[5rem] h-[2.5rem] rounded-[8px]" style={{backgroundColor: "var(--color-primary)"}}>ثبت</button></a>
                    </div>    
                   
                    <div className="flex flex-col items-center gap-[1.5rem] !w-[30rem]">
                        <span className='hidden sm:block'>ما را در شبکه های اجتماعی دنبال کنید</span>
                        <div className='sm:hidden flex flex-col gap-[1rem]'>
                            <p className='flex'>
                                <span>تماس با پشتیبانی:</span>
                                <span>&nbsp;۰۲۱-۳۴۵۶۰۰۰</span>
                            </p>
                            <p>پاسخگویی ۲۴ ساعته ، ۷ روز هفته </p>
                        </div>
                        <div className='flex gap-[1.5rem]'>
                            <a href="#">
                                <img src={ youtube } alt="youtube" />
                            </a>
                            <a href="#">
                                <img src={ pinterest } alt="pinterest" />
                            </a>
                            <a href="#">
                                <img src={ facebook } alt="facebook" />
                            </a>
                            <a href="#">
                                <img src={ instagram } alt="instagram" />
                            </a>
                        </div>
                        <p className='sm:hidden'>تمام حقوق این وبسایت متعلق به فروشگاه آنلاین کاستومی می باشد</p>
                    </div>
                </div> 
            </div>

            <div className='hidden sm:flex justify-evenly mt-[3.3125rem]'>
                <div className="grid grid-cols-1 grid-cols-3 gap-8">
                    
                    <div className='flex flex-col gap-y-[1.5rem] text-base'>
                        <a href="#"><h3 className="font-bold inline-block border-b border-white mb-4 p-2">همراه با کاستومی</h3></a>
                        <ul className="flex flex-col gap-y-[1.75rem]">
                            <a href="#"><li>فروش محصولات</li></a>
                            <a href="#"><li>فرصت همکاری</li></a>
                            <a href="#"><li>تماس با ما</li></a>
                            <a href="#"><li>نقشه سایت</li></a>
                        </ul>
                    </div>


                    <div className='flex flex-col gap-y-[1.5rem] text-base'>
                        <a href="#"><h3 className="font-bold inline-block border-b border-white mb-4 p-2">خدمات مشتریان</h3></a>
                        <ul className="flex flex-col gap-y-[1.75rem]">
                            <a href="#"><li>سوالات متداول</li></a>
                            <a href="#"><li>حریم خصوصی</li></a>
                            <a href="#"><li>ثبت شکایت</li></a>
                            <a href="#"><li>ضمانت نامه محصولات</li></a>
                        </ul>
                    </div>
                
                    <div className='flex flex-col gap-y-[1.5rem] text-base'>
                        <a href="#"><h3 className="font-bold inline-block border-b border-white mb-4 p-2">راهنمای خرید</h3></a>
                        <ul className="flex flex-col gap-y-[1.75rem]">
                            <a href="#"><li>راهنمای ثبت سفارش</li></a>
                            <a href="#"><li>شیوه‌های پرداخت</li></a>
                            <a href="#"><li>نحوه ارسال سفارش‌ها</li></a>
                            <a href="#"><li>شرایط بازگرداندن محصولات</li></a>
                        </ul>
                    </div>
                </div>

               

                <div className='flex flex-col items-center justify-centre !w-[30rem]'>
                    <h6 className='text-lg font-bold'>فروشگاه اینترنتی کاستومی</h6>
                    <div className='flex whitespace-nowrap w-[23.25rem] h-[1.375rem] gap-[2rem] mt-[2.5625rem] text-sm'>
                        <span>تماس با پشتیبانی: ۰۲۱-۳۴۵۶۰۰۰</span>
                        <span>پاسخگویی ۲۴ ساعته ، ۷ روز هفته </span>
                    </div>
                    <div className='flex justify-between mt-[4.5rem] w-[14.125rem] h-[4rem]'>
                        <a href="#"><img src={ e1 } alt="e1" /></a>
                        <a href="#"><img src={ e2 } alt="e2" /></a>
                        <a href="#"><img src={ e3 } alt="e3" /></a>
                    </div>
                </div>

            </div>
            <div className="mt-8 mr-[6.75rem] text-[small] pb-[1.1875rem] hidden sm:block">
                تمام حقوق این وب‌سایت متعلق به فروشگاه آنلاین کاستومی می‌باشد
            </div>

            <div className='sm:hidden flex justify-center pb-[1.25rem] pt-[1rem]'>
                <div className='flex gap-[2rem]'>
                    <div className='w-fit h-[2.5rem] flex flex-col gap-[0.25rem] !justify-center items-center'>
                        <HomeIcon2 />
                        <p className='text-xs text-[var(--color-custome-gray-5)]'>خانه</p>
                    </div>
                    <div className='w-fit h-[2.5rem] flex flex-col gap-[0.25rem] !justify-center items-center'>
                        <CustomDesign />
                        <p className='text-xs text-[var(--color-custome-gray-5)]'>طراحی سفارشی</p>
                    </div>
                    <div className='w-fit h-[2.5rem] flex flex-col gap-[0.25rem] !justify-center items-center'>
                        <ShoppingCart />
                        <p className='text-xs text-[var(--color-custome-gray-5)]'>سبد خرید</p>
                    </div>
                    <div className='w-fit h-[2.5rem] flex flex-col gap-[0.25rem] !justify-center items-center'>
                        <User />
                        <p className='text-xs text-[var(--color-custome-gray-5)]'>پروفایل</p>
                    </div>
                </div>
            </div>

        </div>
        </div>
     );
}
 
export default Footer;