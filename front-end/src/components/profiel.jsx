const ProfileSidebar = ({ userData }) => {
    if (!userData) {
        return <div className="w-[18rem] bg-gray-100 p-4 rounded-lg">در حال بارگذاری نوار کناری...</div>;
    }

    return (
        <div className='w-[18rem] h-[30rem] border border-[var(--color-custome-gray-3)] rounded-[16px] flex flex-col items-center pt-[2.5rem] gap-[1.5rem]'>
            <img src={userData.profile_picture || 'https://placehold.co/100x100/aabbcc/ffffff?text=User'} alt="Profile" className="w-24 h-24 rounded-full object-cover" />
            <h3 className="font-bold text-xl text-[var(--color-primary-tint-7)]">{userData.full_name || userData.username}</h3>
            <p className="text-sm text-gray-600">{userData.email}</p>

            <div className="mt-4 w-full px-4">
                <button className="w-full bg-[var(--color-primary)] text-white py-2 rounded-md hover:opacity-90">ویرایش پروفایل</button>
            </div>
        </div>
    );
};

export default ProfileSidebar;