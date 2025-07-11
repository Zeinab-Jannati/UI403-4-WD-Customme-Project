import { useState } from 'react'

import '../index.css'
import '../styles/base.css'
import '../styles/components.nav.css'

import Navbar from '../components/Navbar'
import MainMenu from '../components/MainMenu'
import Footer from '../components/Footer'
import ProfileSidebar from '../components/ProfileSidebar'
import OrderStatus from '../components/OrderStatus'
import Pagination from '../components/Pagination'
import Tabs from '../components/Tabs'


const OrdersHistory = () => {
    const tabs = [
        { id: 'ongoing', label: 'جاری ۰' },
        { id: 'delivered', label: 'تحویل شده ۲۶' },
        { id: 'returned', label: 'مرجوع شده ۴' },
        { id: 'canceled', label: 'لغو شده ۴' },
    ];

    const [currentTab, setCurrentTab] = useState(tabs[0].id);

    const handleTabChange = (tabId) => {
        setCurrentTab(tabId);
    }

    return ( 
        <>
        <MainMenu />
        <div className='flex justify-center mt-[2rem]'>
            <div className='flex gap-[1.5625rem]'>
                <ProfileSidebar />
                {/* todo: h-[215.875rem] */}
                <div className='w-[50.5rem] pb-[1.5rem] mt-[4.0625rem]'>
                    <div className='border rounded-[16px] border-[var(--color-custome-gray-3)] flex flex-col flex-1 px-[1.5rem] pt-[1.5rem] pb-[2rem]'>
                        <h2 className='font-extrabold !mb-[2rem] text-2xl'>تاریخچه ی سفارشات</h2>
                        {/* <div className='w-[47.5rem] border-b border-[var(--color-custome-gray-3)] mb-[1.5rem]'> */}
                            {/* <div className="flex w-[27.5625rem] h-[2rem] gap-[1.6875rem] mb-[1rem]">
                                <button className='px-[0.5rem] pt-[0.15625rem] pb-[0.34375rem] whitespace-nowrap'>جاری ۰</button>
                                <button className='px-[0.5rem] pt-[0.15625rem] pb-[0.34375rem] whitespace-nowrap'>تحویل شده ۲۶</button>
                                <button className='px-[0.5rem] pt-[0.15625rem] pb-[0.34375rem] whitespace-nowrap'>مرجوع شده ۴</button>
                                <button className='px-[0.5rem] pt-[0.15625rem] pb-[0.34375rem] whitespace-nowrap' whitespace-nowrap>لغو شده ۴</button>
                            </div> */}
                        {/* </div> */}
                        <Tabs tabs={ tabs } onTabChange={ handleTabChange } />
                        <div>
                            {/* {currentTab === 'ongoing' && <OngoingOrders />}
                            {currentTab === 'delivered' && <DeliveredOrders />}
                            {currentTab === 'returned' && <ReturnedOrders />}
                            {currentTab === 'canceled' && <CanceledOrders />} */}
                            {currentTab === 'ongoing' && <h1>ongoing</h1>}
                            {currentTab === 'delivered' && <h1>deliveryorders</h1>}
                            {currentTab === 'returned' && <h1>returnorders</h1>}
                            {currentTab === 'canceled' && <h1>cancelorders</h1>}
                        </div>
                        <div className='flex flex-col gap-[1.5rem]'>
                            <OrderStatus />
                            <OrderStatus />
                            <OrderStatus />
                            <OrderStatus />
                            <OrderStatus />
                            <OrderStatus />
                            <OrderStatus />
                            <OrderStatus />
                            <OrderStatus />
                            <OrderStatus />
                            <OrderStatus />
                        </div>
                    </div>
                    
                    {/* to do: fix this navigation thing */}
                    <div className='flex justify-center w-full'> 
                        <Pagination />
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
     );
}
 
export default OrdersHistory;