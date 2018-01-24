import React, { Component } from 'react';
/*Create a global variable called board and have it hold an empty array, Have that empty array hold 10 empty arrays */

/*Create a global constant SHIP variable with a value of 1. */
// randomNum = Math.floor(Math.random() * 10)

class BattleshipBoard extends Component {
	constructor(props) {
		super(props)
		this.state = {
			board: [],
			shipCount: 0,
			torpedoesRemaining: 25,
		}

		this.setupBoard()
	}

	componentWillMount(){
		for (var i =0; i < 5; i++) {
	  		this.placeShip()
		}
	}

	setupBoard(){
    	let board = []

    	for(let row = 0; row < 10; row++){
      		board.push([])

	  	for(let col = 0; col < 10; col++) {
		 	board[row][col] = false
	  	}
    	}
    	this.state.board = board
  	}

  	placeShip(){
    	var row = Math.floor(Math.random() * 9)
    	var col = Math.floor(Math.random() * 9)

     	this.state.board[row][col]= ' '
      // console.log(row,col);
    //TODO check placement of ship is not overlapping
  	}

	clickHandler(row, col, e) {
		const { board, torpedoesRemaining } = this.state
		let clicked = e.target
		console.log({board});

		if (this.state.torpedoesRemaining === 0){
			alert("Game Over")


		}
		else if(board[row][col]){
			board[row][col] = "Hit"
			clicked.style.backgroundColor = "green"
		}
		else if (!board[row][col]){
			board[row][col] = "Miss"
			clicked.style.backgroundColor = "red"

		}
		this.setState({
			board: board,
			torpedoesRemaining: torpedoesRemaining-1
		})
  	}

  	renderRow(rowNumber) {
		var row = []
		for (let i = 0; i < 10; i++) {
			let theXY = i + "_" + rowNumber
      		row.push(
        	<td className="square" onClick={this.clickHandler.bind(this, i, rowNumber)}
            id={theXY}
            key={theXY}
        	>
          	{this.state.board[i][rowNumber]}
        	</td>
      		)
    	}
    	return row
  	}

  	renderRows(){
    	var rows = []
    	for (let i = 0; i < 10; i++) {
    		rows.push(<tr id={i} key={i}>{this.renderRow(i)}</tr>)


    	}
    return rows
  	}

  	render() {
    	return(
			<div>
      			<table >
        			<tbody>
          				{ this.renderRows() }
        			</tbody>
      			</table>
	  			<h2>Remaining Torpedoes: { this.state.torpedoesRemaining }</h2>
			</div>
    	)
  	}
}

export default BattleshipBoard;
