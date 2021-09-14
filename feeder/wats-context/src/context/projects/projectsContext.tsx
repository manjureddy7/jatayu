import * as React from 'react';

import projectsReducer from './projectsReducer';
import { PROJECTS_INITIAL_STATE } from './constants';

// Create context
const ProjectsContext = React.createContext(null);

// Export context as hook
function useProjects() {
  const context = React.useContext(ProjectsContext);
  if (!context) {
    throw new Error('useCount must be used within a ProjectsProvider');
  }
  return context;
}

function ProjectsProvider(props: any) {
  const [projects, projectsDispatch] = React.useReducer<any>(projectsReducer, PROJECTS_INITIAL_STATE);
  return <ProjectsContext.Provider value={[projects, projectsDispatch]} {...props} />;
}

export { ProjectsProvider, useProjects };
