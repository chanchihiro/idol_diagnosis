import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';


class Q3of1 extends React.Component {
	render() {
		return(
			<div className="inner_q">
				<h2>Question.3</h2>
				<p className="question_e">Which do you like</p>
				<p className="question_j">ケーキといえば？</p>
				<div className="buttons">
					<button className="question_button"><Link className="question_button_text" to="/nogizaka">ショートケーキ</Link></button>
					<button className="question_button"><Link className="question_button_text" to="/">チョコケーキ</Link></button>
				</div>
			</div>
		)
	}
}

export default Q3of1