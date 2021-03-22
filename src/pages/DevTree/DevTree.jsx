import React, {useLayoutEffect} from 'react';
import InterestCrown from '../../components/InterestCrown/InterestCrown';
import ProfileTrunk from '../../components/ProfileTrunk/ProfileTrunk';
import WelcomeRoot from '../../components/WelcomeRoot/WelcomeRoot';
import TraitBranch from '../../components/TraitBranch/TraitBranch';
// import IndepthBranch from '../../components/IndepthBranch/IndepthBranch';
import './DevTree.scss';

function DevTree() {

  useLayoutEffect(() => {
    setTimeout(() => {
      document.body.scrollTop = document.body.scrollHeight;
      document.documentElement.scrollTop = document.documentElement.scrollHeight;  
    }, 200);
  }, [])

  // const scrollLeft = () => {
  //   document.body.scrollLeft = 0;
  //   document.documentElement.scrollLeft = 0;
  // }

  // const scrollRight = () => {
  //   document.body.scrollLeft = document.body.scrollWidth;
  //   document.documentElement.scrollLeft = document.body.scrollWidth;
  // }

  return (
    <>
      {/* <section className="more-detail more-detail-left">
        <IndepthBranch trait="Experience"/>
        <IndepthBranch trait="Education"/>
      </section> */}
      <div className="wrapper">
        <InterestCrown/>
        <main>
          <section className="appraisal">
            <div className="appraisal__left">
              <TraitBranch trait="Experience"/>
              <TraitBranch trait="Education"/>
            </div>
            <ProfileTrunk/>
            <div className="appraisal__right">
              <TraitBranch trait="Skills"/>
              <TraitBranch trait="Projects"/>
            </div>
          </section>
        </main>
        <WelcomeRoot/>
      </div>
      {/* <section className="more-detail more-detail-right">
        <IndepthBranch trait="Skills"/>
        <IndepthBranch trait="Projects"/>
      </section> */}
      {/* <div className="width-control"></div> */}
    </>
    )
}

export default DevTree
