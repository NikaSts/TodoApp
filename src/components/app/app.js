import React, { Component } from 'react';

import Filters from '../filters';
import Header from '../header';
import ItemAddForm from '../item-add-form';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';

import './app.css';


const generateId = () => Date.now().toString();

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
    this.onSubmitBtnClick = this.onSubmitBtnClick.bind(this);
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

  onSubmitBtnClick(text) {
    const newTask = {
      label: text,
      important: false,
      id: generateId(),
    };
    this.setState(({ todoData }) => {
      const newTodoData = [
        ...todoData,
        newTask,
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
        <ItemAddForm
          onSubmit={this.onSubmitBtnClick} />
      </div>
    );
  }
}
