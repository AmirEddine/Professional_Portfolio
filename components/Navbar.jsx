import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import NavLogo from '../public/assets/navLogo.png'
import { FormattedMessage } from 'react-intl';
import Example from './Example';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');
  
  

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
          <a>
            <Image
              src={NavLogo}
              alt='/'
              width='125'
              height='50'
              className='cursor-pointer'
            />
          </a>
        </Link>
       {/* <div>
          <ThemeToggler/>
    </div>*/}
        <div>
          <ul style={{ color: `${linkColor}` }} className='hidden items-center md:flex '>
            <li className='ml-10 text-sm uppercase hover:border-b'>
             <Link href='/#'><a ><FormattedMessage id='app.NavBar.Nav_item_1'></FormattedMessage></a></Link> 
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
            <Link href='/#about'><a ><FormattedMessage id='app.NavBar.Nav_item_2'></FormattedMessage></a></Link> 
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
            <Link href='/#skills'><a><FormattedMessage id='app.NavBar.Nav_item_3'></FormattedMessage></a></Link>  
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
            <Link href='/#projects'><a ><FormattedMessage id='app.NavBar.Nav_item_4'></FormattedMessage></a></Link>  
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/resume' legacyBehavior><a ><FormattedMessage id='app.NavBar.Nav_item_5'></FormattedMessage></a></Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
            <Link href='/#contact'><a >Contact</a></Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <div className='flex flex-row '><Example></Example></div>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                <a>
                  <Image
                    src={NavLogo}
                    width='87'
                    height='35'
                    alt='/'
                  />
                </a>
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                <FormattedMessage id='app.NavBar.Nav_item_1'></FormattedMessage>
                </li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                <FormattedMessage id='app.NavBar.Nav_item_2'></FormattedMessage>
                </li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                <FormattedMessage id='app.NavBar.Nav_item_3'></FormattedMessage>
                </li>
              </Link>
              <Link href='/#projects'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                <FormattedMessage id='app.NavBar.Nav_item_4'></FormattedMessage>
                </li>
              </Link>
              <Link href='/resume'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                <FormattedMessage id='app.NavBar.Nav_item_5'></FormattedMessage>
                </li>
              </Link>
              <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Contact
                </li>
              </Link>
              <li className='py-4 text-sm'>
              <div ><Example></Example></div>
            </li>
              
            </ul>
            <div className='pt-2'>
              <p className='uppercase tracking-widest text-[#5651e5]'>
               <FormattedMessage id='app.title.connect_2'></FormattedMessage>
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/amir-eddine-benmachou-a16573231/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/AmirEddine'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
                <Link href='/#contact'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href='/resume'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
