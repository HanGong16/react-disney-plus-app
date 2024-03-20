import { IoMdHome } from 'react-icons/io';
import { IoMdSearch } from 'react-icons/io';
import { BiLogIn } from 'react-icons/bi';
// import { FaStar } from 'react-icons/fa';
// import { RiMovie2Fill } from 'react-icons/ri';
// import { PiTelevisionFill } from 'react-icons/pi';

export const navLists = [
  {
    icon: <IoMdHome />,
    title: '홈',
    url: '/',
  },
  {
    icon: <IoMdSearch />,
    title: '검색',
    url: 'search',
  },
  {
    icon: <BiLogIn />,
    title: 'login',
    url: 'login',
  },
  // {
  //   icon: <FaStar />,
  //   title: '오리지널',
  //   url: '/originals',
  // },
  // {
  //   icon: <RiMovie2Fill />,
  //   title: '영화',
  //   url: '/movies',
  // },
  // {
  //   icon: <PiTelevisionFill />,
  //   title: '시리즈',
  //   url: '/series',
  // },
];
