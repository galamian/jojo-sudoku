import React from 'react';
import Board from './Board.js';


export default class extends React.Component {
    render() {
      return (
        <div className="sudoku">
          
          <div className="sudoku-board">
            <Board/>
          </div>
          <div className="sudoku-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
          
        </div>
      );
    }
   
}  

