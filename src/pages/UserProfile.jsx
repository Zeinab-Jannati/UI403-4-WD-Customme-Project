import '../index.css'
import '../styles/base.css'
import '../styles/components.nav.css'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MainMenu from '../components/MainMenu'
import ProfileSidebar from '../components/ProfileSidebar'
import ProductCard from '../components/ProductCard'

import productPic from '../assets/images/product-image.svg'

const UserProfile = () => {
    return ( 
        <>
            <Navbar />
            <MainMenu />
            <div className='flex justify-center mt-[2rem] overflow-hidden'>
                <div className='flex gap-[1.5625rem]'>
                    <ProfileSidebar />
                    <div className='w-[50.5rem] h-[104.125rem]'>
                        <ProductCard imageUrl={ productPic } productName="استیکر فرندز" productDescription="دارای رنگ بندی، قابل طراحی" price="۱۵۰,۰۰۰" />
                    </div>
                </div>

            </div>
            <Footer />
        </>
     );
}
 
export default UserProfile;