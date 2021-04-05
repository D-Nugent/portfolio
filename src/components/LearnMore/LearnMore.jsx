import React from 'react';
import './LearnMore.scss';
import DoubleArrow from '../../assets/icons/double_arrow.svg';

function LearnMore({position, updateActiveBranch, trait}) {
    return (
      <div className={`learn-more ${position==='left'?'learn-more--left':'learn-more--right'}`}>
        <p className={`learn-more__link ${trait==='Profile'?'learn-more__link--profile':''}`}
          onClick={()=>{updateActiveBranch(trait)}}
        >
        {position==='left'?
        <>
        <img src={DoubleArrow} alt="Arrow Icon" className="learn-more__double-arrow--reverse"/>
          LEARN MORE
        </>
          :
        <>
          LEARN MORE
          <img src={DoubleArrow} alt="Arrow Icon" className="learn-more__double-arrow"/>
        </>
        }
        </p>
      </div>
    )
}

export default LearnMore
