import React from 'react';
import { connect } from 'react-redux';

const Projects = ({ projects }) => (
  <div className="content">
    <h3>List of the Projects under JATAYU</h3>
    <ul>
      {projects.map((project) => (
        <li key={project}>{project}</li>
      ))}
    </ul>
  </div>
);

const mapStateToProps = (state) => (
  { projects: state.projects.projects }
);

/**
 * Dispatch for the function component
*/

// function mapDispatchToProps(dispatch) {
//   return {
//     addProject: project => dispatch(addProject(project))
//   };
// }

export default connect(mapStateToProps)(Projects);
