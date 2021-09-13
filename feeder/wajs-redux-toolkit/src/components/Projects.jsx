import React from 'react';
import { useSelector } from 'react-redux';
import { getProjects } from '../store/slices/projectsSlice';

const Projects = () => {
  const projects = useSelector(getProjects);
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
