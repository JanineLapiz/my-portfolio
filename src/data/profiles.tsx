import { FaCodepen, FaFreeCodeCamp, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Profile, ProfileHost } from '../models/Profile';
import { SiGmail, SiIndeed } from 'react-icons/si';

export type ProfileConfig = {
  iconSizePx: number;
};

export const profiles: Profile[] = [
  {
    icon: <FaCodepen />,
    host: ProfileHost.CODEPEN,
    url: 'https://github.com/BlueberryFridge'
  },
  {
    icon: <FaFreeCodeCamp />,
    host: ProfileHost.FREE_CODE_CAMP,
    url: 'https://www.freecodecamp.org/blueberryfridge'
  },
  {
    icon: <FaGithub />,
    host: ProfileHost.GITHUB,
    url: 'https://github.com/JanineLapiz'
  },
  {
    icon: <SiIndeed />,
    host: ProfileHost.INDEED,
    url: 'https://my.indeed.com/p/janinel-r17eh31'
  },
  {
    icon: <FaLinkedin />,
    host: ProfileHost.FREE_CODE_CAMP,
    url: 'https://www.linkedin.com/in/janinelapiz/'
  }
];
