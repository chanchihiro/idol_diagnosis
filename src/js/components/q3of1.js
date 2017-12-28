import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';


class Q3of1 extends React.Component {
	render() {
		return(
			<div className="inner_q">
				<h2>Question.3</h2>
				<p className="question_e">Speaking of a cake?</p>
				<p className="question_j">ケーキといえば？</p>
				<div className="buttons">
					<button className="question_button"><Link className="question_button_text" to="/nogizaka"><img src="./img/btn6.png" /></Link></button>
					<button className="question_button"><Link className="question_button_text" to="/"><img src="./img/btn7.png" /></Link></button>
				</div>
			</div>
		)
	}
}

export default Q3of1