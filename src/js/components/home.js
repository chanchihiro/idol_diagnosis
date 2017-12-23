import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';


class Home extends React.Component {
	render() {
		return(
			<div className="inner_top">
				<h2><img src="./img/main.png" id="logo" /></h2>
				<div id="start"><Link to="/Q1"><img src="./img/btn1.png" /></Link></div>
			</div>
		)
	}
}

export default Home