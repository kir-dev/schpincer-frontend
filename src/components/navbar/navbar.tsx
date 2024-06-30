'use client';
import Hamburger from 'hamburger-react';
import Link from 'next/link';
import { useState } from 'react';
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
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className='flex justify-between items-center w-full h-20 px-4 text-black bg-white'>
        <div className='flex items-center justify-center'>
          <FaHamburger size={30} />
          <h1 className='text-3xl font-signature ml-2'>
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

        <button className='md:hidden' onClick={toggleMenu}>
          <Hamburger size={30} />
        </button>
      </div>
      {/* Dropdown menu for small screens */}
      <div className='md:hidden bg-white'>
        {isOpen ? (
          <ul className='flex flex-col space-y-3 pt-3 pb-3'>
            {links.map(({ id, link }) => (
              <li
                key={id}
                className='nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:text-black duration-200 link-underline'
              >
                <Link href={link}>{link}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <div />
        )}
      </div>
    </header>
  );
}
