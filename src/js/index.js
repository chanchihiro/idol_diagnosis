import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';

import Home from './components/home';
import Q1 from './components/q1';

class App extends React.Component {
	render() {
		return(
	      <div>
	        <ul>
	          <li><Link to="/">Home</Link></li>
	          <li><Link to="q1">Q1</Link></li>
	        </ul>
	        <div>
	          {this.props.children}
	        </div>
	      </div>
		)
	}
}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="q1" component={Q1} />
    </Route>
  </Router>,
  document.getElementById("questions")
);