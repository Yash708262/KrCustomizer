import React from 'react'
import photo from '/Users/yash/Desktop/Kr customizer/KR Customizer/src/assets/images/1bf8e4bb939062b92211cec5fd7b66626597491d.png'

const WhatIsCustom = () => {
    return (
        <div className='w-full min-h-[658px] bg-[#FFF7FF] flex items-center justify-between px-[124px]'>
            <div className='flex flex-col gap-6 max-w-[735px] bg-[#FFFFFF] rounded-[14px] py-[62px] px-[32px]'>
                <h2 className="text-[36px] font-medium text-[#0B1228] leading-[46px]">
                    What is a Custom Product Builder?
                </h2>
                <p className="text-[20px] font-normal text-[#20282C] leading-[30px]">
                    Shopping online can feel a bit soulless. It's usually just clicking a button and hoping for the best. But imagine a customer in Texas or Toronto actually building their own gear. A product builder makes that happen.
                </p>
                <p className="text-[20px] font-normal text-[#20282C] leading-[30px]">
                    It's like a digital workshop. Your shoppers in Ohio can swap colors or change fabrics with a tap. The image updates instantly, so they know exactly what they're getting. KR Customizer handles the tech, so you can just focus on selling. It turns a boring transaction into something personal.
                </p>
                <button className="w-full bg-[#FDE105] text-[#180F4F] text-[16px] font-bold uppercase py-[16px] rounded-[8px]">
                    GET STARTED FREE
                </button>
            </div>
            <div className='max-w-[353px] w-full h-[530px]'>
                <img
                    src={photo}
                    alt="Custom Product Builder"
                    className='w-full h-full object-cover rounded-[14px]'
                />
            </div>
        </div>
    )
}

export default WhatIsCustom
