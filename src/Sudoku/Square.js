import React from 'react';

export default class Square extends React.Component {
    render() {
      return (
        <input className="square" 
              value={this.props.value===0 ? '' : this.props.value} 
              onChange={evt => this.props.onChange(evt)} size="1">
        </input>
      );
    }
  }