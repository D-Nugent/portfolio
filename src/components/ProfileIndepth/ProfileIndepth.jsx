import React from 'react';
// import worldMap from '../../assets/images/worldmap.svg';
import MapSVG from './MapSVG/MapSVG';
import doubleArrow from '../../assets/icons/double_arrow.svg'
import './ProfileIndepth.scss';

function ProfileIndepth() {
    return (
      <section className="profile-indepth">
        <h2 className="profile-indepth__title">Where I've lived:</h2>
        <MapSVG/>
        <div className="profile-indepth__history">
          <article className="profile-indepth__history-item">
            <h4 className="profile-indepth__history-title">1991 - 1996</h4>
            <p className="profile-indepth__history-details">Yorkshire, UK</p>
          </article>
          <img src={doubleArrow} alt="arrow" className="profile-indepth__arrow"/>
          <article className="profile-indepth__history-item">
            <h4 className="profile-indepth__history-title">1996 - 1999</h4>
            <p className="profile-indepth__history-details">Illinois, USA</p>
          </article>
          <img src={doubleArrow} alt="arrow" className="profile-indepth__arrow"/>
          <article className="profile-indepth__history-item">
            <h4 className="profile-indepth__history-title">1999 - 2007</h4>
            <p className="profile-indepth__history-details">North-East, UK</p>
          </article>
          <img src={doubleArrow} alt="arrow" className="profile-indepth__arrow"/>
          <article className="profile-indepth__history-item">
            <h4 className="profile-indepth__history-title">2007 - 2010</h4>
            <p className="profile-indepth__history-details">Auckland, NZ</p>
          </article>
          <img src={doubleArrow} alt="arrow" className="profile-indepth__arrow"/>
          <article className="profile-indepth__history-item">
            <h4 className="profile-indepth__history-title">2010 - 2012</h4>
            <p className="profile-indepth__history-details">Surrey, UK</p>
          </article>
          <img src={doubleArrow} alt="arrow" className="profile-indepth__arrow"/>
          <article className="profile-indepth__history-item">
            <h4 className="profile-indepth__history-title">2012 - 2013</h4>
            <p className="profile-indepth__history-details">Chicago, USA</p>
          </article>
          <img src={doubleArrow} alt="arrow" className="profile-indepth__arrow"/>
          <article className="profile-indepth__history-item">
            <h4 className="profile-indepth__history-title">2013 - 2014</h4>
            <p className="profile-indepth__history-details">Surrey, UK</p>
          </article>
          <img src={doubleArrow} alt="arrow" className="profile-indepth__arrow"/>
          <article className="profile-indepth__history-item">
            <h4 className="profile-indepth__history-title">2014 - 2018</h4>
            <p className="profile-indepth__history-details">St Andrews, UK</p>
          </article>
          <img src={doubleArrow} alt="arrow" className="profile-indepth__arrow"/>
          <article className="profile-indepth__history-item">
            <h4 className="profile-indepth__history-title">2018 - 2020</h4>
            <p className="profile-indepth__history-details">Lake Louise, CA</p>
          </article>
          <img src={doubleArrow} alt="arrow" className="profile-indepth__arrow"/>
          <article className="profile-indepth__history-item">
            <h4 className="profile-indepth__history-title">2020 - Current</h4>
            <p className="profile-indepth__history-details">Kelowna, CA</p>
          </article>
        </div>
      </section>
    )
}

export default ProfileIndepth
