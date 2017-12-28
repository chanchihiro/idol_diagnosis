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
				<div className="buttons">	
					<button className="question_button"><Link className="question_button_text" to="/Q2of1"><img src="./img/btn2.png" /></Link></button>
					<button className="question_button"><Link className="question_button_text" to="/Q2of2"><img src="./img/btn3.png" /></Link></button>
				</div>
			</div>
		)
	}
}

export default Q1