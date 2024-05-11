import React from 'react';
import logo from '../src/assets/images/logo.svg'

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
        <header className="max-w-[1000px] mx-auto py-4 flex justify-center content-between items-center">
        <div className="py-5 flex w-full items-center">
          <img className="px-5" src={logo} alt="Shortly logo"></img>
          <div className="px-5 text-neutralGrayishViolet font-extrabold hover:text-primaryDarkViolet hover:cursor-pointer">Features</div>
          <div className="px-5 text-neutralGrayishViolet font-extrabold hover:text-primaryDarkViolet hover:cursor-pointer">Pricing</div>
          <div className="px-5 text-neutralGrayishViolet font-extrabold hover:text-primaryDarkViolet hover:cursor-pointer">Resources</div>
          </div>
        <div className="flex justify-end w-full">
          <div className="px-5 py-2 text-neutralGrayishViolet font-bold hover:text-primaryDarkViolet hover:cursor-pointer">Login</div>
          <button className="px-6 py-2 bg-primaryCyan border border-primaryCyan rounded-full font-bold text-white hover:opacity-75">Signup</button>
        </div>
        </header>
        <main>
          <section className="max-w-[1225px] mx-auto py-3 flex items-center justify-between">
            <div className="ml-28 px-5 w-1/2 flex-none"> 
              <div className="text-7xl text-primaryBlack font-extrabold">More than just shorter links</div> 
              <div className="py-1 text-xl w-5/6 font-medium leading-relaxed text-neutralGrayishViolet"> Build your brand’s recognition and get detailed insights on how your links are performing.</div>
              <button className="my-3 px-9 py-3 bg-primaryCyan border border-primaryCyan rounded-full font-bold text-white hover:opacity-75">Get Started</button>
            </div>
            <div className=" w-3/6 h-96 bg-[url('../src/assets/images/illustration-working.svg')] bg-no-repeat bg-cover"></div>
          </section>
        </main>
    </div>
  );
}

export default App;
