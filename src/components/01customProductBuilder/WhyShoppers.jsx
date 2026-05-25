import React from 'react'
import shopperimg from '/Users/yash/Desktop/Kr customizer/KR Customizer/src/assets/images/shopperimg.png'

const WhyShoppers = () => {
  return (
    <div className='bg-gradient-to-br from-[#D2D1D2] to-[#EAEAEA] px-[124px] py-[80px] flex flex-col gap-[48px]'>
      
      {/* Heading */}
      <div className='flex flex-col gap-[24px] items-center'>
        <h2 className='font-["GT_Walsheim_Trial"] font-medium text-[36px] leading-[46px] text-[#15202E] text-center max-w-[620px]'>
          Why Shoppers Love Using a KR Customizer Custom Product Builder
        </h2>
        <p className='font-["GT_Walsheim_Trial"] font-normal text-[24px] leading-[36px] text-[#180F4F] text-center max-w-[814px]'>
          Shoppers are tired of the same old stuff. Using a product customizer like KR Customizer makes them feel special and sure they aren't wasting money.
        </p>
      </div>

      {/* 3 Column Section */}
      <div className='flex items-center gap-[40px] w-full'>
        
        {/* Card 1 */}
        <div className='flex-1 flex flex-col gap-[16px]'>
          <h3 className='font-["GT_Walsheim_Trial"] font-medium text-[32px] leading-[42px] text-[#0B1228]'>
            It's All About Them
          </h3>
          <p className='font-["GT_Walsheim_Trial"] font-normal text-[20px] leading-[34px] text-[#202020]'>
            Whether someone is in Texas or Toronto, they want to stand out. An online product configurator let them put a personal spin on your gear. It stops being a random item and becomes "theirs." That emotional connection is a massive sales driver.
          </p>
        </div>

        {/* Center Image */}
        <div className='w-[430px] h-[400px] flex-shrink-0'>
          <img
            src={shopperimg}
            alt="Shopper"
            className='w-full h-full object-cover rounded-[14px]'
          />
        </div>

        {/* Card 2 */}
        <div className='flex-1 flex flex-col gap-[16px]'>
          <h3 className='font-["GT_Walsheim_Trial"] font-medium text-[32px] leading-[42px] text-[#0B1228]'>
            Seeing is Believing
          </h3>
          <p className='font-["GT_Walsheim_Trial"] font-normal text-[20px] leading-[34px] text-[#202020]'>
            We've all bought something online that looked totally different once it arrived. For a shopper in Ohio, a 3D product builder kills that fear. They see the exact shade and texture change as they click. This clarity makes them much more likely to buy.
          </p>
        </div>

      </div>

    </div>
  )
}

export default WhyShoppers