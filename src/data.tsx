import * as React from "react";
import {
  FaCodepen,
  FaFreeCodeCamp,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { SiIndeed } from "react-icons/si";

import {
  CredentialsList,
  ProfileProvider,
  ProfilesList,
  ProjectsList,
} from ".";

const { CODEPEN, FREE_CODE_CAMP, GITHUB, INDEED } = ProfileProvider;

export const getProfilesList = (iconSize: number | string): ProfilesList => [
  {
    icon: <FaCodepen {...{ size: iconSize }} />,
    profileProvider: CODEPEN,
    profileUrl: "https://github.com/BlueberryFridge",
  },
  {
    icon: <FaFreeCodeCamp {...{ size: iconSize }} />,
    profileProvider: FREE_CODE_CAMP,
    profileUrl: "https://www.freecodecamp.org/blueberryfridge",
  },
  {
    icon: <FaGithub {...{ size: iconSize }} />,
    profileProvider: GITHUB,
    profileUrl: "https://github.com/JanineLapiz",
  },
  {
    icon: <SiIndeed {...{ size: iconSize }} />,
    profileProvider: INDEED,
    profileUrl: "https://my.indeed.com/p/janinel-r17eh31",
  },
  {
    icon: <FaLinkedin {...{ size: iconSize }} />,
    profileProvider: FREE_CODE_CAMP,
    profileUrl: "https://www.linkedin.com/in/janinelapiz/",
  },
];

export const projects: ProjectsList = {
  codePen: [
    {
      id: 1,
      name: "Pomodoro Clock",
      url: "https://codepen.io/BlueberryFridge/pen/gOrowYZ",
      imgUrl: "./images/pomodoro-clock.png",
    },
    {
      id: 2,
      name: "Markdown Editor and Previewer",
      url: "https://codepen.io/BlueberryFridge/pen/eYZdaEK",
      imgUrl: "./images/md-editor.png",
    },
    {
      id: 3,
      name: "JavaScript Calculator",
      url: "https://codepen.io/BlueberryFridge/pen/RwaVeMe",
      imgUrl: "./images/js-calc.png",
    },
    {
      id: 4,
      name: "Drum Machine",
      url: "https://codepen.io/BlueberryFridge/pen/MWybVyz",
      imgUrl: "./images/drum-machine.png",
    },
    {
      id: 5,
      name: "Random Quote Generator",
      url: "https://codepen.io/BlueberryFridge/pen/BaKomWy",
      imgUrl: "./images/quote-gen.png",
    },
  ],
  heroku: [
    {
      id: 6,
      name: "Inventory App",
      url: "https://shielded-ridge-27315.herokuapp.com/inventory",
      imgUrl: "./images/inventory-app.png",
      repository: "https://github.com/BlueberryFridge/inventory-app",
    },
    {
      id: 7,
      name: "My Portfolio",
      url: "https://damp-badlands-08236.herokuapp.com/",
      imgUrl: "./images/my-portfolio.png",
      repository: "https://github.com/BlueberryFridge/my-portfolio",
    },
  ],
};

export const accomplishments: CredentialsList = [
  {
    id: 8,
    title: "Front-End Web Development with React",
    issuedBy: "Coursera",
    issued: "November 2020",
    expires: "No Expiration",
    credentialId: "Q9FY8PWB4LMD",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/certificate/Q9FY8PWB4LMD",
  },
  {
    id: 9,
    title: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
    issuedBy: "Coursera",
    issued: "October 2020",
    expires: "No Expiration",
    credentialId: "JHRB787PA9GC",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/certificate/JHRB787PA9GC",
  },
  {
    id: 10,
    title: "Front End Libraries",
    issuedBy: "freeCodeCamp",
    issued: "September 2020",
    expires: "No Expiration",
    credentialId: null,
    credentialUrl:
      "https://www.freecodecamp.org/certification/blueberryfridge/front-end-libraries",
  },
  {
    id: 11,
    title: "JavaScript Algorithms and Data Structures",
    issuedBy: "freeCodeCamp",
    issued: "July 2020",
    expires: "No Expiration",
    credentialId: null,
    credentialUrl:
      "https://www.freecodecamp.org/certification/blueberryfridge/javascript-algorithms-and-data-structures",
  },
  {
    id: 12,
    title: "Responsive Web Design",
    issuedBy: "freeCodeCamp",
    issued: "July 2020",
    expires: "No Expiration",
    credentialId: null,
    credentialUrl:
      "https://www.freecodecamp.org/certification/blueberryfridge/responsive-web-design",
  },
  {
    id: 13,
    title: "Board of Agricultural and Biosystems Engineering",
    issuedBy: "Philippine Professional Regulation Commission",
    issued: "December 2019",
    expires: "May 2022",
    credentialId: "0010532",
    credentialUrl: null,
  },
  {
    id: 14,
    title: "Bachelor's Degree in Agricultural and Biosystems Engineering",
    issuedBy: "University of the Philippines Los Baños",
    issued: "January 2019",
    expires: "No Expiration",
    credentialId: null,
    credentialUrl: null,
  },
];
