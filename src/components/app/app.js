import React, { Component } from 'react';

import Header from '../header';

import './app.css';

export class App extends Component {
  state = {
    items: [
      { id: 1, label: 'First to do item', done: true },
      { id: 2, label: 'Second to do item', done: true },
      { id: 3, label: 'Third to do item', done: false },
    ],
  };
  render() {
    return (
      <div className="app">
        <Header done={1} active={2} />
      </div>
    );
  }
}
