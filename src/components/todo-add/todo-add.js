import React, { Component } from 'react';

export class TodoAdd extends Component {
  render() {
    return (
      <div class="todo-add">
        <form class="todo-add__form">
          <input class="todo-add__input" placeholder="Add new task" />
        </form>
      </div>
    );
  }
}
