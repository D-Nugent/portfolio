import React from 'react';
import MapSVG from './MapSVG/MapSVG';
import history from '../../data/history.json';
import doubleArrow from '../../assets/icons/double_arrow.svg'
import ReturnToHome from '../ReturnToHome/ReturnToHome';
import './ProfileIndepth.scss';

function ProfileIndepth({updateActiveBranch}) {

  const onClickScrollHandler = () => {
    const historyBlock = document.querySelector('.profile-indepth__history')
    const scrollWidth = historyBlock.scrollWidth;
    const incrScroll = scrollWidth/6;
    historyBlock.scrollLeft += incrScroll;
  }

  return (
    <section className="profile-indepth">
      <section className="profile-indepth__professional">
        <h2 className="profile-indepth__title">
          My Professional Journey
        </h2>
        <p className="profile-indepth__professional-details">
          I have always loved problem-solving, creating things and building connections 
          with others. Prior to transitioning to a career as a developer, I worked
          in leadership roles within the luxury hotel sector. I have had the privilege 
          of travelling the world and working for renowned brands in some incredible 
          destinations. 
        </p>
        <p className="profile-indepth__professional-details">
          These experiences have allowed me to hone my leadership, collaboration and 
          communications skills and continue to lend themselves to my aptitude as 
          a developer.
        </p>
        <p className="profile-indepth__professional-details">
          In my prior roles, I would always seek tech solutions to operational 
          problems. I strongly believe that by analyzing the root of daily problems, 
          that you can find creative adaptive solutions through tech. My success 
          applying this mindeset to the hotel sector sparked an interest in software 
          development that led me to my new career as a developer.
        </p>
      </section>
      <h2 className="profile-indepth__title">A Journey Around The World</h2>
      <MapSVG/>
      <div className="profile-indepth__history">
        {history.map((location,index) => {
          return (
            <React.Fragment key={location.id}>
              <article className="profile-indepth__history-item" key={location.id}>
                <h4 className="profile-indepth__history-dates">{location.dates}</h4>
                <p className="profile-indepth__history-details">{location.details}</p>
              </article>
              {index!==history.length-1 &&
                <img src={doubleArrow} alt="arrow" className="profile-indepth__arrow"
                onClick={()=>{onClickScrollHandler()}}/>
              }
            </React.Fragment>
          )
        })}
      </div>
      <section className="profile-indepth__passions">
        <h2 className="profile-indepth__title">
          My Passions and Interests
        </h2>
        <p className="profile-indepth__passions-details">
          On the homepage of my portfolio you'll notice a selection of icons, these are 
          intended to represent my character, both professionally and personally. When
          I'm not coding, I do my utmost to take advantage of all that life has to offer 
          and don't shy away from trying something out of my comfort zone.
        </p>
        <p className="profile-indepth__passions-details">
          In particular I'm an avid gamer and reader. I appreciate craft beer and wine, 
          like to keep fit and enjoy playing tennis and golf. In summer you'll find me 
          bathing in the sun and in winter you'll find me bathing in Netflix. If you want 
          to know more, just ask!
        </p>
      </section>
      <ReturnToHome updateActiveBranch={updateActiveBranch} position="top"/>
    </section>
  )
}

export default ProfileIndepth
