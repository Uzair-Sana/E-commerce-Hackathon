import React from 'react'

const Offers = () => {
    const offerIcons = [
        {
            image: "/icon1.png"
        },
        {
            image: "/icon2.png"
        },
        {
            image: "/icon3.png"
        },
        {
            image: "/icon4.png"
        }
    ]
  return (
    <div className=' py-10 px-6'>
        <div className='max-w-7xl mx-auto'>
            <h2 className='text-[#151875] text-2xl text-center mb-8 font-bold '>What Shopex Offer!</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[28px]'>
                {offerIcons.map((icons, index)=> (
                    <div key={index} className='relative border  p-4 bg-white shadow-md hover:shadow-lg transition duration-300' style={{ height: "250px"}}>
                        <div className='w-full h-[65px] flex items-center justify-center overflow-hidden'>
                            <img src={icons.image} alt='' className='object-contain w-full h-full'/>
                        </div>
                        <div className='mt-4 text-center'>
                            <h3 className='text-xl font-semibold text-[#151875]'>24/7 Support</h3>
                            <p className='text-base font-bold text-[#1A0B5B4D] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                        </div>
                    </div>
                )) }
            </div>
        </div>
    </div>
  )
}

export default Offers