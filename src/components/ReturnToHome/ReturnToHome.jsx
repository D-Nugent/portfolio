import React from 'react';
import './ReturnToHome.scss';

function ReturnToHome({updateActiveBranch, position}) {
  return (
    <button className={`return-home return-home--${position}`} onClick={()=>{updateActiveBranch('Home')}}>
      Return to HOME
    </button>
  )
}

export default ReturnToHome
