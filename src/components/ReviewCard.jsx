import RatingStars from "./RatingStars";

const ReviewCard = () => {
    return ( 
        <div className="w-[40.5625rem] h-[35.6875rem] rounded-[16px] flex justify-center">
            <div className="flex flex-col">
                <h5 className="font-bold text-xl">نظر خود را با ما در میان بگذارید</h5>
                <p className="text-[var(--color-custome-gray-7)] mb-[0.5rem]">در مورد تیشرت ساده سفید </p>
                <span className="flex gap-[0.75rem] w-full mb-[0.5rem]">امتیاز دهید
                    <RatingStars />
                </span>
                <div className="flex flex-col gap-[0.5rem]">
                    <div className="w-[24.5rem] text-[var(--color-custome-gray-5)] flex flex-col">
                        <label htmlFor="">عنوان نظر</label>
                        <input type="text" className="rounded-[8px] border border-[var(--color-custome-gray-5)]  h-[2.5rem]"/>
                    </div>
                    <div className="w-[24.5rem] text-[var(--color-custome-gray-5)] flex flex-col">
                        <label htmlFor="">نکات مثبت</label>
                        <input type="text" className="rounded-[8px] border border-[var(--color-custome-gray-5)]  h-[2.5rem]"/>
                    </div>
                    <div className="w-[24.5rem] text-[var(--color-custome-gray-5)] flex flex-col">
                        <label htmlFor="">نکات منفی</label>
                        <input type="text" className="rounded-[8px] border border-[var(--color-custome-gray-5)]  h-[2.5rem]"/>
                    </div>
                    <div className="w-[24.5rem] text-[var(--color-custome-gray-5)] flex flex-col">
                        <label htmlFor="">متن نظر</label>
                        <input type="text" className="rounded-[8px] border border-[var(--color-custome-gray-5)] h-[5rem]"/>
                    </div>
                </div>
                <div className="w-full h-full flex flex-col justify-center items-center ">
                    <button className="w-[24.5rem] h-[2.5rem] text-white rounded-[8px] bg-[var(--color-primary)]">ثبت دیدگاه</button>
                    <p className="text-[var(--color-custome-gray-9)] text-xs">ثبت دیدگاه به معنی موافقت شما با قوانین انتشار کاستومی است.</p>
                </div>
            </div>
        </div>
     );
}
 
export default ReviewCard;