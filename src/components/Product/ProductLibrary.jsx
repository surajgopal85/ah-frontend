import React from 'react';

//icons
import ConstructionIcon from '@mui/icons-material/Construction';
import SearchIcon from '@mui/icons-material/Search';
import FlareIcon from '@mui/icons-material/Flare';
// import StarBorderIcon from '@mui/icons-material/StarBorder';
// import StarIcon from '@mui/icons-material/Star';
// import { StarBorder } from '@mui/icons-material';

// assets
import mosaic from '../../assets/mosaic.png';


// components
import Toolbar from '../UI/Toolbar';

import ProductCard from './ProductCard';
// import Sidebar from '../UI/Sidebar';

const ProductLibrary = () => {
  return (
    <div>
      <Toolbar />
        {/* later: dereference to component */}
        <div className="flex">
          <div className="h-screen p-5 pt-8 w-72 border-r-2 border-slate-400">
            <div className="justify-center p-4">Product Type  <ConstructionIcon className='bg-white rounded-full'/></div>
            <div className="justify-center p-4">Quality  <SearchIcon className='bg-white rounded-full'/></div>
            <div className="justify-center p-4" p-4>Finishes  <FlareIcon className='bg-white rounded-full'/></div>
            <div className="justify-center p-4">Quality  <SearchIcon className='bg-white rounded-full'/></div>
          </div>
          <div className="grid grid-cols-3 grid-rows-3 w-full">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
    </div>
  )
}

export default ProductLibrary;
