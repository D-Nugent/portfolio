import './App.scss';
import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import DevTree from '../../pages/DevTree/DevTree';
import LoadingSeed from '../LoadingSeed/LoadingSeed';
import UpdateNoticeModal from '../UpdateNoticeModal/UpdateNoticeModal';

function App () {
  const [loading,setLoading] = useState(true);
  const [showUpdateNotice, setShowUpdateNotice] = useState(false);

  useEffect(() => {
    // Check if user has seen the update notice before
    const hasSeenNotice = localStorage.getItem('hasSeenUpdateNotice');
    if (!hasSeenNotice) {
      setShowUpdateNotice(true);
    }

    setTimeout(() => {
      document.querySelector('.wrapper').scrollIntoView({behavior:'auto',block:'end',inline:'end'});
    }, 7000);
    setTimeout(() => {
      setLoading(false);
    }, 9000);
  }, [])

  const handleCloseUpdateNotice = () => {
    localStorage.setItem('hasSeenUpdateNotice', 'true');
    setShowUpdateNotice(false);
  };

    return (
      <div className="app">
        <Switch>
          <Route exact path="/" render={(routeProps) =>
            <DevTree {...routeProps} loading={loading}/>}/>
        </Switch>
        {loading===true && <LoadingSeed/>}
        <UpdateNoticeModal 
          isOpen={showUpdateNotice} 
          onClose={handleCloseUpdateNotice} 
        />
      </div>
    );
  }

export default App;
