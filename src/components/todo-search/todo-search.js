import React, { Component } from 'react';

import './todo-search.css';

export class TodoSearch extends Component {
  render() {
    return (
      <div className="todo-search">
        <input className="todo-search__input" placeholder="Search" />
      </div>
    );
  }
}
