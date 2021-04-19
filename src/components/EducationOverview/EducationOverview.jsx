import React from 'react';
import './EducationOverview.scss';

function EducationOverview() {
    return (
      <div className="education trait--left">
        <article className="education__wrapper">
          <h2 className="education__school">BrainStation</h2>
          <h4 className="education__course">Web Development Diploma (92.2%)</h4>
          <p className="education__dates">Nov 2020 - Feb 2021</p>
        </article>
        <article className="education__wrapper">
          <h2 className="education__school">University of Surrey</h2>
          <h4 className="education__course">Bachelor of Science (First Class Honors)</h4>
          <p className="education__dates">Sep 2010 - Jul 2014</p>
        </article>
      </div>
    )
}

export default EducationOverview
