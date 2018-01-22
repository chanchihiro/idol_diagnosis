import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';


class Nogizaka extends React.Component {
	render() {
		return(
			<div className="goal">
				<h2>あなたに合ったアイドルは...</h2>
				<p className="question_e">乃木坂46</p>
				<p className="question_j">Nogizaka 46</p>
				<img src="./img/nogizaka.jpg" className="idol_img" />
				<h2>乃木坂を見るなら...</h2>
				<p className="question_e">東京 -Tokyo-</p>
				<p className="question_j"></p>
				<img src="./img/tokyo.png" className="idol_img" />
				<button className="question_button"><Link className="question_button_text" to="/"><img src="./img/btn_top.png" /></Link></button>
			</div>
		)
	}
}

export default Nogizaka