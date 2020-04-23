import React from 'react';

import TodoItem from '../todo-item';

import './todo-list.css';

export const TodoList = ({ items, onItemDelete }) => {
  const todoItems = items.map(item => {
    const { id, ...itemProps } = item;
    return (
      <TodoItem
        key={id}
        {...itemProps}
        onDelete={() => onItemDelete(id)}
      />
    );
  });

  return <ul className="todo-list">{todoItems}</ul>;
};
