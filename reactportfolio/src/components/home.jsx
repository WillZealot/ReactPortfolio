import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#27374D]'>
    {/*Container  */}
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
    <p className='text-[#ccd6f6]'>Hi, my name is</p>
    <h1 className='text-4xl sm:text-7xl font-bold text-white'>William Tikhonenko</h1>
    <h2 className='text-4xl sm:text-7lx font-bold text-[#8892b0]'>I'm a full stack developer</h2>
    <p className='text-[#BBBCBF] font-bold py-4 max-w-[700px]'>I'm a full-stack developer with a speciality in creating a digital experience you wont forget. Currently, I'm focused on building responsive unique full-stack applications and growing my understanding on more complex topics.</p>
    {/* Button */}
    <div>
      <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#ccd6f6] hover:border-[#ccd6f6] hover:text-black'>View Work
      <span className='group-hover:rotate-90 duration-300'>
      <HiArrowNarrowRight></HiArrowNarrowRight>
      </span>
      </button>
    </div>
    </div>
    </div>
  )
}

export default Home