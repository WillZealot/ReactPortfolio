import React, {useState} from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
import Logo from "../assets/logo2.png"

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#27374D] text-slate-100'>
        <div>
            <img src={Logo} alt='logopic' style={{width:'80px'}}></img>
        </div>

        {/* menu */}
            <ul className='md:flex hidden'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Experience</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        

        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden z-10">
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>
        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#27374D] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Experience</li>
            <li className='py-6 text-4xl'>Work</li>
            <li className='py-6 text-4xl'>Contact</li>
        </ul>


        {/* social icons */}
        <div className="hidden"></div>
    </div>
  )
}

export default Navbar