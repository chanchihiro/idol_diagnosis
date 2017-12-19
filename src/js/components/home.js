import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';

class Home extends React.Component {
	render() {
		return(
			<div className="inner_top">
				<h2><img src="./img/logo.png" id="logo" /></h2>
				<button><Link to="/Q1"><img src="./img/button.png" /></Link></button>
			</div>
		)
	}
}

export default Home