import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FormattedMessage } from 'react-intl';

const resume = () => {
  return (
    <>
      <Head>
        <title>Amir | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'><FormattedMessage id='app.Resume.title'/></h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Amir Eddine Benmachou</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/amir-eddine-benmachou-a16573231/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/AmirEddine'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='block'>
            <p>
            <FormattedMessage id='app.Main.speciality'/>
            </p>
          </div>
          
        </div>
        <p>
          <FormattedMessage id='app.Resume.about'/>
        </p>


        <h5 className='text-center underline text-[18px] py-4'>
          <FormattedMessage id='app.Resume.Skills' />
        </h5>
        {/* Experience */}
        <div className='py-6'>
          
          <h6 className='underline text-[16px] py-1' ><FormattedMessage id='app.Resume.Skills.title1'/> </h6> 
            <ul className='list-disc list-outside px-7 py-1 leading-relaxed cursor-default'>
              <li className='cursor-text'><FormattedMessage id='app.Resume.Skills.web.li1'/></li>
              <li className='cursor-text'><FormattedMessage id='app.Resume.Skills.web.li2'/></li>
              <li className='cursor-text'><FormattedMessage id='app.Resume.Skills.web.li3'/></li>
              <li className='cursor-text'><FormattedMessage id='app.Resume.Skills.web.li4'/></li>
              <li className='cursor-text'><FormattedMessage id='app.Resume.Skills.web.li5'/></li>
            </ul>
            <br />
            <h6 className='underline text-[16px] py-1' ><FormattedMessage id='app.Resume.Skills.title2'/></h6> 
            <ul className='list-disc list-outside px-7 py-1 leading-relaxed cursor-default'>
            <li className='cursor-text'><FormattedMessage id='app.Resume.Skills.mobile.li1'/></li>
            <li className='cursor-text'><FormattedMessage id='app.Resume.Skills.mobile.li2'/></li>
            </ul>
            <br />
            <h6 className='underline text-[16px] py-1' ><FormattedMessage id='app.Resume.Skills.title3'/></h6> 
            <ul className='list-disc list-outside px-7 py-1 leading-relaxed cursor-default'>
            <li className='cursor-text'><FormattedMessage id='app.Resume.Skills.desktop.li1'/></li>
            <li className='cursor-text'><FormattedMessage id='app.Resume.Skills.desktop.li2'/></li>
            </ul>
            
        </div>


        {/* Personal Experience */}


        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          <FormattedMessage id='app.Resume.OtherExperience' />
        </h5>

        {/* Experience */}

        <div className='py-6'>
          <p >
            <span className='font-bold'><FormattedMessage id='app.Resume.OtherExperience.jobTitle_2' /></span>
            <span className='px-2'>|</span>UberEats DoorDash SkipTheDishes
          </p>
          <p className='py-1 italic'><FormattedMessage id='app.Resume.OtherExperience.city&date_2'/></p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed cursor-default'>
            <li className='cursor-text'>
            <FormattedMessage id='app.Resume.OtherExperience.job_2.li_1' />
            </li>
            <li className='cursor-text'>
            <FormattedMessage id='app.Resume.OtherExperience.job_2.li_2' />
            </li>
          </ul>
          <p className='py-1 '><FormattedMessage id='app.Resume.OtherExperience.job_2.References'/></p>
        </div>

        <div className='py-6'>
          <p >
            <span className='font-bold'><FormattedMessage id='app.Resume.OtherExperience.jobTitle_1' /></span>
            <span className='px-2'>|</span>OTO CENTER Automotive Repair
          </p>
          <p className='py-1 italic'><FormattedMessage id='app.Resume.OtherExperience.city&date'/></p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li className='cursor-text'>
              <FormattedMessage id='app.Resume.OtherExperience.job_1.li_1' />
            </li>
            <li className='cursor-text'>
            <FormattedMessage id='app.Resume.OtherExperience.job_1.li_2' />
            </li>
            <li className='cursor-text'> 
            <FormattedMessage id='app.Resume.OtherExperience.job_1.li_3' />
            </li >
          </ul>
          <p className='py-1 '><FormattedMessage id='app.Resume.OtherExperience.job_1.References'/></p>
        </div>


        
      </div>

    </>
  );
};

export default resume;
