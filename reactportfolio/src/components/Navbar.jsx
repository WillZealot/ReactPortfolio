import React from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
import Logo from "../assets/logo2.png"

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#27374D] text-slate-100'>
        <div>
            <img src={Logo} alt='logopic' style={{width:'80px'}}></img>
        </div>

        {/* menu */}
        <div >
            <ul className='flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Experience</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        </div>

        {/* Hamburger */}
        <div className="hidden">
            <FaBars />
        </div>
        {/* Mobile Menu */}
        <ul className="hidden">
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Experience</li>
            <li>Work</li>
            <li>Contact</li>
        </ul>


        {/* social icons */}
        <div className="hidden"></div>
    </div>
  )
}

export default Navbar