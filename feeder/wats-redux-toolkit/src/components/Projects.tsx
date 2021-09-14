import * as React from 'react';
import { getProjects } from '../store/slices/projectsSlice';
import { useAppSelector } from '../store/storeHooks';

const Projects = () => {
  const projects = useAppSelector(getProjects);
  return (
    <div className="content">
      <h3>List of the Projects under JATAYU</h3>
      <ul>
        {projects.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
