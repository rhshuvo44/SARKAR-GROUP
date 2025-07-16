import React from 'react';
import LatestProject from './LatestProject';

const EngineeringProjects = () => {
   const project = { title: "Engineering" };
    return (
        <div>
          <LatestProject project={project} />  
        </div>
    );
};

export default EngineeringProjects;