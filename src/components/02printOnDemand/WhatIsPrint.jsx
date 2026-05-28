import React from 'react'
import MensCap from '../../src/assets/images/MensCap.png'

const WhatIsPrint = () => {
  return (
    <div className='bg-[#FEFEFE] flex flex items-center justify-between  pl-[124px] pt-[10px]'>
        <div className='flex flex-col gap-[16px]'>
            <h2 className=' font-medium text-[36px] leading-[46px] align-middle'>What is Print on Demand?</h2>
            <p className='font-[Poppins] font-medium text-[24px] leading-[30px] tracking-[0] align-middle text-[#655615]'>Your <span className='font-poppins font-semibold text-[24px] leading-[30px] align-middle'>Brand,</span> Your <span className='font-poppins font-semibold text-[24px] leading-[30px] align-middle'>Designs,</span> Zero <span className='font-poppins font-semibold text-[24px] leading-[30px] align-middle'>Inventory</span></p>
            <p className='text-[#180F4F]  font-normal text-[24px] leading-[34px] align-middle max-w-[582px]'>Print on Demand is a smart e-commerce model where you sell custom-designed products, from t-shirts to mugs, and KR Customizer prints and ships them only after someone orders. That means no stock to manage, no high upfront costs, and full control over your brand.</p>
            <button className='px-[32px] py-[18px] bg-[#FDE105] rounded-md font-bold text-[16px] uppercase'>Get Started free</button>
        </div>
        <img src={MensCap}/>
        
    </div>
  )
}

export default WhatIsPrint
