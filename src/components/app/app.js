import React, { Component } from 'react';

import Header from '../header';
import TodoList from '../todo-list';

import './app.css';

export class App extends Component {
  state = {
    items: [
      { id: 1, label: 'First to do item', done: true },
      { id: 2, label: 'Second to do item', done: true },
      { id: 3, label: 'Third to do item', done: false },
    ],
  };

  handleItemDelete = id => {
    this.setState(prevState => {
      const itemIndex = prevState.items.findIndex(
        item => item.id === id,
      );
      const items = [
        ...prevState.items.slice(0, itemIndex),
        ...prevState.items.slice(itemIndex + 1),
      ];
      return { items };
    });
  };

  handleToggleDone = id => {
    this.setState(prevState => {
      const itemIndex = prevState.items.findIndex(
        item => item.id === id,
      );
      const oldItem = prevState.items[itemIndex];
      const newValue = !oldItem.done;
      const changedItem = { ...oldItem, done: newValue };
      const items = [
        ...prevState.items.slice(0, itemIndex),
        changedItem,
        ...prevState.items.slice(itemIndex + 1),
      ];
      return { items };
    });
  };

  render() {
    const { items } = this.state;
    return (
      <div className="app">
        <Header done={1} active={2} />
        <main>
          <TodoList
            items={items}
            onItemDelete={this.handleItemDelete}
            onToggleDone={this.handleToggleDone}
          />
        </main>
      </div>
    );
  }
}
