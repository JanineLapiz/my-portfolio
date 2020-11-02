import React, { useState } from 'react';
import SideMenu from './Components/SideMenu';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Accomplishments from './Components/Accomplishments';

function App() {
  const [isMenuClicked, setMenuClicked] = useState(true);

  return (
    <>
      <SideMenu isMenuClicked={isMenuClicked} 
                setMenuClicked={setMenuClicked} />
      <div id='body-container' className={`norm-body ${isMenuClicked ? '' : 'adj-body'}`}>     
        <Home setMenuClicked={setMenuClicked} />
        <span className='page-breaker my-5' />
        <AboutMe />
        <span className='page-breaker my-5' />
        <Projects />
        <span className='page-breaker my-5' />
        <Accomplishments />
        <Contact />
      </div>
   
    </>
  );
}

export default App;
