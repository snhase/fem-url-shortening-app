import React, { useState } from "react"
import logo from '../assets/images/logo.svg'
import HamburgerMenu from '../components/HamburgerMenu'


function Header() {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className="mx-5 md:m-0">
        <div className="w-full md:max-w-[1000px] mx-auto py-4 flex justify-center justify-between items-center">
        <div className="py-5 flex md:w-full items-center">
          <img className="px-5" src={logo} alt="Shortly logo"></img>
          <div className="hidden md:inline px-5 text-neutralGrayishViolet font-extrabold hover:text-primaryDarkViolet hover:cursor-pointer">Features</div>
          <div className="hidden md:inline px-5 text-neutralGrayishViolet font-extrabold hover:text-primaryDarkViolet hover:cursor-pointer">Pricing</div>
          <div className="hidden md:inline px-5 text-neutralGrayishViolet font-extrabold hover:text-primaryDarkViolet hover:cursor-pointer">Resources</div>
          </div>
        <div className="flex justify-end md:w-full">
          <div className="hidden md:inline px-5 py-2 text-neutralGrayishViolet font-bold hover:text-primaryDarkViolet hover:cursor-pointer">Login</div>
          <button className="hidden md:inline px-6 py-2 bg-primaryCyan border border-primaryCyan rounded-full font-extrabold text-white hover:bg-secondaryCyan hover:border-secondaryCyan">Sign Up</button>
          <div 
            className="md:hidden stroke-neutralGrayishViolet hover:cursor-pointer"
            onClick={() => { setShowMenu(!showMenu)}}
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>
          </div>
        </div>
        </div>
        {
            showMenu?
            <HamburgerMenu/>
            :
            <></>
        }
        </header>
    )

}

export default Header;