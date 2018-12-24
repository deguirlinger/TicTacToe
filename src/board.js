import React, { Component } from 'react';

export default class Board extends Component {
  constructor() {
    super()
    this.state = {
      player: "",
      spaces: [],
      player1: [],
      player2: [],
      discard: []
    }
  }
  // Create placeholder array with placeholder values.

  // Create grid.
    // Create empty square with a map
    // Create a grid with the empty squares using flex in CSS
spacesGen(spacesQuant){
  let { spaces } = this.state
  for(let i = 0; i < spacesQuant; i++){
    spaces.push(0)
  }
  this.setState({spaces: spaces})
  console.log(spaces);
}



//Create onClick method that alters between users.
  // Create two players

playerTurn() {
  let {player} = this.state
  player = player === `Player 1` ? `Player 2` : 'Player 1'
  this.setState({player: player})
  console.log(player);
}

playerMark(e) {
  let {player, player1, player2, discard} = this.state
  if (player === `Player 1` && discard.includes(e.target.id) === false) {
    player1.push(e.target.id)
  } else if (player === `Player 2` && discard.includes(e.target.id) === false) {
    player2.push(e.target.id)
  } discard.push(e.target.id)
  this.setState({
    player1: player1,
    player2: player2,
    discard: discard})
  console.log(`Player 1: ${player1}, Player 2: ${player2}, Discard: ${discard}`);
}
mainFunction(e) {
  this.playerTurn()
  this.playerMark(e)
}
//Create alert that tells users who has won, and/or that the game has ended

componentDidMount(){
  this.spacesGen(9)
  this.playerTurn()
}
  render() {
    let square = this.state.spaces.map((value, index) => {
      return(
        <div className= "Square" key={index} id={index} onClick= {this.mainFunction.bind(this)}>hi</div>
      )

    })
    return(
      <div className="Grid">{square}</div>
    )
  }
}
