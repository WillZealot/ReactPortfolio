import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from "react-icons/fa";
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from "../assets/logo3.png";
import { Link } from 'react-scroll';

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
                <li>
                <Link to="home" spy={true} smooth={true} duration={500} >
                Home
                </Link>    
                </li>
                <li>
                <Link to="about" spy={true} smooth={true} duration={500} >
                About
                </Link>    
                </li>
                <li>
                <Link to="skills" spy={true} smooth={true} duration={500} >
                Skills
                </Link>    
                </li>
                <li>
                <Link to="work" spy={true} smooth={true} duration={500} >
                Work
                </Link>    
                </li>
                <li>
                <Link to="contact" spy={true} smooth={true} duration={500} >
                Contact
                </Link>    
                </li>
            </ul>
        

        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden z-10">
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>
        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#27374D] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="home" spy={true} smooth={true} duration={500} >
                Home
                </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" spy={true} smooth={true} duration={500} >
                About
                </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills" spy={true} smooth={true} duration={500} >
                Skills
                </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="work" spy={true} smooth={true} duration={500} >
                Work
                </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" spy={true} smooth={true} duration={500} >
                Contact
                </Link></li>
        </ul>


        {/* social icons */}
        <div className="hidden lg:flex fixed flex-colum top-[30%] left-0">
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/feed/">LinkedIn <FaLinkedin size={30}></FaLinkedin></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/WillZealot">Github <FaGithub size={30}></FaGithub></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#EA4335]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="/">Email <HiOutlineMail size={30}></HiOutlineMail></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="/">Resume <BsFillPersonLinesFill size={30}></BsFillPersonLinesFill></a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar