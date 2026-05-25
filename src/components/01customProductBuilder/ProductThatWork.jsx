import React from 'react'
import photo2 from '/Users/yash/Desktop/Kr customizer/KR Customizer/src/assets/images/8ddb5feb4b169bea482b0d0636e86a3e26572930.png'

const ProductThatWork = () => {
  return (
    <div className='bg-[#FFF7FF] w-full py-16 px-[112px]'>
      <div className='flex gap-8 items-start max-w-[1204px] mx-auto'>
        
        {/* Left - Image with yellow box */}
        <div className='relative w-[560px] h-[480px] flex-shrink-0'>
          
          {/* Yellow box - top left */}
          <div 
            className='absolute bg-[#FDE105]'
            style={{
              width: '510px',
              height: '454px',
              top: '0px',
              left: '0px',
              zIndex: 0,
            }}
          />

          {/* Image - bottom right shift */}
          <img 
            src={photo2} 
            alt="Product examples"
            className='absolute object-cover'
            style={{
              width: '510px',
              height: '454px',
              top: '26px',
              left: '26px',
              zIndex: 1,
            }}
          />
        </div>

        {/* Right - Content */}
        <div className='w-[633px] flex flex-col gap-4'>
          
          <h2 
            className='text-[#0B1228]'
            style={{
              fontFamily: 'GT Walsheim Trial',
              fontWeight: 500,
              fontSize: '36px',
              lineHeight: '46px',
            }}
          >
            Products That Work Best with a Custom Product Builder
          </h2>

          <p
            className='text-[#20282C]'
            style={{
              fontFamily: 'GT Walsheim Trial',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '30px',
            }}
          >
            A product customizer works for almost anything, but it really shines 
            with visual items. Imagine a shopper in Texas designing a custom hoodie 
            or a leather jacket. They can swap colors or add patches instantly. In 
            Toronto, someone might use a 3D product builder to pick the perfect wood 
            finish for a new dining table.
          </p>

          <p
            className='text-[#20282C]'
            style={{
              fontFamily: 'GT Walsheim Trial',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '30px',
            }}
          >
            Even small items like jewelry in Ohio benefit. A customer can engrave a 
            necklace and see the font before buying. Whether it's personalized mugs 
            or custom print-on-demand gear, KR Customizer makes it real. It turns a 
            basic gift into something one-of-a-kind. If the look matters, a custom 
            product builder is your best friend.
          </p>

        </div>
      </div>
    </div>
  )
}

export default ProductThatWork