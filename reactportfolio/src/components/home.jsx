import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import portrait from '../assets/portrait/myphoto.jpg';
import { Link } from 'react-scroll'


const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#27374D] '>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>

        {/* Text content */}
        <div className='lg:flex-row flex-col-reverse flex justify-center items-center'>
          <div className='text-center lg:text-left lg:w-1/2'>
            <p className='text-[#ccd6f6]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-white'>William Tikhonenko</h1>
            <h2 className='text-4xl sm:text-7lx font-bold text-[#8892b0]'>I'm a full stack developer</h2>
            <p className='text-[#BBBCBF] font-bold py-4 max-w-[700px]'>
              I'm a full-stack developer with a specialty in creating a digital experience you won't forget.
              Currently, I'm focused on building responsive unique full-stack applications and growing my
              understanding of more complex topics.
            </p>
            {/* Button */}
            <div>
              <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#ccd6f6] hover:border-[#ccd6f6] hover:text-black'>
              <Link to="work" spy={true} smooth={true} duration={500}>
          View Work
        </Link>
                <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight></HiArrowNarrowRight>
                </span>
              </button>
            </div>
          </div>

          {/* Image */}
          <div className='lg:w-1/2'>
            <img alt="myphoto" className='max-w-[400px] flex items-center pr-1 justify-center' src={portrait}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
