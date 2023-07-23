import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex justify-around items-center bg-teal-400 h-16 text-xl text-white mb-4'>
      <div><Link to='/' ><h1 className='h-full'>Home</h1></Link></div>
      <div><Link to='/about' ><h1 className='h-full'>About</h1></Link></div>
      <div><Link to='/projects' ><h1 className='h-full'>Projects</h1></Link></div>
    </div>
  )
}

// border-solid border-2 border-slate-600 --- borders for iding range of nav elements - dev only!

export default Navbar;
