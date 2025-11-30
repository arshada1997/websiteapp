import React from 'react'
import './Degree.css'

const Degree = () => {
  return (
    <div className="deg-container">
      <h1 className="deg-heading">Degree Programs</h1>
      <p className="deg-subtitle">
        Choose from a wide range of undergraduate degree programs.
      </p>

      <div className="deg-grid">

        <div className="deg-card">
          <h3>B.Sc (Bachelor of Science)</h3>
          <p>Programs in Physics, Chemistry, Mathematics, Biology & more.</p>
        </div>

        <div className="deg-card">
          <h3>B.Com (Bachelor of Commerce)</h3>
          <p>Specializations in Accounting, Finance, Banking, Taxation.</p>
        </div>

        <div className="deg-card">
          <h3>BA (Bachelor of Arts)</h3>
          <p>Courses in Humanities, Social Sciences, Languages.</p>
        </div>

        <div className="deg-card">
          <h3>BBA (Bachelor of Business Administration)</h3>
          <p>Management, entrepreneurship & business fundamentals.</p>
        </div>

        <div className="deg-card">
          <h3>BCA (Bachelor of Computer Applications)</h3>
          <p>Software development, databases, web apps & IT fundamentals.</p>
        </div>

        <div className="deg-card">
          <h3>BE / B.Tech (Engineering)</h3>
          <p>Technical engineering degrees with various specializations.</p>
        </div>

      </div>
    </div>

  )
}

export default Degree
