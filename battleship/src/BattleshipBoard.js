import React, { Component } from 'react';
/*Create a global variable called board and have it hold an empty array, Have that empty array hold 10 empty arrays */

/*Create a global constant SHIP variable with a value of 1. */
// randomNum = Math.floor(Math.random() * 10)

class BattleshipBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: [],
    }
    this.setupBoard()
  }

  componentWillMount(){
    for (var i =0; i < 5; i++) {
      this.placeShip()
    }
  }

  setupBoard(){
    for(let i = 0; i <= 10; i++){
      this.state.board.push([])
    }
  }

  placeShip(){
    var x = Math.floor(Math.random() * 9)
    var y = Math.floor(Math.random() * 9)

     this.state.board[x][y]= 'SHIP'

  }

  clickHandler(x, y){

  }

  renderRow(rowNumber) {
    var row = []
    for (let i = 0; i < 10; i++) {
      let theXY = i + "_" + rowNumber
      row.push(
        <td onClick={this.clickHandler.bind(this, i, rowNumber)}
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
      <table >
        <tbody>
          { this.renderRows() }
        </tbody>
      </table>
    )
  }
}

export default BattleshipBoard;
