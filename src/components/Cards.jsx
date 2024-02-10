import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen flex items-center px-32 gap-5'>
        <div className="cardcontainer h-[50vh] w-1/2 ">
            <div className="card relative w-full rounded-xl h-full bg-[#004D43] flex items-center justify-center">
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"/>
                <button className="absolute left-8 bottom-8 py-1 px-5 rounded-full border-2 font-['Neue Montreal'] tracking-tight text-[#97C05E] border-[#97C05E] hover:bg-white">&copy;2019-2022</button>
            </div>
        </div>
        <div className="cardcontainer flex gap-5 h-[50vh] w-1/2 ">
            <div className="card relative w-full rounded-xl bg-[#212121] flex items-center justify-center">
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"/>
                <button className="absolute left-8 bottom-8 py-0.5 px-4 rounded-full border-2 font-['Neue Montreal'] tracking-tight uppercase hover:bg-zinc-300">Rating 5.0 on clutch</button>
            </div>
            <div className="card relative w-full rounded-xl bg-[#212121] flex items-center justify-center">
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" />
                <button className="absolute left-8 bottom-8 py-0.5 px-4 rounded-full border-2 font-['Neue Montreal'] tracking-tight uppercase hover:bg-zinc-300">Business Bootcamp alumini</button>
            </div>
        </div>
    </div>
  )
}

export default Cards