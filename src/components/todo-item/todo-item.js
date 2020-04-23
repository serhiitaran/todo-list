import React from 'react';

import './todo-item.css';

export const TodoItem = ({ label, done, onDelete }) => {
  let classNames = 'todo-item';
  if (done) {
    classNames += ' todo-item--done';
  }
  return (
    <li className={classNames}>
      <p className="todo-item__label">{label}</p>
      <button
        className="todo-item__delete"
        type="button"
        onClick={onDelete}
      >
        Delete
      </button>
    </li>
  );
};
