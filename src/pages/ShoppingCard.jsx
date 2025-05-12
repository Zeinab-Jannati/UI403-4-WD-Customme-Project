import Navbar from "../components/Navbar";
import MainMenu from "../components/MainMenu";
import Footer from "../components/Footer";

import steper from '../assets/icons/steper.svg'

const ShoppingCard = () => {
    return (  
        <div>
            <Navbar />
            <MainMenu />
            <div className="flex justify-center">
                <img src={ steper } alt=" stepper" className="w-[32.5625rem] h-[3.125rem] my-[2rem]" />
            </div>
            <Footer />
        </div>
    );
}
 
export default ShoppingCard;