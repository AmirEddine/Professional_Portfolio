import React from 'react';
import DungeonExplorer from '../public/assets/projects/DungeonExplorer.png';
import WeatherApp_pic from '../public/assets/projects/WeatherApp.png'
import Ecommerce from '../public/assets/projects/Ecommerce.png'
import CentreInfo from '../public/assets/projects/CentreInfo.png'
import TechnoShop from '../public/assets/projects/TechnoShop.png'
import ProjectItem from './ProjectItem';
import { FormattedMessage } from 'react-intl';

const Projects = () => {
  return (
    <div id='projects' className='w-full items-center py-16' >
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          <FormattedMessage id='app.NavBar.Nav_item_4'/>
        </p>
        <h2 className='py-4'><FormattedMessage id='app.Project.what' /></h2>
        <div className='grid md:grid-cols-2 gap-8'>
        
          <ProjectItem
            title='Front-End Ecommerce App'
            backgroundImg={Ecommerce}
            projectUrl='/Ecommerce'
            tech='React'
          />

          <ProjectItem
            title='Weather App'
            backgroundImg={WeatherApp_pic}
            projectUrl='/WeatherApp'
            tech='React'
          />

          <ProjectItem
            title='Dungeon Explorer'
            backgroundImg={DungeonExplorer}
            projectUrl='/DungeonExplorer'
            tech='HTML CSS JavaScript'
          />

        <ProjectItem
            title='Full-Stack computer training courses App'
            backgroundImg={CentreInfo}
            projectUrl='/CentreInfo'
            tech='NodeJS'
          />

          <ProjectItem
            title='Full-Stack Ecommerce App'
            backgroundImg={TechnoShop}
            projectUrl='/TechnoShop'
            tech='NodeJS'
          />

        </div>
      </div>
    </div>
  );
};

export default Projects;
