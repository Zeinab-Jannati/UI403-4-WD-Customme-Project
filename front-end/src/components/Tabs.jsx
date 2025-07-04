import { useState } from "react";

const Tabs = ({ tabs, onTabChange }) => {
    const [activeId, setActiveId] = useState(tabs[0].id);
    const handleClick = (tab) => {
        setActiveId(tab.id);
        if(onTabChange) onTabChange(tab.id);
    }
    return ( 
        <div className="w-[47.5rem] mb-[1.5rem]">
            <div className="flex border-b border-[var(--color-custome-gray-3)] w-full h-[2rem] gap-[1.6875rem] mb-[1rem]">
                {tabs.map(tab => (
                <button
                    key={tab.id}
                    onClick={() => handleClick(tab)}
                    className={`
                    px-[0.5rem] pt-[0.15625rem] pb-[0.34375rem] whitespace-nowrap
                    ${
                        activeId === tab.id
                        ? 'border-b-2 border-[var(--color-primary)] text-[var(--color-primary)]'
                        : 'text-black hover:cursor-pointer'
                    }
                    `}
                >
                    {tab.label}
                </button>
                ))}
            </div>
        </div>
     );
}
 
export default Tabs;