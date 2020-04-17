import React from 'react';
import Box from './Box.js';
import './../App.css';
  
  const initialBoardState = {
    loading: false,
      fresh: true,
      numbers : '000000000000000000000000000000000000000000000000000000000000000000000000000000000'
  };

class Board extends React.Component {

    constructor(props) {
      super(props);
      this.state = initialBoardState;
    }
  
    
    renderBox(j) {
      //const sq = JSON.parse(JSON.stringify(this.state.squares));
      const numbers = this.state.numbers;
      var boxValues = new Array(9);
      var count = 0;
      for (var i = 3*Math.floor(j/3); i < 3*Math.floor(j/3)+3; i++)
      {
        for (var k = 3*(j%3); k < 3*(j%3)+3; k++) 
        {
          boxValues[count++] = parseInt(numbers[9*i+k]);
          //boxValues[count++] = sq[i][k];
        }
      }
      return (
        <Box value={boxValues} onChange={(evt, sqIndex) => this.handleChange(evt, j, sqIndex)}/>
      );
    }
  
    validateInput(inp){
      if(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(inp.toString())){
        return true;
      }
      else return false;
    }
  
    handleChange(evt, box, square){
      //window.alert(evt.target.value + ' box: ' + box + ' square: ' + square)
      // var newSquares = [
      //     [0,0,0,0,0,0,0,0,0],
      //     [0,0,0,0,0,0,0,0,0],
      //     [0,0,0,0,0,0,0,0,0],
      //     [0,0,0,0,0,0,0,0,0],
      //     [0,0,0,0,0,0,0,0,0],
      //     [0,0,0,0,0,0,0,0,0],
      //     [0,0,0,0,0,0,0,0,0],
      //     [0,0,0,0,0,0,0,0,0],
      //     [0,0,0,0,0,0,0,0,0]
      //   ];
  
      var validatedInput = evt.target.value;
      if (!this.validateInput(evt.target.value))
      {
        validatedInput = 0;
      }
  
      const newNumbers = [...this.state.numbers]
      for (var i = 0; i < 9; i++)
      {
        for (var k = 0; k < 9; k++) 
        {
          if(i===3*Math.floor(box/3)+Math.floor(square/3) 
            && k===3*(box%3)+(square%3) )
          {
  
            newNumbers[9*i+k]=validatedInput;
            //newSquares[i][k]=evt.target.value;    
          }
          else{
            
            //newSquares[i][k]=this.state.squares[i][k];
          }
        }
      }
      this.setState({numbers: newNumbers.join('')});  
    }
  
    solve() {
      this.setState({loading: true}); 
      const numbers = this.state.numbers;
      this.fetchSolution(numbers);
    }
  
    clear()
    {
      //this.setState({loading: true}); 
      //const numbers = this.state.numbers;
      //this.fetchSolution(numbers);
  
      //alert('CLEAR button clicked');
      this.setState(initialBoardState);
    }
  
    async fetchSolution(numbers){
      
      this.setState({loading: true, fresh: false});
      const url = 'https://jojosudoku.appspot.com/api/solve?sudoku='+numbers; //'http://localhost:8080/api/solve?sudoku=21';//'https://api.randomuser.me/';
      const response = await fetch(url);
      const data = await response.json();
      this.setState({numbers: data.sudoku, loading: false})
    }
    
  
    
    render() {
  
      return (
        <div>
          {this.state.fresh
                  ? 
                  (<p>Enter your Sudoku here:</p>) 
                  : 
                  (<p>Your Sudoku is solved by:</p>)
                }
          <div className="board">
            <div className="board-row">
              {this.renderBox(0)}
              {this.renderBox(1)}
              {this.renderBox(2)}
            </div>
            <div className="board-row">
              {this.renderBox(3)}
              {this.renderBox(4)}
              {this.renderBox(5)}
            </div>
            <div className="board-row">
              {this.renderBox(6)}
              {this.renderBox(7)}
              {this.renderBox(8)}
            </div>
          </div>
          <div><p></p></div>
          <div className="solve-game">    
              <div className="request-state">
                {this.state.loading 
                  ? 
                  (<div className="loading-label">LOADING...</div>) 
                  : 
                  (<button className="button" onClick={() => this.solve()}>SOLVE</button>)
                }
              </div>
              <div className="reset">
                <button className="button" onClick={() => this.clear()}>CLEAR</button>
              </div>
          </div>
          
        </div>
      );
    }
  }

  export default Board;