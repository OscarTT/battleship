if (col+shipSize) > boardSize) {
	col -= shipSize
}

for (let i = 0; i < shipSize; i++){
	board[row][col + i] = shipSize
}

putShip(shipSize) {
	const { board } = this.state
	const { boardSize } = this.props
	var row = Math.floor(Math.random() * boardSize)
	var col = Math.floor(Math.random() * boardSize)

	if (col+shipSize) > boardSize) {
		col -= shipSize
	}

	for (let i = 0; i < shipSize; i++){
		board[row][col + i] = shipSize
	}

	this.setState({
		board:board
	})
}
