import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';

var loading = document.getElementById("loading");

window.onload = function () {
	loading.classList.add("none");
	ReactDOM.render(
	  <BrowserRouter>
	    <App />
	  </BrowserRouter>,
	  document.getElementById("questions")
	);

};