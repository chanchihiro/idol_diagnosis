import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';


class Q1 extends React.Component {
	render() {
		return(
			<div className="inner_q">
				<h2>Question.1</h2>
				<p className="question_e">Which is it if you go?</p>
				<p className="question_j">行くならどっち？</p>
				<button className="question_button"><Link to="/Q2of1">山</Link></button>
				<button className="question_button"><Link to="/Q2of2">川</Link></button>
			</div>
		)
	}
}

export default Q1