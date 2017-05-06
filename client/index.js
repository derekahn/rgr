import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Hello extends Component {
  render() {
    return <h3>Hello world</h3>;
  }
}

ReactDOM.render(<Hello />, document.getElementById('root'));

