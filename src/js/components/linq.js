import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';


class Linq extends React.Component {
	render() {
		return(
			<div className="goal">
				<h2>あなたに合ったアイドルは...</h2>
				<p className="question_e">LinQ</p>
				<img src="./img/idol_linq.jpg" className="idol_img" />
				<h2>LinQを見るなら...</h2>
				<p className="question_e">福岡 -Fukuoka-</p>
				<p className="question_j"></p>
				<img src="./img/fukuoka.jpg" className="idol_img" />
				<button className="question_button"><Link className="question_button_text" to="/"><img src="./img/btn_top.png" /></Link></button>
			</div>
		)
	}
}

export default Linq