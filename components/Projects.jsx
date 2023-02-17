import React from 'react';
import academic_potfolio from '../public/assets/projects/academic_potfolio.png';
import Ecommerce from '../public/assets/projects/Ecommerce.png'
import ProjectItem from './ProjectItem';

const Projects = ({ content }) => {
  return (
    <div id='projects' className='w-full items-center py-16' >
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          {content.Nav_item_4}
        </p>
        <h2 className='py-4'>{content.Project_what}</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Academic Portfolio'
            backgroundImg={academic_potfolio}
            projectUrl='/academic_portfolio'
            tech='Next JS'
          />
          <ProjectItem
            title='E commerce App'
            backgroundImg={Ecommerce}
            projectUrl='/Ecommerce'
            tech='React JS'

          />

        </div>
      </div>
    </div>
  );
};

export default Projects;
