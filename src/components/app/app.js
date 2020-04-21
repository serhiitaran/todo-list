import React, { Component } from 'react';

import Header from '../header';

import './app.css';

export class App extends Component {
  render() {
    return (
      <div className="app">
        <Header done={1} active={2} />
      </div>
    );
  }
}
