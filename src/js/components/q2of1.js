import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';


class Q2of1 extends React.Component {
	render() {
		return(
			<div className="inner_q">
				<h2>Question.2</h2>
				<p className="question_e">Which is it if you go?</p>
				<p className="question_j">行くならどっち？</p>
				<button><Link to="/">山</Link></button>
				<button><Link to="/">川</Link></button>
			</div>
		)
	}
}

export default Q2of1