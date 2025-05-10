import '../../styles/base.css'
import '../../styles/home.css'

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import MainMenu from '../../components/MainMenu';

const Home = () => {
    return (  
        <>
            <Navbar />
            <MainMenu />
            
            <Footer />
        </>
    );
}
 
export default Home;