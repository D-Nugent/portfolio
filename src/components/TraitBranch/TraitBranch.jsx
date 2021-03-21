import React from 'react';
import EducationOverview from '../EducationOverview/EducationOverview';
import ExperienceOverview from '../ExperienceOverview/ExperienceOverview';
import SkillsOverview from '../SkillsOverview/SkillsOverview';
import ProjectsOverview from '../ProjectsOverview/ProjectsOverview';
import './TraitBranch.scss';

function TraitBranch({trait}) {

  const conditionalRender = (trait) => {
    switch (trait) {
      case 'Experience':
        return <ExperienceOverview/>
      case 'Education':
        return <EducationOverview/>
      case 'Skills':
        return <SkillsOverview/>
      case 'Projects':
        return <ProjectsOverview/>
      default:
        break;
    }
  }
  
    return (
      <article className={`trait`}>
        <h2 className="trait__heading">{trait}</h2>
        <div className="trait__wrapper">
          {conditionalRender(trait)}
        </div>
      </article>
    )
}

export default TraitBranch
