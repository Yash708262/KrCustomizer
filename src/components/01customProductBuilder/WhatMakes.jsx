import React from 'react'
import photo3 from '../../assets/images/photo3.png'
import photo4 from '../../assets/images/photo4.png'
import order from '../../assets/images/orderplaced.png'


const cards = [
  {
    title: 'Let AI Do the Work',
    description: 'Whether your shop is in Texas or Toronto, our AI product customizer is like hiring a pro designer for every customer. Shoppers just type a simple idea, and the tool builds it.',
    image: photo3, 
  },
  {
    title: 'Built for Real People',
    description: "You shouldn't need a tech degree to use an online product configurator. Our plug-and-play for Shopify and WooCommerce. Store setup is easy using a drag-and-drop editor. Designed for busy owners who want to sell, not spend hours on code.",
    image: photo4,
  },
  {
    title: 'Orders That Just Work',
    description: 'The magic happens when the "buy" button is clicked. KR Customizer creates a perfect, high-res file for you instantly. No more guessing what a customer in Texas meant for fixing pixelated art. It\'s a clean, fast path from a shopper\'s imagination straight to your shipping box.',
    image: order,
  },
]

const WhatMakes = () => {
  return (
    <div
      className='w-full text-center'
      style={{ backgroundColor: '#D9D9D9' }} 
    >
      <div className='w-full py-16 px-[312px]'>

        {/* Heading */}
        <h2
          className='text-[#15202E] text-center'
          style={{
            fontFamily: 'GT Walsheim Trial',
            fontWeight: 500,
            fontSize: '36px',
            lineHeight: '46px',
          }}
        >
          What Makes KR Customizer's Custom Product Builder Different
        </h2>

        {/* Subtitle */}
        <p
          className='text-[#180F4F] text-center mt-4'
          style={{
            fontFamily: 'GT Walsheim Trial',
            fontWeight: 400,
            fontSize: '24px',
            lineHeight: '36px',
          }}
        >
          Most apps are just too fancy to us, but KR Customizer is different because
          it's a total engine that powers your whole business from start to finish.
        </p>

        {/* Cards Row */}
        <div className='flex gap-6 mt-12 justify-center'>
          {cards.map((card, index) => (
            <div
              key={index}
              className='bg-white flex flex-col'
              style={{
                width: '375px',
                borderRadius: '9px 10px 9px 10px',
              }}
            >
              {/* Image */}
             
              <img
                src={card.image} 
                alt={card.title}
                className='object-cover'
                style={{
                  width: '375px',
                  height: '232px',
                  borderRadius: '9px 10px 0 0',
                }}
              />

              {/* Text Content */}
              <div className='p-6 flex flex-col gap-3' style={{ width: '335px' }}>

                {/* Card Title */}
                <h3
                  className='text-[#2B353B]'
                  style={{
                    fontFamily: 'GT Walsheim Trial',
                    fontWeight: 500,
                    fontSize: '24px',
                    lineHeight: '100%',
                  }}
                >
                  {card.title}
                </h3>

                {/* Card Description */}
                <p
                  className='text-[#2B353B]'
                  style={{
                    fontFamily: 'GT Walsheim Trial',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '26px',
                  }}
                >
                  {card.description}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default WhatMakes; 