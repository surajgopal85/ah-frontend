import React from 'react';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import FolderIcon from '@mui/icons-material/Folder';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';

const Header = () => {
  return (
    <div>
      <div className='flex flex-row justify-center my-4'>
          <h1 className='text-6xl'>AveryHall</h1>
      </div>
      <div className='flex flex-row justify-center mt-4 mb-8'>
          <h1 className='text-lg text-blue-700 font-bold'>COMMAND CENTER</h1>
      </div>
      <div className='flex flex-row justify-around my-2 py-2 border-y-2 border-slate-600'>
          <div className='py-2 mx-4'><h5 className='text-lg'><HomeWorkIcon /> PROJECTS</h5></div>
          <div className='py-2 mx-4'><h5 className='text-lg'><MenuBookIcon /> PRODUCT LIBRARY</h5></div>
          <div className='mx-4 pt-2 align-middle'><h5 className='text-lg'><HolidayVillageIcon /> DETAIL WORKSHOP</h5></div>

      </div>
    </div>
  );
}

export default Header;
