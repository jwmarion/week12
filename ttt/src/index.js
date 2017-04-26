import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class Board extends React.Component{
  constructor(){
    super();
    this.state = {
      board: [null,null,null,null,null,null,null,null,null],
      turn: 1,
      msg: null
    }
  }
  render() {
    return (
      <div className="grid">
      {this.state.board.map((val,i)=>
       <div className="box" onClick={()=>this.change(i)} key={i}>{this.state.board[i] === -1 ? 'X' : this.state.board[i] === 1 ? 'O' : null}</div>)
       }
      <h1 className="message">{this.state.msg}</h1>
    </div>);

  }

  change(val){
    var board = this.state.board;
    if (this.state.board[val] === null){
      board[val] = this.state.turn;
      this.setState({
        board: board,
        turn: this.state.turn *-1
      });
    }
    //checkWin
    board = this.state.board;

    if(Math.abs(board[0] + board[1] + board[2]) === 3 ||
      Math.abs(board[3] + board[4] + board[5]) === 3 ||
      Math.abs(board[6] + board[7] + board[8]) === 3 ||
      Math.abs(board[0] + board[4] + board[6]) === 3 ||
      Math.abs(board[1] + board[5] + board[7]) === 3 ||
      Math.abs(board[2] + board[6] + board[8]) === 3 ||
      Math.abs(board[0] + board[4] + board[8]) === 3 ||
      Math.abs(board[2] + board[4] + board[6]) === 3){
        if (this.state.turn == 1 ){
          var winMsg = 'O Wins!';
        }
        else{
          var winMsg = 'X Wins!';
        }
        this.setState({
          msg: winMsg
        });
      }





  }

}
ReactDOM.render(<Board/>,  document.getElementById('root')
);
