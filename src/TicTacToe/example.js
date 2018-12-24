import React, { Component } from 'react';

class Example extends Component {
  constructor(props){
    super(props)
    this.state = {
      spaces: [1, 0, 0, 0, 0, 0, 0, 0, 0],
      treasure: ''
    }
  }

  userClick(e){
    console.log(e.target)
    this.setState()
  }

  render() {
    console.log(this.state);
    //Mapping through array to create divs for each item in this.state.spaces array
    let squares = this.state.spaces.map((val, index) => {
      let tileStatus
      if (val === 1) {
        tileStatus = 'treasure'
      } else {
        tileStatus = 'tree'
      }
      return  (
        <div className={`Tiles ${tileStatus}`} key={index} id={index} onClick={this.userClick.bind(this)}>{val}</div>
      )
    })
    return (
      <div className="Grid">
        {squares}
      </div>
    );
  }

  //Using the componentDidMount to setup values in state
  componentDidMount(){
    let treasurePosition = Math.floor(Math.random() * 9)
    this.setState({treasure: treasurePosition})
  }



}

export default Example;
