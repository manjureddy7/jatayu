import * as React from 'react';

import usersReducer from './usersReducer';
import { UserState, USERS_INITIAL_STATE } from './constants';



// Create context
const UsersContext = React.createContext(null);

// Export context as hook
function useUsers() {
  const context = React.useContext(UsersContext);
  if (!context) {
    throw new Error('useCount must be used within a UsersProvider');
  }
  return context;
}

function UsersProvider(props: any) {
  const [projects, projectsDispatch] = React.useReducer<any>(usersReducer, USERS_INITIAL_STATE);
  const value = React.useMemo(() => [projects, projectsDispatch], [projects]);
  
  return <UsersContext.Provider value={value} {...props} />
  
};

export { UsersProvider, useUsers };