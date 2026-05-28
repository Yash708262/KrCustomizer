import React from 'react'
import shoe from '../../assets/images/shoe.png'

const CustomProduct = () => {
  return (
    <div
      className='w-full'
      style={{ backgroundColor: '#FFF7FF' }}
    >
      <div
        className='max-w-[1440px] mx-auto px-[124px] py-[88px] flex items-center justify-between'
      >

        {/* Left - Text Content */}
        <div className='flex flex-col gap-6' style={{ width: '562px' }}>

          {/* Heading */}
          <h1
            className='text-[#180F4F]'
            style={{
              fontFamily: 'GT Walsheim Trial',
              fontWeight: 500,
              fontSize: '40px',
              lineHeight: '50px',
              width: '530px',
            }}
          >
            Custom Product Builder That Lets Customers Create, Not Just Click – KR Customizer
          </h1>

          {/* Description */}
          <p
            className='text-[#180F4F]'
            style={{
              fontFamily: 'GT Walsheim Trial',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '30px',
              width: '562px',
            }}
          >
            Ever wonder why people leave without buying? Usually, they're just unsure.
            They aren't sure if the color is right or if the parts fit. A Texas custom
            product builder fixes that instantly. When someone sees their creation change
            on the screen, that doubt goes away. It's not just a fancy tool; it's a
            confidence builder for Toronto or Ontario users. Using something like KR
            Customizer lets them play with options and feel good about their choice.
            That's how you turn a window shopper into a paying customer.
          </p>

          {/* Buttons */}
          <div className='flex items-center gap-4' style={{ width: '442px' }}>

            {/* GET STARTED FREE */}
            <button
              className='bg-[#FDE105] text-[#180F4F] uppercase font-bold'
              style={{
                fontFamily: 'GT Walsheim Trial',
                fontSize: '16px',
                width: '211px',
                height: '56px',
                borderRadius: '8px',
                border: '1px solid #FDE105',
              }}
            >
              GET STARTED FREE
            </button>

            {/* BOOK FREE DEMO */}
            <button
              className='bg-transparent text-[#180F4F] uppercase font-medium'
              style={{
                fontFamily: 'GT Walsheim Trial',
                fontSize: '16px',
                width: '211px',
                height: '56px',
                borderRadius: '8px',
                border: '1px solid #FDE105',
              }}
            >
              BOOK FREE DEMO
            </button>

          </div>
        </div>

        {/* Right - Hero Image */}
        <div
          style={{
            width: '606px',
            height: '447.79px',
            
          }}
        >
          <img
            src={shoe}
            alt="Custom Product Builder"
            className='w-full h-full object-cover'
          />
        </div>

      </div>
    </div>
  )
}

export default CustomProduct