import React, { Component } from 'react';

import Header from '../header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import Filters from '../filters';

import './app.css';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todoData: [
        { label: 'Drink Coffee', important: false, id: 1 },
        { label: 'Make awesome App', important: true, id: 2 },
        { label: 'Have a lunch', important: false, id: 3 },
      ],
    };

    this.onDeleteBtnClick = this.onDeleteBtnClick.bind(this);
  }

  onDeleteBtnClick(id) {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((item) => item.id === id);
      const newTodoData = [
        ...todoData.slice(0, index),
        ...todoData.slice(index + 1),
      ];

      return {
        todoData: newTodoData,
      };
    });
  }

  render() {
    const { todoData } = this.state;
    return (
      <div className="todo-app">
        <Header toDo={1} done={3} />

        <div className="top-panel d-flex">
          <SearchPanel />
          <Filters />
        </div>

        <TodoList
          todos={todoData}
          onDeleted={this.onDeleteBtnClick} />
      </div>
    );
  }
}
