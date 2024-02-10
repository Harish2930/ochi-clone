import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black md:flex flex-col sm:flex flex-col'>
        <h1 className="font-['Neue Montreal'] text-[3.5vw] leading-[4vw] tracking-tight text-[#212121]">
            Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        <div className="w-full flex gap-5 border-t-[2px] pt-10 mt-20 border-[#a1b562]">
            <div className="w-1/2">
                <h1 className='text-5xl'>Our approach:</h1>
                <button className=' flex items-center font-semibold text-lg gap-10 px-8 py-4 mt-5 bg-zinc-900 rounded-full uppercase text-white'>Read More
                    <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
                </button>
            </div>
            <div className="w-1/2 h-[70vh] rounded-3xl overflow-hidden">
                    <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default About