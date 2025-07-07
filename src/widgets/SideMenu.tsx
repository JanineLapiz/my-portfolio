import * as React from "react";

export const SideMenu = (args: {
  isMenuClicked: boolean;
  setMenuClicked: (isMenuClicked: boolean) => void;
}): JSX.Element => {
  const { isMenuClicked, setMenuClicked } = args;

  return (
    <>
      <button
        id="menu-button"
        className={`open-menu ${!isMenuClicked ? "close-menu" : ""}`}
        onClick={() => setMenuClicked(!isMenuClicked)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav
        id="menu-body"
        className={`open-sm ${isMenuClicked ? "close-sm" : ""}`}
      >
        <div id="menu-title">My Developer Portfolio</div>
        <a href="#home">
          <div id="home-menu" className="selection">
            Home
          </div>
        </a>
        <a href="#about-me">
          <div id="bio" className="selection">
            About Me
          </div>
        </a>
        <div id="projects">
          <div id="projects">Projects</div>
          <a href="#cp-projects">
            <div id="codepen" className="projects-selection selection">
              CodePen
            </div>
          </a>
          <a href="#heroku-projects">
            <div id="github" className="projects-selection selection">
              Heroku
            </div>
          </a>
        </div>
        <a href="#accomp">
          <div id="accomp-menu" className="selection">
            Accomplishments
          </div>
        </a>
        <a role="button" id="contactBtn" href="#contact" className="btn">
          Contact Me
        </a>
      </nav>
    </>
  );
};
