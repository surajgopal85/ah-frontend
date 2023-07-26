// NOTE: info will be replaced with piped in

import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import black_tile from '../../assets/black_tile.webp';

function ProductCard() {
  return (
    <div className="p-8 m-8 border-2 border-slate-200 rounded-lg">
      <div className="flex flex-row">
        <div className="p-2"><img src={black_tile} alt='pic' className='max-h-16'/></div>
        <div className="p-2 align-middle text-center justify-center">Ground Tudor Finish M3771</div>
      </div>
      <div className="flex flex-row justify-between border-2 rounded-xl border-slate-200">
        <h1 className='text-base p-2'>Used in 272 4th Ave</h1>
      </div>
      <div className="flex flex-row justify-around pt-2 mt-2">
        <div><StarIcon /></div>
        <div><StarIcon /></div>
        <div><StarIcon /></div>
        <div><StarIcon /></div>
        <div><StarIcon /></div>
      </div>
      <div className='m-2'>Quality: </div>
      <div className='m-2'>Durability: </div>
    </div>
  )
}

export default ProductCard
