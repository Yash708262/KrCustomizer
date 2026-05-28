import React from 'react'
import Card1 from '../../assets/images/Card1.png'
import Card2 from '../../assets/images/Card2.png'
import Card3 from '../../assets/images/Card3.png'

const HowACustom = () => {
    return (
        <div className='w-full bg-[#F5F5F7] py-[80px] px-[124px]'>
            <h2 className='text-[36px] font-medium leading-[46px] text-[#15202E] text-center mb-[8px]'> How a Custom Product Builder Works</h2>
            <p className='text-[32px] italic text-[#15202E] text-center'> From Click to Checkout</p>
            <p className='text-[24px] leading-[36px] mt-[24px] text-center mb-[48px]'>Ever wondered how someone gets from "just looking" to "bought it"?
                Making the process natural and entertaining is key.</p>


            <div className='w-full bg-white rounded-[14px] flex items-center gap-8 p-8 mb-[32px]'>
                {/* card1 */}
                <div className="max-w-[500px] w-full">
                    <img src={Card1} className="w-full h-auto rounded-[10px]"
                    />
                </div>
                <div className="flex flex-col gap-4 flex-1">
                    <h3 className="text-[32px] font-medium text-[#180F4F] leading-[42px]">
                        The Design Phase
                    </h3>
                    <p className="text-[20px] font-normal text-[#20282C] leading-[30px]">
                        A shopper in Texas lands on your page and starts playing with options. Instead of one boring photo, they see a live workshop. They can swap colors or tweak parts with a tap. KR Customizer makes it feel like a game.
                    </p>
                    <button className="w-[208px] h-[56px] bg-[#FDE105] text-[#180F4F] text-[14px] font-bold uppercase rounded-[8px]">
                        GET STARTED FREE
                    </button>
                </div>

            </div>

            {/* Card2 */}

            <div className='w-full bg-white rounded-[14px] flex items-center gap-8 p-8 mb-[32px]'>
                {/* card1 */}
                <div className="flex flex-col gap-4 flex-1">
                    <h3 className="text-[32px] font-medium text-[#180F4F] leading-[42px]">
                        No Price Surprises
                    </h3>
                    <p className="text-[20px] font-normal text-[#20282C] leading-[30px]">
                        As your customer in Toronto adds a better fabric or a cool upgrade, the price updates instantly. No one likes surprises at checkout. Seeing the price move helps them feel in control. It builds trust because everything is out in the open.
                    </p>
                    <button className="w-[208px] h-[56px] bg-[#FDE105] text-[#180F4F] text-[14px] font-bold uppercase rounded-[8px]">
                        GET STARTED FREE
                    </button>
                </div>
                <div className="max-w-[500px] w-full">
                    <img src={Card2} className="w-full h-auto rounded-[10px]"
                    />
                </div>

            </div>


            {/* Card3 */}



            <div className='w-full bg-white rounded-[14px] flex items-center gap-8 p-8'>
                {/* card1 */}
                <div className="max-w-[500px] w-full">
                    <img src={Card3} className="w-full h-auto rounded-[10px]"
                    />
                </div>
                <div className="flex flex-col gap-4 flex-1">
                    <h3 className="text-[32px] font-medium text-[#180F4F] leading-[42px]">
                        Hitting the Buy Button
                    </h3>
                    <p className="text-[20px] font-normal text-[#20282C] leading-[30px]">
                        By the time a buyer in Ohio finishes, they’re sure of their choice. They aren't guessing what the product looks like anymore. They’ve built it, seen it, and loved it. This confidence is exactly what turns a casual browser into a happy customer.
                    </p>
                    <button className="w-[208px] h-[56px] bg-[#FDE105] text-[#180F4F] text-[14px] font-bold uppercase rounded-[8px]">
                        GET STARTED FREE
                    </button>
                </div>

            </div>
        </div>
    )
}

export default HowACustom
