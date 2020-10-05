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
                <div id="home-menu" className='selection'>Home</div>
                <div id="bio" className='selection'>About Me</div>
                <div id="projects">
                    <div id='projects'>My Projects</div>
                    <div id="codepen" className='projects selection'>CodePen</div>
                    <div id="github" className='projects selection'>GitHub</div>
                </div>
                <button id="contact">Contact Me</button>
                <div id="menu-footer"></div>
            </nav>
        </>
    );
}