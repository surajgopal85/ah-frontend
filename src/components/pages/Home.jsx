import React from 'react';
// assets
import ah1 from '../../assets/ah-1.jpeg';
import ah2 from '../../assets/ah-2.jpeg';
import ah3 from '../../assets/ah-3.jpeg';
import ah4 from '../../assets/ah-4.jpeg';

// components
import Navbar from '../UI/Navbar';

const Home = () => {
  return (
    <div className=''>
      <Navbar />
      <div className="flex flex-col text-center font-merriweather m-auto w-3/5">
        <h1 className='text-5xl font-bold bg-zinc-400'>AveryHall</h1>
      </div>

    </div>
  )
}

export default Home;
