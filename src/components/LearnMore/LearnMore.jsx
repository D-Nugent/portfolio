import React from 'react';
import './LearnMore.scss';
import DoubleArrow from '../../assets/icons/double_arrow.svg';

function LearnMore({position}) {
    return (
      <div className={`learn-more ${position==='left'?'learn-more--left':'learn-more--right'}`}>
        <a href="#" className="learn-more__link">
          LEARN MORE
        <img src={DoubleArrow} alt="Arrow Icon" className="learn-more__double-arrow"/>
        </a>
      </div>
    )
}

export default LearnMore
