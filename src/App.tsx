import React from 'react';
import logo from '../src/assets/images/logo.svg'
import brandRecognition from '../src/assets/images/icon-brand-recognition.svg'
import detailedRecords from '../src/assets/images/icon-detailed-records.svg'
import fullyCustomizable from '../src/assets/images/icon-fully-customizable.svg'
import Feature from './components/Feature';

function App() {
  return (
    <div>
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
            <div className="w-3/6 h-96 bg-[url('../src/assets/images/illustration-working.svg')] bg-no-repeat bg-cover"></div>
          </section>
          <section className='bg-primaryGray mt-28'>
            <div className="mx-auto max-w-[1000px]" >
              <div>
              <div className="mx-5 -translate-y-1/2 bg-primaryDarkViolet border-primaryDarkViolet rounded-lg">
              <div className="bg-[url('../src/assets/images/bg-shorten-desktop.svg')] bg-no-repeat bg-cover bg-center h-32 mx-auto rounded-lg">
              </div>
            </div>
              </div>
              <div className="pt-8 pb-24 mx-auto max-w-[1000px] text-center">
                <div className="py-2 text-4xl text-primaryBlack font-extrabold">Advanced Statistics</div>
                <div className="text-lg font-medium leading-relaxed text-neutralGrayishViolet" >Track how your links are performing across the web with <br/> our advanced statistics dashboard.</div>
              </div>
              <div className="mx-5 pb-48 h-full">
                <div className="relative z-10 flex justify-between">
                  <Feature
                    img={brandRecognition}
                    title="Brand Recognition"
                    description="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
                    />
                    <Feature
                      translate="translate-y-20"
                      img={detailedRecords}
                      title="Detailed Records"
                      description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
                      />
                    <Feature
                      translate="translate-y-32"
                      img={fullyCustomizable}
                      title="Fully Customizable"
                      description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
                      />
                </div>
                <hr className="mx-5 z-0 -translate-y-20 bg-primaryCyan p-1"></hr>
              </div>
            </div>
          </section>
        </main>
    </div>
  );
}

export default App;
