import React, { useState } from 'react';
import SideMenu from './Components/SideMenu';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';

function App() {
  const [isMenuClicked, setMenuClicked] = useState(true);

  return (
    <>
      <SideMenu isMenuClicked={isMenuClicked} 
                setMenuClicked={setMenuClicked} />
      <div id='body-container' className={`norm-body ${isMenuClicked ? '' : 'adj-body'}`}>     
        <Home setMenuClicked={setMenuClicked} />
        <span />
        <AboutMe />
        <span />
        <Projects />
      </div>
   
    </>
  );
}

export default App;
