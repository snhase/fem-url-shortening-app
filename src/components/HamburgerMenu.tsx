import React from 'react'


function HamburgerMenu() {
    return(
        <div className={`md:hidden
              py-10 bg-primaryDarkViolet text-center rounded-lg`}>
            <div className="pb-5 text-white font-extrabold hover:cursor-pointer">Features</div>
            <div className="pb-5 text-white font-extrabold hover:cursor-pointer">Pricing</div>
            <div className="pb-5 text-white font-extrabold hover:cursor-pointer">Resources</div>
            <hr className="mx-auto w-3/4 mb-5 border-[#4B3F6B]"/>
            <div className="pb-5 text-white font-bold hover:cursor-pointer">Login</div>
            <button className="p-6 py-2 w-3/4 bg-primaryCyan border border-primaryCyan rounded-full font-extrabold text-white hover:bg-secondaryCyan hover:border-secondaryCyan">Sign Up</button>
        </div>
    )
}

export default HamburgerMenu;