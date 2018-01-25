import React, { Component } from 'react';

const EMPTY = 0
const MISS = 'Miss'
const HIT = 'Hit'
const AIRCRAFTCARRIER = 5
const BATTLESHIP = 4
const SUBMARINE = 3
const DESTROYER = 2
const PATROLBOAT = 1



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

			// this.patrolboat()
			this.aircraftCarrier()
			this.submarine()
			this.submarine()
			this.Battleship()
			this.Destroyer()

	}

	// Randomly places the 5 ships
  	patrolboat() {
		const { board } = this.state
    	var row = Math.floor(Math.random() * 9)
    	var col = Math.floor(Math.random() * 9)

		for (let i = 0; i < 1; i++){
			if (board[row][col] !== 5 && board[row][col] !== 2 && board[row][col] !== 3 && board[row][col] !== 4) {
			board[row][col + i] = PATROLBOAT
		}
	}

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
		if (!board[row][col] && !board[row][col+1] && !board[row][col+2] && !board[row][col+3] && !board[row][col+4]){


		for (let i = 0; i < AIRCRAFTCARRIER; i++){
			if (board[row][col] !== 1 && board[row][col] !== 2 && board[row][col] !== 3 && board[row][col] !== 4) {
				board[row][col + i] = AIRCRAFTCARRIER
			}
		}
	}
		this.setState({
			board:board
		})
	}

	submarine() {
		const { board } = this.state
		var row = Math.floor(Math.random() * 8)
    	var col = Math.floor(Math.random() * 5)

		if (!board[row][col] && !board[row][col+1] && !board[row][col+2]){
		for (let i = 0; i < SUBMARINE; i++){
			if (board[row][col] !== 1 && board[row][col] !== 2 && board[row][col] !== 5 && board[row][col] !== 4) {
				board[row][col + i] = SUBMARINE
			}
		}
	}
		this.setState({
			board:board
		})
	}
	Destroyer() {
		const { board } = this.state
		var row = Math.floor(Math.random() * 8)
    	var col = Math.floor(Math.random() * 5)

		if (!board[row][col] && !board[row][col+1]){
		for (let i = 0; i < DESTROYER; i++){
			if (board[row][col] !== 1 && board[row][col] !== 5 && board[row][col] !== 3 && board[row][col] !== 4) {
				board[row][col + i] = DESTROYER
			}
		}
	}
		this.setState({
			board:board
		})
	}
	Battleship() {
		const { board } = this.state
		var row = Math.floor(Math.random() * 8)
    	var col = Math.floor(Math.random() * 5)

		if (!board[row][col] && !board[row][col+1] && !board[row][col+2] && !board[row][col+3]){
		for (let i = 0; i < BATTLESHIP; i++){
			if (board[row][col] !== 1 && board[row][col] !== 2 && board[row][col] !== 3 && board[row][col] !== 5) {
				board[row][col + i] = BATTLESHIP
			}
		}
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
				status = "squareEmpty"
			}else if(this.state.board[rowNumber][i] === 1){
				status = "squarePatrolBoat"
			}else if(this.state.board[rowNumber][i] === MISS){
				status = "squareMiss"
			}else if(this.state.board[rowNumber][i] === HIT){
				status = "squareHit"
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

        // if no torpedoes remaining - exit the function early
		if (torpedoesRemaining <= 0){
			alert("Game Over")
			return
		}

		if(board[row][col] === PATROLBOAT){
			board[row][col] = HIT
		}else if (board[row][col] === EMPTY){
			board[row][col] = MISS
		}else if (HIT === HIT && MISS === MISS) {
			alert('Already Clicked Square')
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
