import React from 'react';
import { motion } from 'framer-motion';

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div className="text border-t-2 border-b-2 uppercase border-zinc-300 flex overflow-hidden whitespace-nowrap font-bold">
            <motion.h1 
              initial={{x:0}} 
              animate={{x:"-100%"}} 
              transition={{ease: 'linear',repeat: Infinity,duration:10}} 
              className="text-[14vw] leading-none font-['Test Founders Grotesk X_Cond SmBd'] pr-20">
                We are Ochi 
              </motion.h1>
              <motion.h1 
              initial={{x:0}} 
              animate={{x:"-100%"}} 
              transition={{ease: 'linear',repeat: Infinity,duration:10}} 
              className="text-[14vw] leading-none font-['Test Founders Grotesk X_Cond SmBd'] pr-20">
                We are Ochi 
              </motion.h1>
        </div>
    </div>
  )
}

export default Marquee