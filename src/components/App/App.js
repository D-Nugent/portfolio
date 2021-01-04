import './App.scss';
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../../pages/Home/Home'
import Profile from '../../pages/Profile/Profile'
import Process from '../../pages/Process/Process'
import Projects from '../../pages/Projects/Projects'
import Testimonials from '../../pages/Testimonials/Testimonials'
import Blog from '../../pages/Blog/Blog'
import Contact from '../../pages/Contact/Contact'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" render={(routeProps) =>
            <Home {...routeProps}/>}/>
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
}

export default App;
