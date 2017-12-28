import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';


class Q3of4 extends React.Component {
	render() {
		return(
			<div className="inner_q">
				<h2>Question.3</h2>
				<p className="question_e">Which do you like</p>
				<p className="question_j">コーヒに砂糖を入れる？</p>
				<div className="buttons">
					<button className="question_button"><Link className="question_button_text" to="/"><img src="./img/btn14.png" /></Link></button>
					<button className="question_button"><Link className="question_button_text" to="/"><img src="./img/btn15.png" /></Link></button>
				</div>
			</div>
		)
	}
}

export default Q3of4