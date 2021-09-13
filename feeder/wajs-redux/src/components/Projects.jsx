import React from 'react';
import { connect } from 'react-redux';
import getAsyncPosts from '../store/thunks/getPosts';

const Projects = ({ projects }) => (
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

const mapStateToProps = (state) => (
  { projects: state.projects.projects }
);

/**
 * Dispatch for the function component
*/

function mapDispatchToProps(dispatch) {
  return {
    getPosts: () => dispatch(getAsyncPosts()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
