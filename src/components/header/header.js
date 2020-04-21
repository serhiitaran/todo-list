import React from 'react';

export const Header = props => {
  const { done, active } = props;
  return (
    <header class="header">
      <h1 class="header__title">To do List</h1>
      <p class="header__info">
        <span>Done: {done}</span> <span>Active: {active}</span>
      </p>
    </header>
  );
};
