import './App.scss';
import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import DevTree from '../../pages/DevTree/DevTree';
import LoadingSeed from '../LoadingSeed/LoadingSeed';

function App () {
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      document.querySelector('.wrapper').scrollIntoView({behavior:'auto',block:'end',inline:'end'});
    }, 7000);
    setTimeout(() => {
      setLoading(false);
    }, 9000);
  }, [])

    return (
      <div className="app">
        <Switch>
          <Route exact path="/" render={(routeProps) =>
            <DevTree {...routeProps} loading={loading}/>}/>
        </Switch>
        {loading===true && <LoadingSeed/>}
      </div>
    );
  }

export default App;
