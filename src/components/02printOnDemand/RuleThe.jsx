import React from 'react'
import tshirt1 from '/Users/yash/Desktop/Kr customizer/KR Customizer/src/assets/images/tshirt1.png'
import tshirt2 from '/Users/yash/Desktop/Kr customizer/KR Customizer/src/assets/images/tshirt2.png'

const RuleThe = () => {
  return (
    <div className='bg-[#FAFAFA] flex flex-col items-center px-[124px] py-[80px] gap-[40px]'>
      
      {/* Heading - center, 32px, #101010 */}
      <h2 className='font-["GT_Walsheim_Trial"] font-medium text-[32px] leading-[46px] text-[#101010] text-center'>
        Rule the Canadian eCommerce Market with KRCustomizer
      </h2>

      {/* Card 1 - image left, text right */}
      <div className='w-full flex items-center bg-white rounded-[35px] overflow-hidden px-[48px] py-[48px] gap-[40px]'>
        
        <div className='w-[548px] h-[340px] flex-shrink-0 rounded-[24px] overflow-hidden'>
          <img src={tshirt1} alt="tshirt" className='w-full h-full object-contain' />
        </div>

        <div className='flex flex-col gap-[24px]'>
          <h2 className='font-["GT_Walsheim_Trial"] font-medium text-[32px] leading-[42px] text-[#101010] max-w-[488px]'>
            Big Ideas. Small Ideas. We Handle Them All.
          </h2>
          <p className='font-["GT_Walsheim_Trial"] font-normal text-[24px] leading-[34px] text-[#180F4F] max-w-[532px]'>
            KR Customizer helps you sell custom clothing and products without the hassle. You design. We print. We ship. Quality stays high. Every time. No matter the size of your business. Ready to sell custom products across Canada? You're in the right place.
          </p>
        </div>

      </div>

      {/* Card 2 - text left, image right */}
      <div className='w-full flex items-center bg-white rounded-[35px] overflow-hidden px-[48px] py-[48px] gap-[40px]'>

        <div className='flex flex-col gap-[24px]'>
          <h2 className='font-["GT_Walsheim_Trial"] font-medium text-[32px] leading-[42px] text-[#101010] max-w-[488px]'>
            Made in Canada. Built for Canada.
          </h2>
          <p className='font-["GT_Walsheim_Trial"] font-normal text-[24px] leading-[34px] text-[#180F4F] max-w-[532px]'>
            Serving Ontario, Toronto, and beyond. Our fulfillment centre in Ontario keeps things fast and smooth. Orders reach customers across Canada quickly — including Toronto and nearby cities. No surprise customs. No hidden duty fees. Just clean, reliable delivery. Every product goes through a strict quality check before shipping. So what your customers receive? Always top-notch.
          </p>
        </div>

        <div className='w-[548px] h-[340px] flex-shrink-0 rounded-[24px] overflow-hidden'>
          <img src={tshirt2} alt="tshirt2" className='w-full h-full object-contain' />
        </div>

      </div>

    </div>
  )
}

export default RuleThe