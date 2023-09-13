import React from 'react';

import jate from '../assets/projects/jatePhoto.jpeg'
import weather from '../assets/projects/weather.png'
import notes from '../assets/projects/notesapp.png'
import qr from '../assets/projects/QrEmpire.png'
import breathe from '../assets/projects/catchbreathe.png'
import theFunction from '../assets/projects/theFunction.png'

const Work = () => {
  return (
    <div name='work' className='bg-[#27374D] w-full md:h-screen text-white'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                    {/* Container */}
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-30'>Work</p>
            <p className='py-6'>// Check out my recent work</p>
        </div>

         {/* container */}
        <div 
         className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* grid item */}
            <div style={{backgroundImage: `url(${jate})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                   
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        J.A.T.E (PWA)
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://supertexteditor-jate-47a351fbbe2f.herokuapp.com/">
                                <button  className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Link</button>
                            </a>
                            <a href="https://github.com/WillZealot/Jate_Editor">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    
                </div>
            </div>
            {/* grid item */}
            <div style={{backgroundImage: `url(${qr})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                   
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        QREmpire
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://qrempire-7ee960eb8dee.herokuapp.com/">
                                <button  className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Link</button>
                            </a>
                            <a href="https://github.com/WillZealot/QR_Empire">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    
                </div>
            </div>{/* grid item */}
            <div style={{backgroundImage: `url(${breathe})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                   
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        Catch My Breathe
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://willzealot.github.io/Catchmybreathe/">
                                <button  className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Link</button>
                            </a>
                            <a href="https://github.com/WillZealot/Catchmybreathe">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    
                </div>
            </div>{/* grid item */}
            <div style={{backgroundImage: `url(${theFunction})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                   
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        The Function Tech Blog
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://whispering-everglades-98902-1ba343f0f56f.herokuapp.com/">
                                <button  className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Link</button>
                            </a>
                            <a href="https://github.com/WillZealot/Tech-Blog">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    
                </div>
            </div>{/* grid item */}
            <div style={{backgroundImage: `url(${notes})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                   
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        Note Taker
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://noteappucf-8c03bfe5c3d5.herokuapp.com/notes.html">
                                <button  className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Link</button>
                            </a>
                            <a href="https://github.com/WillZealot/NotesApp">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    
                </div>
            </div>{/* grid item */}
            <div style={{backgroundImage: `url(${weather})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                   
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        Weather Station
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://willzealot.github.io/weatherapp/">
                                <button  className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Link</button>
                            </a>
                            <a href="https://github.com/WillZealot/weatherapp">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    
                </div>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Work