import React from 'react'
import './Diploma.css';
const Diploma = () => {
  return (
    <div className="dip-container">
      <h1 className="dip-heading">Diploma Programs</h1>
      <p className="dip-subtitle">
        Explore our technical and professional diploma programs.
      </p>

      <div className="dip-grid">
        <div className="dip-card">
          <h3>Diploma in Computer Engineering</h3>
          <p>Learn programming, hardware, networking, and software development.</p>
        </div>

        <div className="dip-card">
          <h3>Diploma in Mechanical Engineering</h3>
          <p>Focus on machines, manufacturing, CAD, and industrial design.</p>
        </div>

        <div className="dip-card">
          <h3>Diploma in Civil Engineering</h3>
          <p>Study construction, surveying, materials, and structural design.</p>
        </div>

        <div className="dip-card">
          <h3>Diploma in Electrical Engineering</h3>
          <p>Learn circuits, power systems, and electrical machines.</p>
        </div>

        <div className="dip-card">
          <h3>Diploma in Electronics & Telecommunication</h3>
          <p>Communication systems, circuits, embedded tech & more.</p>
        </div>

        <div className="dip-card">
          <h3>Diploma in Information Technology</h3>
          <p>Software, databases, web development & IT support.</p>
        </div>
      </div>
    </div>
    
)
}

export default Diploma
