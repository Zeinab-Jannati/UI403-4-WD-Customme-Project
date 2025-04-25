import '../index.css'
import '../styles/base.css'
import '../styles/components.nav.css'

import userAvatar from '../assets/icons/user-avatar.svg'
import camera from '../assets/icons/camera.svg'
import plusIcon from '../assets/icons/plus-icon.svg'
import dashbordIcon from '../assets/icons/dashbord-icon.svg'
import historyIcon from '../assets/icons/history-icon.svg'
import galleryIcon from '../assets/icons/gallery-icon.svg'
import addressIcon from '../assets/icons/address-icon.svg'
import followIcon from '../assets/icons/follow-icon.svg'
import infoIcon from '../assets/icons/info-icon.svg'
import logoutIcon from '../assets/icons/logout-icon.svg'

const ProfileSidebar = () => {
    return ( 
        <div className="flex flex-col gap-[1.25rem]">
            <h3 className='font-bold text-2xl'>پروفایل</h3>
            <div className="w-[24.5rem] h-[53.125rem]">
                <div className="w-[20.125rem] h-full flex flex-col gap-[1.5rem] m-[1.5rem]">
                    {/* User Profile Avatar */}
                    <div className="flex flex-col items-center">
                        <div className="relative">
                            <img src={ userAvatar } alt="User avatar"/>
                            <div className="flex items-center justify-center absolute bottom-0 left-0 rounded-full w-[2.625rem] h-[2.625rem]" style={{ backgroundColor: "var(--color-primary-tint-7)"}}>
                                <img className="w-[1.5rem] h-[1.5rem]" src={ camera } alt="camera" />
                            </div>
                        </div>
                        <div className="mt-[0.5rem] font-semibold text-sm">نگار زمانی</div>
                        <div className="text-xs">xxxxxx@Yahoo.com</div>
                    </div>


                    <div className="text-sm space-y-[0.75rem]">
                        <div className="flex justify-between">
                            <div className='flex gap-[0.5rem]'>
                                <span className="">اعتبار خرید</span>
                                <a href="#"><img src={ plusIcon } alt="plus-icon" /></a>
                            </div>
                            <span className="font-medium">۱۰۰,۰۰۰ تومان</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="">تعداد طرح ها</span>
                            <span>۶۵</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="">تعداد سفارش ها</span>
                            <span>۷۰</span>
                        </div>
                    </div>

                    <ul className="text-sm">
                        <div className='h-[3rem] w-[20.125rem] border-b mt-0 flex items-center'>
                            <a href="#">
                                <span className='flex gap-[0.375rem] '>
                                    <img src={ dashbordIcon } alt="dashbord-icon" />
                                    داشبورد
                                </span>
                            </a>

                        </div>
                        
                        <div className='h-[3rem] w-[20.125rem] border-b flex items-center'>
                            <a href="#" className=''>
                                <span className='flex gap-[0.375rem] '>
                                    <img src={ historyIcon } alt="history-icon" />
                                    تاریخجه سفارشات
                                </span>
                            </a>

                        </div>
                        
                        <div className='h-[3rem] w-[20.125rem] border-b flex items-center'>
                            <a href="#" className=''>
                                <span className='flex gap-[0.375rem] '>
                                    <img src={ galleryIcon } alt="gallery-icon" />
                                    گالری
                                </span>
                            </a>

                        </div>
                        
                        <div className='h-[3rem] w-[20.125rem] border-b flex items-center'>
                            <a href="#" className=''>
                                <span className='flex gap-[0.375rem] '>
                                    <img src={ addressIcon } alt="address-icon" />
                                    آدرس ها
                                </span>
                            </a>

                        </div>
                        
                        <div className='h-[3rem] w-[20.125rem] border-b flex items-center'>
                            <a href="#" className=''>
                                <span className='flex gap-[0.375rem] '>
                                    <img src={ followIcon } alt="follow-icon" />
                                    دنبال شوندگان
                                </span>
                            </a>

                        </div>
                        
                        <div className='h-[3rem] w-[20.125rem] border-b flex items-center'>
                            <a href="#" className=''>
                                <span className='flex gap-[0.375rem] '>
                                    <img src={ infoIcon } alt="info-icon" />
                                    اطلاعات حساب کاربری
                                </span>
                            </a>

                        </div>
                        
                        <div className='h-[3rem] w-[20.125rem] border-b flex items-center'>
                            <a href="#" className=''>
                                <span className='flex gap-[0.375rem] '>
                                    <img src={ logoutIcon } alt="logout-icon" />
                                    خروج
                                </span>
                            </a>

                        </div>
                        <a href="#" className=''>
                        </a>
                    </ul>

                    <div></div>
                </div>
            </div>
        </div>
    );
}
 
export default ProfileSidebar;