import Link from 'next/link';
import { FaHamburger } from 'react-icons/fa';

const links = [
  {
    id: 1,
    link: 'menu',
  },
  {
    id: 2,
    link: 'resort',
  },
  {
    id: 3,
    link: 'about',
  },
  {
    id: 4,
    link: 'contact',
  },
];

export default function Navbar() {
  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-black bg-white'>
      <div className='flex items-center justify-center'>
        <FaHamburger className='text-4xl font-signature ml-2' />
        <h1 className='text-4xl font-signature ml-2'>
          <a className='link-underline link-underline-black' href='/'>
            SCH-PINCÉR
          </a>
        </h1>
      </div>

      <ul className='hidden md:flex'>
        {links.map(({ id, link }) => (
          <li
            key={id}
            className='nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-black duration-200 link-underline'
          >
            <Link href={link}>{link}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
