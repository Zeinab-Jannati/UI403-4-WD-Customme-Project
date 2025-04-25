import '../index.css'
import '../styles/base.css'
import '../styles/components.nav.css'
import React from 'react'

import pendingIcon from '../assets/icons/pending-icon.svg'
import tickCircleIcon from '../assets/icons/tick-circle-icon.svg'
import galleryIcon from '../assets/icons/gallery-icon.svg'
import commentsIcon from '../assets/icons/comments-icon.svg'
import cancleCircleIcon from '../assets/icons/cancel-circle.svg'
import productsIcon from '../assets/icons/products-icon.svg'

const OrdersSummary = () => {
    return (
         <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-md">
          <h2 className="text-xl font-bold mb-6 text-right">سفارشات من</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center border rounded-xl p-4 text-center"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-lg font-semibold">{item.title}</div>
                <div className="text-sm text-gray-500 mt-1">{item.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      );
}
 
export default OrdersSummary;