import React from 'react';
import './header.css';

const Header = (counter) => {
  const { toDo, done } = counter;

  return (
    <div className="header d-flex">
      <h1>My Todo List</h1>
      <h2>{toDo} more to do, {done} done</h2>
    </div>
  );
};

export default Header;
