import './App.scss';
import React from 'react';
import {Route, Switch, useLocation, Redirect} from 'react-router-dom';
import Home from '../../pages/Home/Home'
import Landing from '../../pages/Landing/Landing'
import Profile from '../../pages/Profile/Profile'
import Process from '../../pages/Process/Process'
import Projects from '../../pages/Projects/Projects'
import Testimonials from '../../pages/Testimonials/Testimonials'
import Blog from '../../pages/Blog/Blog'
import Contact from '../../pages/Contact/Contact'

function App () {

    return (
      <div className="app">
      <Home/>
        <Switch>
          <Route exact path="/">
            <Redirect to="/landing"/>
          </Route>
          <Route exact path="/landing" render={(routeProps) =>
            <Landing {...routeProps}/>}/>
          <Route exact path="/profile" render={(routeProps) =>
            <Profile {...routeProps}/>}/>
          <Route exact path="/process" render={(routeProps) =>
            <Process {...routeProps}/>}/>
          <Route exact path="/projects" render={(routeProps) =>
            <Projects {...routeProps}/>}/>
          <Route exact path="/testimonials" render={(routeProps) =>
            <Testimonials {...routeProps}/>}/>
          <Route exact path="/blog" render={(routeProps) =>
            <Blog {...routeProps}/>}/>
          <Route exact path="/contact" render={(routeProps) =>
            <Contact {...routeProps}/>}/>
        </Switch>
      </div>
    );
  }

export default App;
