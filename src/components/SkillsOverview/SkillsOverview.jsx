import React from 'react';
import './SkillsOverview.scss';

function SkillsOverview() {
    return (
      <div className="skills trait--right">
        <h4 className="skills__heading">
          Some of the languages, frameworks and pre-processors which I regularly employ:
        </h4>
        <ul className="skills__list">
          <li className="skills__list-item">HTML</li>
          <li className="skills__list-item">CSS</li>
          <li className="skills__list-item">SASS</li>
          <li className="skills__list-item">JavaScript</li>
          <li className="skills__list-item">React</li>
          <li className="skills__list-item">React Router</li>
          <li className="skills__list-item">Git</li>
          <li className="skills__list-item">nodeJS</li>
          <li className="skills__list-item">expressJS</li>
          <li className="skills__list-item">Redux</li>
          <li className="skills__list-item">MySQL</li>
          <li className="skills__list-item">Firebase</li>
        </ul>
        <p className="skills__caption">
          I am constantly expanding my tool kit of development skills and truly love learning something new.
        </p>
      </div>
    )
}

export default SkillsOverview
