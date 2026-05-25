import React from 'react'
import group11 from '/Users/yash/Desktop/Kr customizer/KR Customizer/src/assets/images/Group 1171282388.png'
import star from '/Users/yash/Desktop/Kr customizer/KR Customizer/src/assets/images/star.png'
import rightArrow from '/Users/yash/Desktop/Kr customizer/KR Customizer/src/assets/images/rightarrow.png'

const features = [
  "Trusted by thousands of sellers",
  "Fast delivery across provinces",
  "No inventory, no risk",
]

const PrintInCanada = () => {
  return (
    <div className="w-full min-h-[678px] bg-[#FFF7FF] flex items-center justify-between px-[124px]">

      {/* Left Side */}
      <div className="flex flex-col gap-6 max-w-[594px]">

        <h2 className="text-[32px] font-medium text-[#101010] leading-[42px]">
          Print on Demand in Canada - your store, your way with KR Customizer
        </h2>

        <p className="text-[24px] font-normal text-[#180F4F] leading-[34px] max-w-[502px]">
          Create and sell custom products shipped fast and duty-free from right here in Canada
        </p>

        <div className="flex flex-col gap-4">
          {features.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <img src={star} alt="star" className="w-[32px] h-[32px]" />
              <p className="text-[20px] font-normal text-[#180F4F] leading-[40px]">
                {item}
              </p>
            </div>
          ))}
        </div>

        <button className="flex items-center gap-[10px] bg-[#FDE105] text-[#101010] text-[20px] font-medium px-[24px] py-[16px] rounded-[6px] w-fit">
          Start Your Custom Store in Canada
          <img src={rightArrow} alt="arrow" className="w-[32px] h-[32px]" />
        </button>

      </div>

      {/* Right Side */}
      <div className="max-w-[550px] w-full">
        <img src={group11} alt="cap" className="w-full h-auto" />
      </div>

    </div>
  )
}

export default PrintInCanada
