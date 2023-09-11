import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';

const Skills = () => {
  return (
    <div name='skills' className='bg-[#27374D]  text-white w-full h-screen'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-300'>Skills</p>
          <p className='py-4'>// This is only a sliver of the full scope</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#010c46] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt='html icon'></img>
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#010c46] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt='html icon'></img>
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#010c46] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={JavaScript} alt='html icon'></img>
            <p className='my-4'>JavaScript</p>
          </div>
          <div className='shadow-md shadow-[#010c46] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Node} alt='html icon'></img>
            <p className='my-4'>NodeJs</p>
          </div>
          <div className='shadow-md shadow-[#010c46] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={GitHub} alt='html icon'></img>
            <p className='my-4'>GitHub</p>
          </div>
          <div className='shadow-md shadow-[#010c46] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ReactImg} alt='html icon'></img>
            <p className='my-4'>React</p>
          </div>
          <div className='shadow-md shadow-[#010c46] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Mongo} alt='html icon'></img>
            <p className='my-4'>MongoDb</p>
          </div>
          <div className='shadow-md shadow-[#010c46] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Tailwind} alt='html icon'></img>
            <p className='my-4'>TailWind</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Skills