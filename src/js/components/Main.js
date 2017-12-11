import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Q1 from './q1';
import Q2of1 from './q2of1';
import Q2of2 from './q2of2';
import Home from './home';


const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/q1" component={Q1} />
      <Route path="/q2of1" component={Q2of1} />
      <Route path="/q2of2" component={Q2of2} />
    </Switch>
  </main>
);

export default Main;