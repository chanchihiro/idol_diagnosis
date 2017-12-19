import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';


class Q1 extends React.Component {
	render() {
		return(
			<div className="goal">
				<h2>あなたに合ったアイドルは...</h2>
				<p className="question_e">乃木坂46</p>
				<img src="./img/nogizaka.jpg" className="idol_img" />
				<button className="question_button"><Link className="question_button_text" to="/">TOPへ戻る</Link></button>
			</div>
		)
	}
}

export default Q1