import './styles/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import * as React from 'react';
import ReactDOM from 'react-dom';

import { AboutMe, Accomplishments, Contact, Home, Projects, SideMenu } from './index';

const App: React.FC = () => {
  const [isMenuClicked, setMenuClicked] = React.useState(true);
  return (
    <>
      <SideMenu isMenuClicked={isMenuClicked} setMenuClicked={setMenuClicked} />
      <div id="body-container" className={`norm-body ${isMenuClicked ? '' : 'adj-body'}`}>
        <Home setMenuClicked={setMenuClicked} />
        <span className="page-breaker my-5" />
        <AboutMe />
        <span className="page-breaker my-5" />
        <Projects />
        <span className="page-breaker my-5" />
        <Accomplishments />
        <Contact />
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
