import React from 'react'
import tshirt3 from '../../assets/images/tshirt3.png'

const ThinkZakeke = () => {
    return (
        <div className='bg-[#F6F6FB] flex items-center justify-center py-[50px]'>

            <div className='flex flex-col gap-[16px]'>
                <p className='font-medium text-[16px] leading-[16px] bg-[#FFE8AB] rounded-full px-[16px] py-[8px] w-fit text-[#655615]'>The Better alternative to zakeke</p>
                <h2 className='font-medium text-[48px] leading-[58px] max-w-[522px]'>Think Zakeke is your only choice? See what KR Customizer can do.</h2>
                <p className='font-normal text-[18px] leading-[28px] max-w-[522px]'>Want to make product customization easy and powerful? KR
                    Customizer is here. Unlike Zakeke, we make it easy for anyone to
                    create, sell, and manage customizable products without any
                    headaches.</p>
                <p className='font-normal text-[16px] leading-[26px] max-w-[522px]'>Want to make product customization easy and powerful? KR
                    Customizer is here. Unlike Zakeke, we make it easy for anyone to
                    create, sell, and manage customizable products without any
                    headaches.</p>
                <div className='flex gap-[20px]'>
                    <button className='bg-[#FDE105] py-[16px] px-[32px] rounded-lg'>Start Free Trial</button>
                    <button className='bg-[#E7E8E9] py-[16px] px-[32px] rounded-lg'>See Live Demo</button>
                </div>
            </div>

            <div className='w-[710px] h-[473px] py-[20px]'>
                <img src={tshirt3}/>
            </div>
        </div>
    )
}

export default ThinkZakeke
