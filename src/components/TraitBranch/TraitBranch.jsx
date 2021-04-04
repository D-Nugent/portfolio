import React from 'react';
import EducationOverview from '../EducationOverview/EducationOverview';
import ExperienceOverview from '../ExperienceOverview/ExperienceOverview';
import SkillsOverview from '../SkillsOverview/SkillsOverview';
import ProjectsOverview from '../ProjectsOverview/ProjectsOverview';
import BranchSVG from './BranchSVG/BranchSVG';
import LearnMore from '../LearnMore/LearnMore';
import './TraitBranch.scss';

function TraitBranch({trait, updateActiveBranch, activeBranch}) {

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

  const positionControl = (trait) => {
    return `${(trait==='Experience'||trait ==='Education')?'left':'right'}`;
  }
  
    return (
      <article className={`trait ${activeBranch!==trait&&activeBranch!==null?'trait--inactive':''}`}>
        <div className="trait__heading-wrapper">
          {<BranchSVG position={positionControl(trait)} section={trait} activeBranch={activeBranch}/>}
        </div>
        <div className="trait__wrapper">
          {conditionalRender(trait)}
          <LearnMore position={positionControl(trait)} updateActiveBranch={updateActiveBranch}
            trait={trait}
          />
        </div>
      </article>
    )
}

export default TraitBranch
