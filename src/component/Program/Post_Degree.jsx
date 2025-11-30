import React from 'react'
import './ProgramsFile.css'
const Post_Degree = () => {
  return (
    <div className="pg-container">
      <h1 className="pg-heading">Post Graduation Programs</h1>
      <p className="pg-subtitle">
        Choose from our specialized Post Graduate courses to boost your career.
      </p>

      <div className="pg-grid">
        <div className="pg-card">
          <h3>MBA</h3>
          <p>Master of Business Administration</p>
        </div>

        <div className="pg-card">
          <h3>MCA</h3>
          <p>Master of Computer Applications</p>
        </div>

        <div className="pg-card">
          <h3>M.Sc</h3>
          <p>Master of Science</p>
        </div>

        <div className="pg-card">
          <h3>M.Tech</h3>
          <p>Master of Technology</p>
        </div>

        <div className="pg-card">
          <h3>MA</h3>
          <p>Master of Arts</p>
        </div>

        <div className="pg-card">
          <h3>M.Com</h3>
          <p>Master of Commerce</p>
        </div>
      </div>
    </div>
  );
}


export default Post_Degree
