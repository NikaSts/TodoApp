import React from 'react';

import Header from '../header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import Filters from '../filters';

import './app.css';


const App = () => {
  const todoData = [
    { label: 'Drink Coffee', important: false, id: 1 },
    { label: 'Make awesome App', important: true, id: 2 },
    { label: 'Have a lunch', important: false, id: 3 },
  ];
  return (
    <div className="todo-app">
      <Header toDo={1} done={3} />

      <div className="top-panel d-flex">
        <SearchPanel />
        <Filters />
      </div>

      <TodoList todos={todoData} />
    </div>
  );
};


export default App;
