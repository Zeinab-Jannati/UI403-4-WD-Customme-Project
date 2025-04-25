// import { Pencil } from 'lucide-react';

const MainMenu = () => {
    return ( 
        <div className="w-full flex justify-center mt-[1.5rem]">
            <nav className="flex justify-center items-center w-[75.6rem] h-[4rem] gap-[2rem]">
            <a
                href="#"
                className="flex items-center justify-center gap-1 text-white w-[11.5rem] h-[3rem] rounded-[8px]"
                style={{ backgroundColor: "var(--color-primary)" }}
            >
                {/* <Pencil className="w-4 h-4" /> */}
                خودت طراحی‌ش کن!
            </a>

            <div className="flex gap-[2.5rem]">
                <a href="#" className="">پوشاک</a>
                <a href="#" className="">لوازم خانه</a>
                <a href="#" className="">قاب موبایل</a>
                <a href="#" className="">اکسسوری</a>
                <a href="#" className="">مدرسه و اداره</a>
                <a href="#" className="">کارت و پوستر</a>
                <a href="#" className="">جشن و مهمانی</a>
            </div>

        </nav>
        </div>
     );
}
 
export default MainMenu;