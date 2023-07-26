// React imports
import React from 'react';
import { Routes, Route } from 'react-router-dom';
// components

import About from './components/pages/About';
import Projects from './components/Project/Projects';
import ProjectDisplay from './components/Project/ProjectDisplay';
import ProductLibrary from './components/Product/ProductLibrary';

// styles
import './App.css';

const App =  () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Projects />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/project/:id' element={<ProjectDisplay />} />
        <Route path='/productlibrary' element={<ProductLibrary />} />
      </Routes>
    </div>

  );
}

export default App;
