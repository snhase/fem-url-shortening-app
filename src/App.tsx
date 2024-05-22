import React, { useEffect, useState } from 'react';
import brandRecognition from '../src/assets/images/icon-brand-recognition.svg'
import detailedRecords from '../src/assets/images/icon-detailed-records.svg'
import fullyCustomizable from '../src/assets/images/icon-fully-customizable.svg'
import Feature from './components/Feature';
import ShortenLink from './components/ShortenLink';
import UrlListComponent from './components/UrlList';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';

export interface urlData {
  original:string,
  short:string,
}

function App() {

  const [urlList, setUrlList] = useState<urlData[]>(null);
  const [copy, setCopy] = useState(null);

  useEffect(()=>{
    if(!urlList){
      let list:urlData[] = localStorage.getItem("urlList")?JSON.parse(localStorage.getItem("urlList")):[];
      setUrlList(list);
    } else{
      localStorage.setItem("urlList", JSON.stringify(urlList));
    }   
  },[urlList]);

  return (
    <div>
        <Header/>
        <main>
          <Banner/>
          <section className='bg-primaryGray mt-28'>
            <div className="mx-auto md:max-w-[1000px]" >
              <div>
              <div className="mx-5 -translate-y-1/2 bg-primaryDarkViolet border-primaryDarkViolet rounded-lg">
              <div className="md:h-36 md:mx-auto bg-[url('../src/assets/images/bg-shorten-mobile.svg')] md:bg-[url('../src/assets/images/bg-shorten-desktop.svg')] bg-no-repeat bg-right-top md:bg-cover md:bg-center rounded-lg">
                <ShortenLink
                  urlList = {urlList}
                  setUrlList = {setUrlList}
                  setCopy={setCopy}
                />
              </div>
            </div>
            <UrlListComponent
              urlList={urlList}
              copy={copy}
              setCopy={setCopy}
            />
              </div>
              <div className="mx-5 pt-8 pb-24 mx-auto md:max-w-[1000px] text-center">
                <div className="py-2 text-3xl md:text-4xl text-primaryBlack font-extrabold">Advanced Statistics</div>
                <div className="mx-10 md:max-w-[475px] md:mx-auto text-md md:text-lg font-medium leading-relaxed text-neutralGrayishViolet" >Track how your links are performing across the web with our advanced statistics dashboard.</div>
              </div>
              <div className="mx-5 pb-48 h-full">
                <div className="relative z-10 md:flex md:justify-between">
                  <Feature
                    img={brandRecognition}
                    title="Brand Recognition"
                    description="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
                    />
                    <Feature
                      translate="my-20 md:my-0 md:translate-y-20"
                      img={detailedRecords}
                      title="Detailed Records"
                      description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
                      />
                    <Feature
                      translate="md:translate-y-32"
                      img={fullyCustomizable}
                      title="Fully Customizable"
                      description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
                      />
                </div>
                <hr className="absolute left-[49%] md:hidden z-0 -translate-y-full bg-primaryCyan w-2 h-[750px]"></hr>
                <hr className="hidden md:block mx-5 z-0 -translate-y-20 bg-primaryCyan p-1"></hr>
              </div>
            </div>
          </section>
          <section className="bg-primaryDarkViolet">
            <div className="bg-[url('../src/assets/images/bg-boost-mobile.svg')] md:bg-[url('../src/assets/images/bg-boost-desktop.svg')] bg-no-repeat bg-cover bg-center">
              <div className="h-60 flex items-center justify-center">
              <div className="text-center my-5">
                <div className="mx-5 text-3xl md:text-5xl  text-white font-extrabold">Boost your links today</div>
                <button className="w-[200px] mt-5 px-9 py-3 bg-primaryCyan border border-primaryCyan rounded-full font-extrabold text-white hover:bg-secondaryCyan hover:border-secondaryCyan">Get Started</button>
              </div>
              </div>
            </div>
          </section>
        </main>
        <Footer/>
    </div>
  );
}

export default App;
