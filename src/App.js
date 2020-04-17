import React from 'react';
import './App.css';
import Sudoku from "./Sudoku";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jojo's Sudoku Solver</h1>
      </header>
      <body>
        <Sudoku/>
      </body>
    </div>
  );
}

export default App;
