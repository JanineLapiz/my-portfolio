import React from 'react'

export default function SideMenu(props) {
    const { isMenuClicked, setMenuClicked } = props;

    return(
        <>
            <button id="menu-button" 
                    className={`open-menu ${!isMenuClicked ? 'close-menu' : ''}`} 
                    onClick={() => setMenuClicked(!isMenuClicked)}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <nav id="menu-body" className={`open-sm ${isMenuClicked ? 'close-sm' : ''}`}>
                <div id="menu-title">My Developer Portfolio</div>
                <div id="home-menu" className='selection'><a href='#home'>Home</a></div>
                <div id="bio" className='selection'><a href='#about-me'>About Me</a></div>
                <div id="projects">
                    <div id='projects'>Projects</div>
                    <div id="codepen" className='projects-selection selection'><a href='#cp-projects'>CodePen</a></div>
                    <div id="github" className='projects-selection selection'><a href='#heroku-projects'>Heroku</a></div>
                </div>
                <div id="accomp-menu" className='selection'><a href='#accomp'>Accomplishments</a></div>
                <a role='button' id="contactBtn" href='#contact' className='btn'>Contact Me</a>
            </nav>
        </>
    );
}