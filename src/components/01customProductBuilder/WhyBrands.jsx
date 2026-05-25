import React from 'react'
import ellipse from '/Users/yash/Desktop/Kr customizer/KR Customizer/src/assets/images/Ellipse 2598.png'

// Alag alag icons import karo apne assets se


const cards = [
    {
        icon: ellipse,
        title: 'It Just Works',
        description: "Software shouldn't be a headache. Whether you are in Texas or Toronto, our product customizer stays fast and stable. We focus on reliability so your store never misses a sale.",
    },
    {
        icon: ellipse,
        title: 'People Who Care',
        description: "If you hit a snag in Ohio, a real person is here to help. We don't do robot loops. Our team ensures your online product configurator runs perfectly every day.",
    },
    {
        icon: ellipse,
        title: 'Getting Better Daily',
        description: "We never stop updating. Your business in Missouri stays ahead with new features and better tech. We listen to your feedback to keep KR Customizer the best in the game.",
    },
]

const WhyBrand = () => {
    return (
        <div
            className='w-full py-16 text-center'
            style={{ backgroundColor: '#F5F5F7' }}
        >
            <div className='max-w-[1440px] mx-auto px-[126px]'>

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
                    Why Brands Trust KR Customizer Long-Term
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
                    Brands stick with us because we focus on their growth. KR Customizer isn't
                    just a tool; it's a long-term partner.
                </p>

                {/* Cards Row */}
                <div className='flex gap-6 mt-12 justify-center'>
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className='bg-white flex flex-col p-6'
                            style={{
                                width: '380px',
                                height: '364px',
                            }}
                        >
                            {/* Icon */}
                            <img
                                src={cards.icon}
                                alt={card.title}
                                style={{
                                    width: '72px',
                                    height: '72px',
                                }}
                            />

                            {/* Card Title */}
                            <h3
                                className='text-[#15202E] mt-4'
                                style={{
                                    fontFamily: 'GT Walsheim Trial',
                                    fontWeight: 500,
                                    fontSize: '32px',
                                    lineHeight: '42px',
                                }}
                            >
                                {card.title}
                            </h3>

                            {/* Card Description */}
                            <p
                                className='text-[#15202E] mt-3'
                                style={{
                                    fontFamily: 'GT Walsheim Trial',
                                    fontWeight: 400,
                                    fontSize: '20px',
                                    lineHeight: '30px',
                                }}
                            >
                                {card.description}
                            </p>

                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default WhyBrand