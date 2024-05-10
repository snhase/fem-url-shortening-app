import React from 'react';

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
        <header className="py-4 flex justify-center content-between items-center">
        <div className="py-5 flex w-full items-center">
          <div className="px-5 text-3xl font-bold text-primaryDarkViolet">Shortly</div>
          <div className="px-5 text-neutralGray font-bold hover:text-primaryDarkViolet hover:cursor-pointer">Features</div>
          <div className="px-5 text-neutralGray font-bold hover:text-primaryDarkViolet hover:cursor-pointer">Pricing</div>
          <div className="px-5 text-neutralGray font-bold hover:text-primaryDarkViolet hover:cursor-pointer">Resources</div>
          </div>
        <div className="flex justify-end w-full">
          <div className="px-5 py-2 text-neutralGray font-bold hover:text-primaryDarkViolet hover:cursor-pointer">Login</div>
          <button className="px-6 py-2 bg-primaryCyan border border-primaryCyan rounded-full font-bold text-white hover:opacity-75">Signup</button>
        </div>
        </header>
    </div>
  );
}

export default App;
