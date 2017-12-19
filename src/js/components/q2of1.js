import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';


class Q2of1 extends React.Component {
	render() {
		return(
			<div className="inner_q">
				<h2>Question.2</h2>
				<p className="question_e">Which is it if you spend in holiday?</p>
				<p className="question_j">休日過ごすならどっち？</p>
				<div className="buttons">	
					<button className="question_button"><Link className="question_button_text" to="/Q3of1">友達</Link></button>
					<button className="question_button"><Link className="question_button_text" to="/Q3of2">一人</Link></button>
				</div>
			</div>
		)
	}
}

export default Q2of1