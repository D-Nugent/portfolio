import './App.scss';
import React from 'react';
import {Route, Switch} from 'react-router-dom';
// import Home from '../../pages/Home/Home';
// import Landing from '../../pages/Landing/Landing';
// import Profile from '../../pages/Profile/Profile';
// import Process from '../../pages/Process/Process';
// import Projects from '../../pages/Projects/Projects';
// import Testimonials from '../../pages/Testimonials/Testimonials';
// import Blog from '../../pages/Blog/Blog';
// import Contact from '../../pages/Contact/Contact';
import DevTree from '../../pages/DevTree/DevTree';

function App () {

    return (
      <div className="app">
        <Switch>
          <Route exact path="/" render={(routeProps) =>
            <DevTree {...routeProps}/>}/>
        </Switch>
      </div>
    );
  }

export default App;
