import React from 'react';

export const Header = props => {
  const { done, active } = props;
  return (
    <header className="header">
      <h1 className="header__title">To do List</h1>
      <p className="header__info">
        <span>Done: {done}</span> <span>Active: {active}</span>
      </p>
    </header>
  );
};
