import React from 'react';
import ProfileImage from '../../assets/images/profileSide.svg';
import PhoneIcon from '../../assets/icons/phone-gold.png';
import EmailIcon from '../../assets/icons/email-gold.png';
import LocationIcon from '../../assets/icons/location-gold.png';
import AcumenIcon from '../../assets/icons/acumen-icon.png';
import GithubIcon from '../../assets/icons/github-icon.png';
import LinkedInIcon from '../../assets/icons/linkedin-icon.png';
import LearnMore from '../LearnMore/LearnMore';
import './ProfileTrunk.scss';

function ProfileTrunk({trait, updateActiveBranch, activeBranch}) {
    return (
      <section className={`profile ${activeBranch==='Profile' && 'profile--indepth'}`}>
        {
          activeBranch!=='Profile'&&
          <>
          <img src={ProfileImage} alt="Profile" className="profile__image"/>
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
          <LearnMore updateActiveBranch={updateActiveBranch} trait={trait}/>
          <address className="profile__contact">
            <div className="profile__contact-method">
              <a href="tel:+15878346559" className="profile__contact-phone">
              <img src={PhoneIcon} alt="Phone Icon" className="profile__contact-icon"/>
                +1 587-834-6559
              </a>
            </div>
            <div className="profile__contact-method">
              <a href="mailto:info@davidnugent.me" className="profile__contact-email">
              <img src={EmailIcon} alt="Email Icon" className="profile__contact-icon"/>
                info@davidnugent.me
              </a>
            </div>
            <div className="profile__contact-method">
              <a href="https://www.google.com/maps/place/Kelowna,+BC/@49.8998289,-119.5952053,11z/" className="profile__contact-location">
                <img src={LocationIcon} alt="Location Icon" className="profile__contact-icon"/>
                Kelowna, BC
              </a>
            </div>
          </address>
          <section className="profile__social">
            <div className="profile__social-icons">
              <a href="https://www.github.com/d-nugent" className="profile__social-link">
                <h6 className="profile__social-heading">GitHub</h6>
                <img src={GithubIcon} alt="Github Icon" className="profile__social-icon"/>
              </a>
              <a href="https://www.linkedin.com/in/d-nugent" className="profile__social-link">
                <h6 className="profile__social-heading">LinkedIn</h6>
                <img src={LinkedInIcon} alt="LinkedIn Icon" className="profile__social-icon"/>
              </a>
              <a href="https://acumen-resume.com/user/QDnFBjYt6jZ67LCtqWftF2BxMC13/abfc0d01-ecb0-4481-b18d-fece67c776d8"
               className="profile__social-link">
                <img src={AcumenIcon} alt="Acumen Icon" className="profile__social-icon"/>
                <h6 className="profile__social-heading">Acumen</h6>
              </a>
            </div>
          </section>
        </>
}
      </section>
    )
}

export default ProfileTrunk
