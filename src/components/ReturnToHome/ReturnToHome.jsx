import React from 'react';
import './ReturnToHome.scss';

function ReturnToHome({updateActiveBranch, position}) {
  console.log(position);
  return (
    <button className={`return-home return-home--${position}`} onClick={()=>{updateActiveBranch(null)}}>
      Return to HOME
    </button>
  )
}

export default ReturnToHome
