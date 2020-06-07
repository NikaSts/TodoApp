import React, { Component } from 'react';

import Filters from '../filters';
import Header from '../header';
import ItemAddForm from '../item-add-form';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';

import './app.css';

const tasks = ['Drink Coffee', 'Make awesome App', 'Have a lunch'];

const generateId = () => (Date.now() + Math.random()).toString();
const createTodoItem = (label) => ({
  label,
  important: false,
  done: false,
  id: generateId(),
});

const getIndex = (items, id) => items.findIndex((item) => item.id === id);
const updateTask = (id, items, property) => {
  const index = getIndex(items, id);
  const oldTask = items[index];
  const newTask = { ...oldTask, [property]: !oldTask[property] };

  return [
    ...items.slice(0, index),
    newTask,
    ...items.slice(index + 1),
  ];
};


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todoTasks: tasks.map((task) => createTodoItem(task)),
    };

    this.onDeleteBtnClick = this.onDeleteBtnClick.bind(this);
    this.onSubmitBtnClick = this.onSubmitBtnClick.bind(this);
    this.onToggleDone = this.onToggleDone.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
  }

  onDeleteBtnClick(id) {
    this.setState(({ todoTasks }) => {
      const index = getIndex(todoTasks, id);
      const newTodoTasks = [
        ...todoTasks.slice(0, index),
        ...todoTasks.slice(index + 1),
      ];

      return {
        todoTasks: newTodoTasks,
      };
    });
  }

  onSubmitBtnClick(label) {
    const newTask = createTodoItem(label);

    this.setState(({ todoTasks }) => {
      const newTodoTasks = [
        ...todoTasks,
        newTask,
      ];
      return {
        todoTasks: newTodoTasks,
      };
    });
  }

  onToggleImportant(id) {
    this.setState(({ todoTasks }) => ({
      todoTasks: updateTask(id, todoTasks, 'important'),
    }));
  }

  onToggleDone(id) {
    this.setState(({ todoTasks }) => ({
      todoTasks: updateTask(id, todoTasks, 'done'),
    }));
  }

  render() {
    const { todoTasks } = this.state;
    const doneCount = todoTasks.filter((task) => task.done).length;
    const todoCount = todoTasks.length - doneCount;

    return (
      <div className="todo-app">
        <Header toDo={todoCount} done={doneCount} />

        <div className="top-panel d-flex">
          <SearchPanel />
          <Filters />
        </div>

        <TodoList
          todos={todoTasks}
          onDeleted={this.onDeleteBtnClick}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone} />
        <ItemAddForm
          onSubmit={this.onSubmitBtnClick} />
      </div>
    );
  }
}
