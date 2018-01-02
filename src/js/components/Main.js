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
import Linq from './linq';
import Negi from './negi';
import Shachihoko from './shachihoko';
import Fruity from './fruity';
import Takoyaki from './takoyaki';
import Kamonegi from './kamonegi';

import CSSTransitionGroup from 'react-transition-group';


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
      <Route path="/linq" component={Linq} />
      <Route path="/negikko" component={Negi} />
      <Route path="/nogizaka" component={Nogizaka} />
      <Route path="/shachihoko" component={Shachihoko} />
      <Route path="/fruity" component={Fruity} />
      <Route path="/takoyaki" component={Takoyaki} />
      <Route path="/kamonegi" component={Kamonegi} />
    </Switch>
  </main>
);

export default Main;