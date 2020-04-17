import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sudoku from "./Sudoku";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sudoku Solver</h1>
      </header>
      <body>
        <Sudoku/>
      </body>
    </div>
  );
}

export default App;
