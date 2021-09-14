import * as React from 'react';

import projectsReducer from './projectsReducer';
import { PROJECTS_INITIAL_STATE } from './constants';

// Create context
const ProjectsContext = React.createContext();

// Export context as hook
function useProjects() {
  const context = React.useContext(ProjectsContext);
  if (!context) {
    throw new Error('useCount must be used within a ProjectsProvider');
  }
  return context;
}

function ProjectsProvider(props) {
  const [projects, projectsDispatch] = React.useReducer(projectsReducer, PROJECTS_INITIAL_STATE);
  // eslint-disable-next-line
  return <ProjectsContext.Provider value={[projects, projectsDispatch]} {...props} />;
}

export { ProjectsProvider, useProjects };
