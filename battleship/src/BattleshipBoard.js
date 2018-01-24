import React, { Component } from 'react';
/*Create a global variable called board and have it hold an empty array, Have that empty array hold 10 empty arrays */

/*Create a global constant SHIP variable with a value of 1. */
// randomNum = Math.floor(Math.random() * 10)

const EMPTY = 0
const SHIP = 1
const MISS = 'Miss'
const HIT = 'Hit'
const Battleship = 3



class BattleshipBoard extends Component {
	constructor(props) {
		super(props)
		this.state = {
			board: this.setupBoard(),
			torpedoesRemaining: 20,
			torpedoesUsed: 0,
		}
	}

	setupBoard() {
    	let board = []

		// Makes a row of 10 cells
    	for(let row = 0; row < 10; row++){
      		board.push([])

			// Adds 9 rows of 10 cells
		  	for(let col = 0; col < 10; col++) {
			 	board[row][col] = EMPTY
		  	}
		}

		console.log(board);

    	return board
  	}

	// Sets limit to five ships
	componentWillMount(){
		for (var i =0; i < 5; i++) {
			this.placeShip()
		}
	}

	// Randomly places the 5 ships
  	placeShip() {
		const { board } = this.state
    	var row = Math.floor(Math.random() * 9)
    	var col = Math.floor(Math.random() * 9)

		for (let i = 0; i < []; i++){
			board[row][col + i] = SHIP
		}

		board[row][col] = SHIP

     	this.setState({
			board: board
		})
	  // console.log(row,col);
    //TODO check placement of ship is not overlapping
  	}

	aircraftCarrier() {
		const { board } = this.state
		var row = Math.floor(Math.random() * 8)
    	var col = Math.floor(Math.random() * 5)

		if (!board[row][col] && !board[row][col+1] && !board[row][col+2] && !board[row][col+3] &&
		!board[row][col+4]) {
			board[row][col] = Battleship
			board[row][col] = Battleship
			board[row][col] = Battleship
			board[row][col] = Battleship
			board[row][col] = Battleship
		}
		this.setState({
			board:board
		})
	}

	// create rows and columns for the view
	renderRows(){
		var rows = []
		for (let i = 0; i < 10; i++) {
			rows.push(<tr id={i} key={i}>{this.renderRow(i)}</tr>)
		}
		return rows
	}

	renderRow(rowNumber) {
		var status = "square"

		var row = []
		for (let i = 0; i < 10; i++) {
			if(this.state.board[rowNumber][i] === 0){
				status = "square empty"
			}
			if(this.state.board[rowNumber][i] === 1){
				status = "square empty"
			}
			let theXY = rowNumber + "_" + i
      		row.push(
        	<td className={status} onClick={this.clickHandler.bind(this, i, rowNumber)}
            id={theXY}
            key={theXY}
        	>
          	{this.state.board[rowNumber][i]}
        	</td>
      		)
    	}
    	return row
  	}

	clickHandler(col, row, e) {
		const { board, torpedoesRemaining, torpedoesUsed } = this.state
		let clicked = e.target

        // if no torpedoes remaining - exit the function early
		if (torpedoesRemaining <= 0){
			alert("Game Over")
			return
		}

		if(board[row][col] === SHIP){
			board[row][col] = HIT

			clicked.style.backgroundColor = "green"
			//TODO refactor style to css
		}

		else if (board[row][col] === EMPTY){
			board[row][col] = MISS
			clicked.style.backgroundColor = "red"
		} else if (HIT === HIT && MISS === MISS) {
			alert('WRONG')
			return
		}

		this.setState({
			board: board,
			torpedoesRemaining: torpedoesRemaining-1,
			torpedoesUsed: torpedoesUsed+1
		})

		console.log(board);
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
				<h2>Torpedoes Used: { this.state.torpedoesUsed } </h2>
			</div>
    	)
  	}
}

export default BattleshipBoard;
