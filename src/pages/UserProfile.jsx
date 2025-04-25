import '../index.css'
import '../styles/base.css'
import '../styles/components.nav.css'

import Navbar from '../components/Navbar'
import Footer from './Footer'
import MainMenu from '../components/MainMenu'
import ProfileSidebar from '../components/ProfileSidebar'
import ProductCard from '../components/ProductCard'

import productPic from '../assets/images/product-image.svg'

const UserProfile = () => {
    return ( 
        <>
            <Navbar />
            <MainMenu />
            <div className='flex'>
                <ProfileSidebar />
                <div>
                    <ProductCard imageUrl={ productPic } productName="استیکر فرندز" productDescription="دارای رنگ بندی، قابل طراحی" price="۱۵۰,۰۰۰" />
                </div>
            </div>
            <Footer />
        </>
     );
}
 
export default UserProfile;