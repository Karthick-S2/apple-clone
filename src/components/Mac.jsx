import React from 'react'

const Mac = () => {
  return (
    <div className='relative w-full'>
      <div className='relative '>
        <img className='mt-4' src="https://www.apple.com/v/home/cf/images/heroes/macbook-air/hero_macbook_air_avail__fpm99qgohx2e_mediumtall_2x.jpg" alt="" />
        </div>
        <div className='absolute top-0 left-0 w-full mt-6 flex flex-col justify-center items-center text-center px-4'>
        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-black mt-0'>MacBook Air</h1>
      <h3 className='text-xl sm:text-2xl mt-4 text-black'>Sky blue colour <br /> Sky high performance with M4</h3>
      <div className='flex flex-col sm:flex-row gap-4 mt-6'>
     
        <button className='bg-blue-600 text-white p-4 rounded-full text-xl'>Learn More</button>
        <button className='hover:bg-blue-600 bg-transparent border border-black text-blue-600 p-4 rounded-full text-xl hover:text-white'>Buy</button>
      </div>
      </div>
        <h3 className='absolute mt-4 bottom-10 left-1/2 transform -translate-x-1/2 text-2xl bg-gradient-to-r text-transparent'>Build for Apple Intelligence</h3>
    </div>
  )
}

export default Mac