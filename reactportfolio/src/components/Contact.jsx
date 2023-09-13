import React from 'react'

const Contact = () => {
  return (
    <div name="contact"className='w-full h-screen bg-[#27374D] flex justify-center items-center p-4'> 
    <form action="https://getform.io/f/cf6a9e94-8dff-45e1-812a-b089f9b6dbdb" method="POST" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-300 text-white'>Contact</p>
            <p className='text-white py-4'>// Submit the form below or send me an email - williamtikhonenko@gmail.com</p>
        </div>
        <input className='bg-[#ccd6f6]' type="text" placeholder="Name" name="name">
        </input>
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder="Email" name="email">
        </input>
        <textarea className='bg-[#ccd6f6]' placeholder="Message" name="message" rows="10">
        </textarea>
        <button className='text-white border-2 hover:bg-white hover: border-white px-4 py-3 my-8 mx-auto flex items-center hover:text-black'>Let's Talk</button>
    </form>
    </div>
  )
}

export default Contact