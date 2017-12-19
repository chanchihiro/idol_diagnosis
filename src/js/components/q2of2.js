import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';


class Q2of2 extends React.Component {
	render() {
		return(
			<div className="inner_q">
				<h2>Question.2</h2>
				<p className="question_e">Which do you like</p>
				<p className="question_j">どっちが好き？</p>
				<div className="buttons">
					<button className="question_button"><Link className="question_button_text" to="/Q3of3">インドア</Link></button>
					<button className="question_button"><Link className="question_button_text" to="/Q3of4">アウトドア</Link></button>
				</div>
			</div>
		)
	}
}

export default Q2of2