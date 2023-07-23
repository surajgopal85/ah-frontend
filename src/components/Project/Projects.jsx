import React from 'react';

// components
import { ProjectList } from '../helpers/ProjectList';
import ProjectItem from './ProjectItem';
import Header from '../UI/Header';

function Projects() {
  return (
    <div>
      <Header />
      <div className='container mx-auto grid gap-4 grid-cols-3 grid-rows-3'>
        {ProjectList.map((item, index) => (
        <ProjectItem
          id={index}
          image={item.image}
          address={item.address}
          market={item.market}
          start_date={item.start_date}
          proj_end_date={item.proj_end_date}
          units={item.units}
          phase={item.phase}
          design_phase={item.design_phase}
          design_phase_completion={item.design_phase_completion}
          budget={item.budget}
          status={item.status}
          gmp={item.gmp}
          last_issuance={item.last_issuance}
        />))}
      </div>
    </div>

  )
}

export default Projects;
