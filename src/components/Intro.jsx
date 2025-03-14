import React, { useEffect, useRef } from 'react'
import { init } from 'ityped'

const Intro = () => {

    const myelement = useRef()

    useEffect(()=>{
        init(myelement.current,{
            showCursor: true,
            strings: [
                "Computer Scientist",
                "Data Scientist",
                "Software Engineer",
                'Database Administrator',
            ],
            backDelay: 3000
        })
    },[])
    
  return (
    <div className='flex flex-col h-screen
     pt-16 bg-slate-100 lg:flex-row lg:items-center'>

        {/* Image container */}
        <div className="flex-1 md:h-[80%] lg:h-auto flex items-center justify-center">
            <img className='w-full h-full lg:rounded-full xl:h-[75%] xl:w-[75%] border border-green-400' src="/img2.jpg" alt="My Image" />
        </div>

        {/* Intro Container */}

        <div className="flex-1 lg:w-full flex items-center flex-col  justify-center   text-3xl text-center font-extrabold text-slate-900 txt-shadow-lg
        ">
            <div className="">Hi !!!</div>
            <h2>It's Omar Hashimi</h2>
            <div>Professional <span className='text-red-500' ref={myelement}></span></div>
        </div>

    </div> 
  )
}

export default Intro