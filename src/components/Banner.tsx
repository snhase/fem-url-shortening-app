import React from 'react'

function Banner() {
    return (
        <section className="md:m-0 text-center md:text-left md:max-w-[1225px] md:mx-auto py-3 md:flex md:items-center md:justify-between">
            <div className="ml-5 mr-0 mb-10 md:hidden w-full h-96 bg-[url('../src/assets/images/illustration-working.svg')] bg-no-repeat bg-cover"></div>
            <div className="lg:ml-28 px-5 w-fit md:w-1/2 flex-none"> 
              <div className="text-5xl md:text-7xl text-primaryBlack font-extrabold">More than just shorter links</div> 
              <div className="py-4 md:py-2 text-xl md:w-5/6 font-medium leading-relaxed text-neutralGrayishViolet"> Build your brand’s recognition and get detailed insights on how your links are performing.</div>
              <button className="my-3 px-9 py-3 bg-primaryCyan border border-primaryCyan rounded-full font-extrabold text-white text-lg hover:bg-secondaryCyan hover:border-secondaryCyan">Get Started</button>
            </div>
            <div className="hidden md:inline w-3/6 h-96 bg-[url('../src/assets/images/illustration-working.svg')] bg-no-repeat bg-cover"></div>
        </section>
    )
}

export default Banner;