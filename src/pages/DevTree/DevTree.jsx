import React, {useLayoutEffect, useEffect, useState} from 'react';
import InterestCrown from '../../components/InterestCrown/InterestCrown';
import ProfileTrunk from '../../components/ProfileTrunk/ProfileTrunk';
import WelcomeRoot from '../../components/WelcomeRoot/WelcomeRoot';
import TraitBranch from '../../components/TraitBranch/TraitBranch';
import IndepthBranch from '../../components/IndepthBranch/IndepthBranch';
import ProfileIndepth from '../../components/ProfileIndepth/ProfileIndepth';
import './DevTree.scss';

const scrollPath = {
  'Profile': () => document.querySelector('.interests').scrollIntoView({behavior:"smooth",block:'start',inline:'center'}),
  'Experience':() => document.querySelector('.branch--left').scrollIntoView({behavior:"smooth",block:'end',inline:'end'}),
  'Education':() => document.querySelectorAll('.branch--left')[1].scrollIntoView({behavior:"smooth",block:'end',inline:'end'}),
  'Skills': () => document.querySelector('.branch--right').scrollIntoView({behavior:"smooth",block:'end',inline:'start'}),
  'Projects': () => document.querySelectorAll('.branch--right')[1].scrollIntoView({behavior:"smooth",block:'end',inline:'start'}),
  'Home': () => document.querySelector('.wrapper').scrollIntoView({behavior:"smooth",block:'start',inline:'start'})
}

function DevTree({loading}) {
const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    window.onresize = () => {
      scrollPath[activeSection]()
    }
  }, [activeSection])

  useLayoutEffect(() => {
    setTimeout(() => {
      document.querySelector('.wrapper').scrollIntoView({behavior:"smooth",block:'end',inline:'end'})
    }, 300);
  }, [])

  const updateActiveBranch = (trait) => {
    setActiveSection(trait);
    scrollPath[trait]()
  }

  return (
    <>
      <div className="wrapper">
        <InterestCrown/>
        <main>
          <section className="appraisal">
            <div className="appraisal__left">
              <TraitBranch trait="Experience" updateActiveBranch={updateActiveBranch}
                activeBranch={activeSection}
              />
              {activeSection==='Experience' &&
                <IndepthBranch trait="Experience" updateActiveBranch={updateActiveBranch}
                  activeBranch={activeSection}
                />
              }
              <TraitBranch trait="Education" updateActiveBranch={updateActiveBranch}
                activeBranch={activeSection}
                />
              {activeSection==='Education' &&
                <IndepthBranch trait="Education" updateActiveBranch={updateActiveBranch}
                  activeBranch={activeSection}
                />
              }
            </div>
            <ProfileTrunk trait="Profile" updateActiveBranch={updateActiveBranch}
              activeBranch={activeSection}
            />
            {activeSection==='Profile'&&
              <ProfileIndepth updateActiveBranch={updateActiveBranch}/>
            }
            <div className="appraisal__right">
              <TraitBranch trait="Skills" updateActiveBranch={updateActiveBranch}
                activeBranch={activeSection}
              />
              {activeSection==='Skills' &&
                <IndepthBranch trait="Skills" updateActiveBranch={updateActiveBranch}
                  activeBranch={activeSection}
                />
              }
              <TraitBranch trait="Projects" updateActiveBranch={updateActiveBranch}
                activeBranch={activeSection}
              />
              {activeSection==='Projects' &&
                <IndepthBranch trait="Projects" updateActiveBranch={updateActiveBranch}
                  activeBranch={activeSection}
                />
              }
            </div>
          </section>
        </main>
        {activeSection==='Home' &&
          <WelcomeRoot loading={loading}/>
        }
      </div>
      <div className="width-control"></div>
    </>
    )
}

export default DevTree
