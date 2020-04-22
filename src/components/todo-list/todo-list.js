import React from 'react';

import TodoItem from '../todo-item';

export const TodoList = ({ items }) => {
  const todoItems = items.map(item => {
    const { id, ...itemProps } = item;
    return <TodoItem key={id} {...itemProps} />;
  });

  return <ul class="todo-list">{todoItems}</ul>;
};
