import React from 'react';
import ProfileImage from '../../assets/images/profileSide.svg';
import TreeRoots from '../../assets/images/treerootsLarge.png';
import './ProfileTrunk.scss';

function ProfileTrunk() {
    return (
      <section className="profile">
          <img src={ProfileImage} alt="Profile Photo" className="profile__image"/>
          <div className="profile__heading">
            <h2 className="profile__heading-first-name">DAVID</h2>
            <h2 className="profile__heading-last-name">NUGENT</h2>
            <h4 className="profile__heading-position">Full Stack Developer</h4>
          </div>
          <p className="profile__overview">
            A hotelier turned full-stack developer. I have had the privilege of
             managing teams of up to 90 persons in some of the worlds most incredible
             destinations. As an effective, goal-orientated leader, I have a proven track-record
             of applying tech solutions to operational problems. My love for this is what gave
             me the push to pivot into web development.
          </p>
          <address className="profile__contact">
            <div className="profile__contact-method">
              <a href="" className="profile__contact-phone">+1 587-834-6559</a>
            </div>
            <div className="profile__contact-method">
              <a href="" className="profile__contact-email">info@davidnugent.me</a>
            </div>
            <div className="profile__contact-method">
              <a href="" className="profile__contact-location">Kelowna, BC</a>
            </div>
          </address>
          <section className="profile__social">
            <p className="profile__social-test">Test</p>
          </section>
      </section>
    )
}

export default ProfileTrunk
