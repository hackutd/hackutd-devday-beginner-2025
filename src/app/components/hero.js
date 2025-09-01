import React from 'react'

function Hero() {
  return (
    <div className="w-full bg-blue-100 py-16 px-8 border-b border-gray-300">
      <div className="max-w-4xl mx-auto text-left flex justify-center">
        <div className="text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-800 leading-tight">
          Maxing our <span className="text-black font-bold">GPA</span>,
        </h1>
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-800 mt-2">
          One <span className="text-black font-bold">Class</span> at a Time
        </h2>
        </div>
      </div>
    </div>
  );
}

export default Hero