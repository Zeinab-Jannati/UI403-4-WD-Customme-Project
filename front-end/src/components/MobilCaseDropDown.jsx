import { useState, useRef, useEffect } from 'react';

import iphonePic from '../assets/images/iphone.png'

export default function MobileCaseDropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className='cursor-pointer'
      >
        قاب موبایل
      </button>

      {open && (
        <div className="absolute top-full mt-[1.25rem] left-0 bg-white shadow-lg rounded-b-[8px] rounded-br-[8px] p-[1rem] z-50 flex justify-center gap-[1.5rem] w-[63.5rem] h-[8.5rem]">
          {['آیفون', 'آیفون', 'آیفون', 'آیفون', 'آیفون', 'آیفون', 'آیفون', 'آیفون', 'آیفون'].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center w-full h-[6.5rem]">
              <img
                src={ iphonePic }
                alt={item}
                className="w-[5rem] h-auto object-cover"
              />
              <p className="text-sm">{item}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}