import React from 'react';
import LearnMore from '../LearnMore/LearnMore';
import './ExperienceOverview.scss';

function ExperienceOverview() {
    return (
      <div className="experience trait--left">
        <h2 className="experience__current">Current Role: <span className="experience__employer">BrainStation</span> </h2>
        <h4 className="experience__role">Web Development Teaching Assistant</h4>
        <p className="experience__dates">Feb 2021 - Current</p>
        <ul className="experience__responsibilities"> 
          <h4 className="experience__responsibilities-heading">Responsibilities/Successes:</h4>
          <li className="experience__responsibilities-item">The education of 25+ students</li>
          <li className="experience__responsibilities-item">Leading whiteboarding sessions</li>
          <li className="experience__responsibilities-item">Grading assignments with a focus on code quality</li>
          <li className="experience__responsibilities-item">Independently running Q&amp;A sessions</li>
          <li className="experience__responsibilities-item">Mentoring Junior Developers</li>
        </ul>
        <LearnMore position='left'/>
      </div>
    )
};

export default ExperienceOverview
