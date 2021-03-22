import React from 'react';
import './LearnMore.scss';
import DoubleArrow from '../../assets/icons/double_arrow.svg';

function LearnMore({position, alt}) {

  const tempAlert = () => {
    alert('Apologies, this section of the site is still in development. It should be added within the week.')
  }

    return (
      <div className={`learn-more ${position==='left'?'learn-more--left':'learn-more--right'}`}>
        <p className={`learn-more__link ${alt==='profile'?'learn-more__link--profile':''}`}
          onClick={()=>{tempAlert()}}
        >
          LEARN MORE
        <img src={DoubleArrow} alt="Arrow Icon" className="learn-more__double-arrow"/>
        </p>
      </div>
    )
}

export default LearnMore
