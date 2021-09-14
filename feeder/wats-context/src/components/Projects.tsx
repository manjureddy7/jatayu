import * as React from 'react';
import { useProjects } from '../context/projects/projectsContext';

const Projects = () => {
  const [{ projects }] = useProjects();
  return (
    <div className="content">
      <h3>List of the Projects under JATAYU</h3>
      <ul>
        {projects.map((project: string) => (
          <li key={project}>{project}</li>
        ))}
      </ul>
      {/* <button type="button" onClick={() => getPosts()}>Get Posts</button> */}
    </div>
  );
};

export default Projects;
