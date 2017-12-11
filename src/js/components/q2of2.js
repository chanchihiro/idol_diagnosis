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
				<button className="question_button"><Link className="question_button_text" to="/">インドア</Link></button>
				<button className="question_button"><Link className="question_button_text" to="/">アウトドア</Link></button>
			</div>
		)
	}
}

export default Q2of2