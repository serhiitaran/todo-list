import React from 'react';

import './todo-item.css';

export const TodoItem = ({ label, done }) => {
  let classNames = 'todo-item';
  if (done) {
    classNames += ' todo-item--done';
  }
  return (
    <li className={classNames}>
      <p className="todo-item__label">{label}</p>
      <button className="todo-item__delete" type="button">
        Delete
      </button>
    </li>
  );
};
