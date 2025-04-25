import '../index.css'
import '../styles/base.css'
import '../styles/components.nav.css'

import Navbar from '../components/Navbar'
import Footer from './Footer'
import MainMenu from '../components/MainMenu'

const UserProfile = () => {
    return ( 
        <>
            <Navbar />
            <MainMenu />
            <Footer />
        </>
     );
}
 
export default UserProfile;