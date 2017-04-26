import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class Board extends React.Component{
  constructor(){
    super();
    this.state = {
      board: [null,null,null,null,null,null,null,null,null],
      turn: 1,
      msg: "React Tac Toe!",
      endGame: false

    }
  }
  render() {
    let retry = null;
    if(this.state.endGame){
      retry = (<div className="retry" onClick={()=>this.newGame(this.state.turn)}>New Game?</div>);
    }
    return (
    <div className="game">
      <div className="top">
        <h1 className="message">{this.state.msg}</h1>
      </div>
      <div className="grid">
        {this.state.board.map((val,i)=>
           <div className="box" onClick={()=>this.change(i)} key={i}>{this.state.board[i] === -1 ? 'X' : this.state.board[i] === 1 ? 'O' : null}</div>)}
           {retry}
       </div>
    </div>)
  }

  change(val){
    var board = this.state.board;
    if (this.state.endGame !== true){
      if (this.state.board[val] === null){
        board[val] = this.state.turn;
        this.setState({
          board: board,
          turn: this.state.turn *-1
        });
      }

    //checkWin
    board = this.state.board;

    if(
      Math.abs(board[0] + board[1] + board[2]) === 3 ||
      Math.abs(board[3] + board[4] + board[5]) === 3 ||
      Math.abs(board[6] + board[7] + board[8]) === 3 ||
      Math.abs(board[0] + board[3] + board[6]) === 3 ||
      Math.abs(board[1] + board[4] + board[7]) === 3 ||
      Math.abs(board[2] + board[5] + board[8]) === 3 ||
      Math.abs(board[0] + board[4] + board[8]) === 3 ||
      Math.abs(board[2] + board[4] + board[6]) === 3 ){

        if (this.state.turn === 1 ){
          var winMsg = 'O Wins!';
        }
        else{
          var winMsg = 'X Wins!';
        }
        this.setState({
          msg: winMsg,
          endGame: true
        });
      }
      //check draw
      var end = 0;
      board.forEach((square)=>{if(square === null){end +=1;}});

      if (end === 0){
        this.setState({msg: "Draw!", endGame: true});
      }
    }
  }
  newGame(turn){
    this.setState({
      board: [null,null,null,null,null,null,null,null,null],
      turn: turn * -1,
      msg: "React Tac Toe!",
      endGame: false
    });
  }

}
ReactDOM.render(<Board/>,  document.getElementById('root')
);
