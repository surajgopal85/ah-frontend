import React from 'react';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import InventorySharpIcon from '@mui/icons-material/InventorySharp';
import LibraryBooksSharpIcon from '@mui/icons-material/LibraryBooksSharp';


const Toolbar = () => {
  return (
    <div className='flex flex-row justify-around border-y-2 px-2 py-6 border-slate-400'>
      <div><h1 className="text-xl">AVERY HALL</h1></div>
      <div><h1 className="text-xl">COMMAND CENTER</h1></div>
      <div className='text-xl'><HomeSharpIcon /> <InventorySharpIcon /> <LibraryBooksSharpIcon /></div>
    </div>
  )
}

export default Toolbar;
