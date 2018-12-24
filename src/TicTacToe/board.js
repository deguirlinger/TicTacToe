import React, { Component } from 'react';

export default class Board extends Component {
  constructor() {
    super()
    this.state = {
      currentPlayer: "",
      spaces: [],
      player1: [],
      player2: [],
      discard: [],
      winner: "",
      message: "",
      player1Icon: "X",
      player2Icon: "O",
      currentPlayerIcon: "",
    }
  }

spacesGen(spacesQuant){
  let { spaces } = this.state
  for(let i = 0; i < spacesQuant; i++){
    spaces.push("")
  }
  this.setState({spaces: spaces})
  console.log(spaces);
}

playerMark(e) {
  let {currentPlayer, spaces, player1, player2, discard, winner, player1Icon, player2Icon, currentPlayerIcon} = this.state
  // let squareNum = spaces.findIndex(e.target.id)
  let squareNum = parseInt(e.target.id)
  if (winner !== "") {
    return
  }
  else if (currentPlayer === `Player 1` && !discard.includes(squareNum) && spaces[squareNum] !== player2Icon) {
    player1.push(squareNum)
    currentPlayerIcon = player1Icon
    spaces[squareNum] = currentPlayerIcon
    currentPlayer = `Player 2`
  } else if (currentPlayer === `Player 2` && !discard.includes(squareNum) && spaces[squareNum] !== player2Icon) {
    player2.push(squareNum)
    currentPlayerIcon = player2Icon
    spaces[squareNum] = currentPlayerIcon
    currentPlayer = `Player 1`
  } discard.push(squareNum)
  this.setState({
    currentPlayer: currentPlayer,
    spaces: spaces,
    player1: player1,
    player2: player2,
    discard: discard,
    currentPlayerIcon: currentPlayerIcon
  })
  console.log(`Player 1: ${player1}, Player 2: ${player2}, Discard: ${discard}, Winner: ${winner}`);
}

mainFunction(e) {
  this.playerMark(e)
  this.gameOver()
}

gameOver() {
  let {spaces, player1, player2, discard, winner} = this.state
  let winningNums = [[0, 4, 8],[0, 1, 2],[0, 3, 6], [1, 4, 7], [2, 4, 6], [2, 5, 8], [3, 4, 5], [6, 7, 8]]
  console.log(player1);
  function checkXorO(index) {
    return index === 'X' || index === 'O'
  }
  for (let i = 0; i < winningNums.length; i++){
    let winningCombo = winningNums[i]
    if (winningCombo.every(elem => player1.indexOf(elem) > -1)) {
      winner = `PLAYER 1 WINS!`
      console.log(`Player 1 wins!`);
    } else if (winningCombo.every(elem => player2.indexOf(elem) > -1)) {
      winner = `PLAYER 2 WINS!`
      console.log(`Player 2 wins`);
    }
  }
  console.log(spaces);
  if ((winner !== `PLAYER 1`) && (winner !== `PLAYER 2`) && (spaces.every(checkXorO))) {
    winner = `TIE GAME. NOBODY WINS.`
    console.log(`Tie game. Nobody wins.`);
  }
  this.setState({
    winner: winner})
}

componentDidMount(){
  this.spacesGen(9)
  this.state.currentPlayer = `Player 1`
}
  render() {
    let square = this.state.spaces.map((value, index) => {
      return(
        <div className= "Square" key={index} id={index} onClick= {this.mainFunction.bind(this)}>{value}</div>
      )
})
    return(
      <div>
        <header className= "Header">
        <h1>Tic Tac Toe</h1>
        </header>
        <div className= "Winner">{this.state.winner}</div>
        <div className= "Grid">{square}</div>
      </div>
    )
  }
}
// <div className = "Grid">{square}</div>
