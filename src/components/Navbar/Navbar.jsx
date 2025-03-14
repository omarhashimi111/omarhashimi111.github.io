import React from 'react'
import { NavLink , Link} from 'react-router';


const Navbar = () => {
  
  return (
    <div className='w-full px-3 z-40 flex items-center justify-between h-16 fixed bg-main text-white'>
        {/* My name */}
        <div className="">
            <h1 className='text-xl tracking-wider font-bold txt-shadow-xl'><Link to={'/'}>Omar Hashimi</Link></h1>
        </div>



        {/* Navbar Links */}
        <div className="">
            <ul className='flex gap-4 text-lg text-black'>
                
                <li><Link to='works'>Works</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar