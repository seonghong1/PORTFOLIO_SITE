import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './component/Nav';
import Home from './page/Home';
import Skills from './page/Skills';
import Project from './page/Project';
import About from './page/About';
import Contact from './page/Contact';
import Bottombar from './component/Bottombar';
import { useState } from 'react';

function App() {
  const [navState, setNavState] = useState('')
  
  return (
    <div className="all_container">
      <Nav navState={navState} setNavState={setNavState}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/skills'  element={<Skills />} />
        <Route path='/project' element={<Project />} />
        <Route path='/about'  element={<About />} />
        <Route path='/contact'  element={<Contact />} />
      </Routes>
      <Bottombar setNavState={setNavState}/>
    </div>
  );
}

export default App;
