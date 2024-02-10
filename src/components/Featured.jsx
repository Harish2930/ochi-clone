import { motion, useAnimation } from 'framer-motion'
import React, { useState } from 'react'

function Featured() {
  const [isHovering,setHovering] = useState(false);
  const cards = [useAnimation(),useAnimation(),useAnimation(),useAnimation()]

  const handleHover = (index) =>{
    cards[index].start({y:"0"})
  }
  const handleHoverEnd = (index) =>{
    cards[index].start({y:"100%"})
  }
  return (
    <div className='w-full py-20 '>
        <div className="w-full px-16 border-b-[1px] border-zinc-700 pb-20">
            <h1 className="text-6xl font-['Neue Montreal'] tracking-tight">Featured projects</h1>
        </div>
        <div className="px-20">
          <div className="cards w-full flex gap-10 mt-10">
            <motion.div 
              onHoverStart={() => handleHover(0)}
              onHoverEnd={() => handleHoverEnd(0)}
              className="relative cardcontainer w-1/2 h-[75vh]">
              <h1 className='pb-5 px-2 font-semibold'>FYDE</h1>
              <h1 className="absolute flex text-[#CDEA68] overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 tracking-tight font-['Test Founders Grotesk X_Cond SmBd'] z-[9] leading-none text-8xl font-semibold">
                {"FYDE".split("").map((item,index)=>(
                  <motion.span 
                    initial={{y:"100%"}} 
                    animate={cards[0]}
                    transition={{
                      ease: [0.22,1,0.36,1],
                      delay: index * 0.05,
                    }}
                    className='inline-block'>{item}</motion.span>
                ))}
              </h1>
              <div className="card w-full h-full rounded-xl overflow-hidden">
                <img src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" className="w-full h-full bg-cover" />
              </div>
            </motion.div>
            <motion.div 
              onHoverStart={() => handleHover(1)}
              onHoverEnd={() => handleHoverEnd(1)}
              className="relative cardcontainer w-1/2 h-[75vh]">
            <h1 className='pb-5 px-2 font-semibold'>VISE</h1>
            <h1 className="absolute flex right-full text-[#CDEA68] overflow-hidden translate-x-1/2 top-1/2 -translate-y-1/2 tracking-tight font-['Test Founders Grotesk X_Cond SmBd'] z-[9] leading-none text-8xl font-semibold">
            {"VISE".split("").map((item,index)=>(
                  <motion.span 
                    initial={{y:"100%"}} 
                    animate={cards[1]}
                    transition={{
                      ease: [0.22,1,0.36,1],
                      delay: index * 0.05,
                    }}
                    className='inline-block'>{item}</motion.span>
                ))}
            </h1>
              <div className="card w-full h-full rounded-xl overflow-hidden">
                <img src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" className="w-full h-full bg-cover" />
              </div>
            </motion.div>
          </div>
        </div>
        <div className="px-20 py-20">
          <div className="cards w-full flex gap-10 mt-10">
            <motion.div
               onHoverStart={() => handleHover(2)}
               onHoverEnd={() => handleHoverEnd(2)} 
              className="relative cardcontainer w-1/2 h-[75vh]">
              <h1 className='pb-5 px-2 font-semibold'>TRAWDA</h1>
              <div className="card w-full h-full rounded-xl overflow-hidden">
              <h1 className="absolute flex text-[#CDEA68] overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 tracking-tight font-['Test Founders Grotesk X_Cond SmBd'] z-[9] leading-none text-8xl font-semibold">
              {"TRAWDA".split("").map((item,index)=>(
                  <motion.span 
                    initial={{y:"100%"}} 
                    animate={cards[2]}
                    transition={{
                      ease: [0.22,1,0.36,1],
                      delay: index * 0.05,
                    }}
                    className='inline-block'>{item}</motion.span>
                ))}
              </h1>
                <img src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" className="w-full h-full bg-cover" />
              </div>
            </motion.div>
            <motion.div
               onHoverStart={() => handleHover(3)}
               onHoverEnd={() => handleHoverEnd(3)} 
              className="relative cardcontainer w-1/2 h-[75vh]">
            <h1 className='pb-5 px-2 font-semibold'>PREMIUM BLEND</h1>
            <h1 className="absolute flex right-full text-[#CDEA68] overflow-hidden translate-x-1/2 top-1/2 -translate-y-1/2 tracking-tight font-['Test Founders Grotesk X_Cond SmBd'] z-[9] leading-none text-8xl font-semibold">
            {"PREMIUM BLEND".split("").map((item,index)=>(
                  <motion.span 
                    initial={{y:"100%"}} 
                    animate={cards[3]}
                    transition={{
                      ease: [0.22,1,0.36,1],
                      delay: index * 0.05,
                    }}
                    className='inline-block'>{item}</motion.span>
                ))}
            </h1>
              <div className="card w-full h-full rounded-xl overflow-hidden">
                <img src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="" className="w-full h-full bg-cover" />
              </div>
            </motion.div>
          </div>
        </div>
    </div>
  )
}

export default Featured