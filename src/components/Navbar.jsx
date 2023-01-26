import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex bg-green'>
      <div className='flex w-1/3 h-20 justify-center items-center text-lg'>
        <span>Rick & Morty Web</span>
      </div>
      <div className='flex w-1/3 justify-center items-center' id='searchBar'>
        <input type="text" placeholder='Search' className='h-10 rounded-md text-center'/>
      </div>
      <div className='flex w-1/3 align-center justify-center text-xs gap-3 py-8' id='sections'>
        <Link to='characters'>Characters</Link>
        <Link to='/episode'>Episode</Link>
        <Link to='/location'>Location</Link>
      </div>
    </div>
  )
}

export default Navbar