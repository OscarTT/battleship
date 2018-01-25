import React, { Component } from 'react';
import './App.css';
import BattleshipBoard from './BattleshipBoard.js';
import Header from './header'

class App extends Component {

	render() {
		return (
			<div>
				<div>
					<Header />
					<BattleshipBoard />
				</div>
			</div>
    	)
  	}
}

export default App;
