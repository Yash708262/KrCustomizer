import React from 'react'
import logo from '../../assets/images/kr-customizer-logo.png'
import text from '../../assets/images/Group.png'

const Navbar = () => {
    return (
        <nav>
            <div className='border-b border-[#D3DBDF] px-[84px] py-[18px] bg-[#FFFFFF] flex justify-between items-center '>
                <div className='w-[210px] h-[39.9px] flex'>
                    <img src={logo} alt='logo'/>
                    <img src={text} alt='text'/>
                </div>
                <ul className='flex gap-[16px]'>
                    <li className="text-[16px] font-[500] leading-[24px] text-[#2B353B]">Showcase</li>
                    <li className="text-[16px] font-[500] leading-[24px] text-[#2B353B]">About Us</li>
                    <li className="text-[16px] font-[500] leading-[24px] text-[#2B353B]">Case Studies</li>
                    <li className="text-[16px] font-[500] leading-[24px] text-[#2B353B]">Blog</li>
                    <li className="text-[16px] font-[500] leading-[24px] text-[#2B353B]">Contact</li>
                </ul>
                <div className='flex items-center gap-4'>
                    <button className='px-[10px] py-[6px] text-[16px] font-medium text-[#2B353B]'>Login</button>
                    <button className='px-[16px] py-[10px] text-[16px] font-medium text-[#180F4F] bg-[#FDE105] rounded-lg'>Get a Demo</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
