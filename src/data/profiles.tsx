import { FaCodepen, FaFreeCodeCamp, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Profile, ProfileProvider } from '../models/Profile';
import { SiIndeed } from 'react-icons/si';

export const profiles = (iconSize: number | string): Profile[] => [
  {
    icon: <FaCodepen {...{ size: iconSize }} />,
    provider: ProfileProvider.CODEPEN,
    url: 'https://github.com/BlueberryFridge',
  },
  {
    icon: <FaFreeCodeCamp {...{ size: iconSize }} />,
    provider: ProfileProvider.FREE_CODE_CAMP,
    url: 'https://www.freecodecamp.org/blueberryfridge',
  },
  {
    icon: <FaGithub {...{ size: iconSize }} />,
    provider: ProfileProvider.GITHUB,
    url: 'https://github.com/JanineLapiz',
  },
  {
    icon: <SiIndeed {...{ size: iconSize }} />,
    provider: ProfileProvider.INDEED,
    url: 'https://my.indeed.com/p/janinel-r17eh31',
  },
  {
    icon: <FaLinkedin {...{ size: iconSize }} />,
    provider: ProfileProvider.FREE_CODE_CAMP,
    url: 'https://www.linkedin.com/in/janinelapiz/',
  },
];
