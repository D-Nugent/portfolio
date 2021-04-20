import './App.scss';
import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import DevTree from '../../pages/DevTree/DevTree';
import LoadingSeed from '../LoadingSeed/LoadingSeed';

function App () {
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 9000);
  }, [])

    return (
      <div className="app">
        <Switch>
          <Route exact path="/" render={(routeProps) =>
            <DevTree {...routeProps}/>}/>
        </Switch>
        {loading===true && <LoadingSeed/>}
      </div>
    );
  }

export default App;
