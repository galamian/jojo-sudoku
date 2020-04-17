import React from 'react';
import Board from './Board.js';


export default class extends React.Component {
    render() {
      return (
        <div className="sudoku">
          
          <div className="sudoku-board">
            <Board/>
            <div className="get-code"><a target="_blank" rel="noopener noreferrer" href="https://github.com/galamian/jojo-sudoku">Get the code</a></div>
            
          </div>
          
          
        </div>
      );
    }
   
}  

