import Navbar from "../components/Navbar";
import MainMenu from "../components/MainMenu";
import Footer from "../components/Footer";
import ShoppingCardProduct from "../components/ShoppingCardProduct";

import steper from '../assets/icons/steper.svg'

const ShoppingCard = () => {
    return (  
        <div>
            <MainMenu />
            <div className="flex justify-center">
                <img src={ steper } alt=" stepper" className="w-[32.5625rem] h-[3.125rem] my-[2rem]" />
            </div>
            <div className="w-full flex flex-col justify-center">
                <div className="w-[50.5rem] h-[3rem] border-b border-[var(--color-custome-gray-4)] mb-[1.5rem]">
                    <span className="pr-[1.5rem] text-[var(--color-custome-gray-9)]">سبد خرید</span>
                </div>
                <ShoppingCardProduct />
                <ShoppingCardProduct />
            </div>
            <Footer />
        </div>
    );
}
 
export default ShoppingCard;