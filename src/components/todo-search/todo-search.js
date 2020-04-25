import React, { Component } from 'react';

export class TodoSearch extends Component {
  render() {
    return (
      <div className="todo-search">
        <input className="todo-search__input" placeholder="Search" />
      </div>
    );
  }
}
