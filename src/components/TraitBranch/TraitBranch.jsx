import React from 'react';
import EducationOverview from '../EducationOverview/EducationOverview';
import ExperienceOverview from '../ExperienceOverview/ExperienceOverview';
import SkillsOverview from '../SkillsOverview/SkillsOverview';
import ProjectsOverview from '../ProjectsOverview/ProjectsOverview';
import BranchSVG from './BranchSVG/BranchSVG';
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
      <article className="trait">
        <div className="trait__heading-wrapper">
          <h2 className="trait__heading">{trait}</h2>
          {<BranchSVG position={(trait==='Experience'||trait ==='Education')?'left':'right'}/>}
        </div>
        <div className="trait__wrapper">
          {conditionalRender(trait)}
        </div>
      </article>
    )
}

export default TraitBranch
