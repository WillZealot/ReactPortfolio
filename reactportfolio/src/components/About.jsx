import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#27374D] text-white'> 
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-grey-300'>
                    About Me
                    </p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div>
                <p className='sm:text-right text-4xl font-bold'>Hello, I'm William, nice to meet you please take a second to explore.</p>
                </div>
                <div>
                    <p>
                    I Am A Motivated <strong>Certified</strong> Full Stack Developer with a strong specialization in backend development. Proficient in JavaScript, Node.js, MySQL, NoSQL, MongoDB, React, Progressive Web Apps (PWAs), and various databases. Experienced in building robust server-side applications and APIs. Committed to continuous learning and collaboration to solve complex problems.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About