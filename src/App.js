// React imports
import React from 'react';
import { Routes, Route } from 'react-router-dom';
// components
import Navbar from './components/UI/Navbar';
import Header from './components/UI/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/Project/Projects';
import ProjectDisplay from './components/Project/ProjectDisplay';

// styles
import './App.css';

const App =  () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/project/:id' element={<ProjectDisplay />} />
      </Routes>
    </div>

  );
}

export default App;
