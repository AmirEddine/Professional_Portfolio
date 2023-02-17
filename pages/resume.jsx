import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

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
        <h2 className='text-center'>Resume</h2>
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
          <div className='hidden sm:block'>
            <p>
              Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          I am currently a student at La Cité Collégiale and I am an innovative and astute
          web developer and frontend developer. I am versed in analyzing user needs and
          developing software to precisely meet various needs. I have a command of several
          programming languages, and I am proactive in following industry trends.
          As a web programmer, I have experience in creating new web applications. I am also
          able to wear many programming hats with the ability to create everything from
          prototypes to production applications using a variety of programming languages
          such as HTML, CSS, JavaScript, C# and Java.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>NoSQL
            <span className='px-2'>|</span>Redux
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> RESTAPI
          </p>

        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>

          <p className='py-1 '>Although I do not have any professional experience yet,
            I have acquired skills in teamwork by carrying out several projects within
            the academic framework. I worked with my colleagues on various programming
            projects, where we had to collaborate and communicate effectively to achieve our goals.
            By working in a team, I learned to listen to other team members, to share
            my ideas constructively, and to respect the opinions of others. I also
            developed skills in problem solving and collective decision making.
            I am convinced that these skills in teamwork and agile methodology will
            be useful to me in my future work as a developer. I am ready to put these
            skills at the service of the company to achieve our common goals</p>

        </div>


        {/* Personal Experience */}


        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Other Experience
        </h5>

        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>CITY OF Ottawa, ON</span>
            <span className='px-2'>|</span>OTO CENTER Automotive Repair, ON
          </p>
          <p className='py-1 italic'>Automotive Mechanic (2022 juin – 2022 sept)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Perform regular maintenance and repairs on a wide range of vehicles, including engine repair, brakes, suspension, and electrical systems.
            </li>
            <li>
              Use diagnostic equipment to troubleshoot and identify problems with vehicles, and provide recommendations for repairs and maintenance.
            </li>
            <li>
              Manage customer inquiries and service requests, providing excellent customer service and ensuring customer satisfaction.
            </li>
            <li>
              Collaborated with other mechanics and service advisors to improve workflow and ensure timely repairs and maintenance.
            </li>
            <li>
              Conducted routine maintenance and repairs on a variety of vehicles, including oil changes, tire rotations, and brake adjustments.
            </li>
          </ul>
          <p className='py-1 '>References: Available upon request.</p>
        </div>


        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>CITY OF Ottawa, ON</span>
            <span className='px-2'>|</span>UberEats DoorDash SkipTheDishes
          </p>
          <p className='py-1 italic'>Food Delivery Driver (2021 Sept – present)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Knowledgeable of local roads and traffic patterns, with an excellent driving record and a valid driver&#39;s license

            </li>
            <li>
              Excellent communication and customer service skills, able to interact professionally with customers and restaurant staff
            </li>
            <li>
              Ability to work independently and under pressure, with a strong focus on safety and accuracy
            </li>
            <li>
              Drive safely and efficiently to deliver food orders from various restaurants to customers homes and offices
            </li>
            <li>
              Interact professionally with customers and restaurant staff, ensuring accuracy and timeliness of deliveries
            </li>
            <li>
              Familiarity with a variety of mobile apps and software used for food delivery and navigation
            </li>
            <li>
              Conduct routine maintenance and inspections of delivery vehicles, ensuring they are clean, safe, and in good working order
            </li>
          </ul>
          <p className='py-1 '>Driver&#39;s License: Class 5 Driver&#39;s License with a clean driving record</p>
        </div>
      </div>

    </>
  );
};

export default resume;
