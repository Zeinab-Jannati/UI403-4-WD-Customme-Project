import '../index.css'
import '../styles/base.css'
import '../styles/components.nav.css'

import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from './Footer'
import DesignerSignUpPic from '../assets/images/DesignerSignUp.svg'

const DesignerSignUp = () => {
    return ( 
        <>
            <Navbar />
            <Contact />
            <main className='flex justify-center'>
                <form className='w-[40.5rem] h-[30.0625]' action="submit">
                    <input type="text" className='border border-black'/>
                </form>

                <div className='flex items-center w-[32.5rem] h-[30rem]'>
                    <img className='w-full h-[21.125rem]' src={ DesignerSignUpPic } alt="designer-sign-up-pic" />
                </div>
            </main>
            <Footer />
        </>
    );
}
 
export default DesignerSignUp;