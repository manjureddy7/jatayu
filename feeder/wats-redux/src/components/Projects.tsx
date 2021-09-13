import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RootState } from '../store/reducers';
import getAsyncPosts from '../store/thunks/getPosts';

type ProjectProps = {
  projects: string[]
}

const Projects = ({ projects }: ProjectProps): JSX.Element => (
  <div className="content">
    <h3>List of the Projects under JATAYU</h3>
    <ul>
      {projects.map((project) => (
        <li key={project}>{project}</li>
      ))}
    </ul>
    {/* <button type="button" onClick={() => getPosts()}>Get Posts</button> */}
  </div>
);

const mapStateToProps = (state: any) => (
  { projects: state.projectsReducer['projects'] }
);

/**
 * Dispatch for the function component
*/

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    getPosts: () => dispatch<any>(getAsyncPosts()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
