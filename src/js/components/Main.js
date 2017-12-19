import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Q1 from './q1';
import Q2of1 from './q2of1';
import Q2of2 from './q2of2';
import Q3of1 from './q3of1';
import Q3of2 from './q3of2';
import Q3of3 from './q3of3';
import Q3of4 from './q3of4';
import Home from './home';
import Nogizaka from './nogizaka';


const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/q1" component={Q1} />
      <Route path="/q2of1" component={Q2of1} />
      <Route path="/q2of2" component={Q2of2} />
      <Route path="/q3of1" component={Q3of1} />
      <Route path="/q3of2" component={Q3of2} />
      <Route path="/q3of3" component={Q3of3} />
      <Route path="/q3of4" component={Q3of4} />
      <Route path="/nogizaka" component={Nogizaka} />
    </Switch>
  </main>
);

export default Main;