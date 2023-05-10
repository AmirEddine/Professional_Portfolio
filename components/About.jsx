import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/projects/about.jpg';
import { FormattedMessage } from 'react-intl';


const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            <FormattedMessage id='app.NavBar.Nav_item_2'></FormattedMessage>
          </p>
          <h2 className='py-4'></h2>
          <p className='py-2 text-xl text-gray-600'>
            <FormattedMessage id='app.Body.About.about' ></FormattedMessage><br />
          </p>
          <p className='py-2 text-xl text-gray-600'>
            <br /><FormattedMessage id='app.Body.About.about_2'></FormattedMessage>
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-xl text-gray-600 underline cursor-pointer'>
            <FormattedMessage id='app.Body.check_out'></FormattedMessage>
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
