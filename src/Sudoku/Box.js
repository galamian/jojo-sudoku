import React from 'react';
import Square from './Square.js'

export default class Box extends React.Component {
    renderSquare(i) {
      return <Square value={this.props.value[i]} onChange={evt => this.props.onChange(evt, i)}/>;
    }
    
    render() {
  
      return (
        <div className="box">
          <div className="box-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="box-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="box-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }