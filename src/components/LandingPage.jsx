import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
        <div className="textstructure mt-52 px-20">
            {["We Create", "Eye Opening", "Presentations"].map((item,index) => {
                return (
                <div className="masker">
                    <div className="w-fit flex">
                    {index === 1 && (
                    <motion.div
                    initial={{width:0}}
                    animate={{width:"8vw"}} 
                    transition={{ ease:[0.76, 0, 0.24, 1], duration:1}}
                    className='w-[8vw] h-[5vw] rounded-md relative top-[0.5vw] overflow-hidden'>
                        <img src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                    </motion.div>)}
                        <h1 className="uppercase text-[6vw] font-semibold leading-[5.5vw] tracking-tighter font-['Test Founders Grotesk X_Cond SmBd']">{item}</h1>
                    </div>
                </div>
            )})}
        </div>
        <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-3 px-20">
            {["For public and private companies", "From the first pitch in IPO"].map((item,index) => 
                <p className='text-md font-light tracking-tight leading-none'>{item}</p>
            )}
            <div className="start flex items-center gap-2">
                <div className="px-5 py-1 border-[1px] border-zinc-400 rounded-full font-light text-md uppercase">Start the Project</div>
                <div className="w-9 h-9 flex items-center justify-center border-[1px] border-zinc-400 rounded-full">
                    <span className='rotate-[45deg]'>
                        <FaArrowUpLong />
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage