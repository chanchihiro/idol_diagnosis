import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Q1 from './q1';
import Home from './home';


const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/q1" component={Q1} />
    </Switch>
  </main>
);

export default Main;