import React, { Component } from 'react';

import Filters from '../filters';
import Header from '../header';
import ItemAddForm from '../item-add-form';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';

import './app.css';


const generateId = () => (Date.now() + Math.random()).toString();
const createTodoItem = (label) => ({
  label,
  important: false,
  done: false,
  id: generateId(),
});

const getIndex = (tasks, id) => tasks.findIndex((item) => item.id === id);

const updateTask = (id, tasks, property) => {
  const index = getIndex(tasks, id);
  const oldTask = tasks[index];
  const newTask = { ...oldTask, [property]: !oldTask[property] };

  return [
    ...tasks.slice(0, index),
    newTask,
    ...tasks.slice(index + 1),
  ];
};

const filterTasks = (tasksToFilter, filter) => {
  switch (filter) {
    case 'active':
      return tasksToFilter.filter((task) => !task.done);
    case 'done':
      return tasksToFilter.filter((task) => task.done);
    default:
      return tasksToFilter;
  }
};

const searchTasks = (items, text) => {
  if (text.length === 0) {
    return items;
  }
  return items.filter((item) => item.label.toLowerCase().includes(text.toLowerCase()));
}


export default class App extends Component {
  constructor() {
    super();
    this.tasks = ['Drink Coffee', 'Make awesome App', 'Have a lunch'];
    this.state = {
      todoTasks: this.tasks.map((task) => createTodoItem(task)),
      activeFilter: 'all',
      searchValue: '',
    };

    this.onDeleteBtnClick = this.onDeleteBtnClick.bind(this);
    this.onSubmitBtnClick = this.onSubmitBtnClick.bind(this);
    this.onToggleDone = this.onToggleDone.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onFilterChange = this.onFilterChange.bind(this);
    this.onTaskSearch = this.onTaskSearch.bind(this)
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

  onFilterChange(activeFilter) {
    this.setState({ activeFilter });
  }

  onTaskSearch(searchValue) {
    this.setState({ searchValue });
  }

  render() {
    const { todoTasks, activeFilter, searchValue } = this.state;
    const doneCount = todoTasks.filter((task) => task.done).length;
    const todoCount = todoTasks.length - doneCount;

    const visibleTasks = searchTasks(filterTasks(todoTasks, activeFilter), searchValue);

    return (
      <div className="todo-app">
        <Header toDo={todoCount} done={doneCount} />

        <div className="top-panel d-flex">
          <SearchPanel
            onTaskSearch={this.onTaskSearch} />
          <Filters
            activeFilter={activeFilter}
            onFilterChange={this.onFilterChange} />
        </div>

        <TodoList
          todos={visibleTasks}
          onDeleted={this.onDeleteBtnClick}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone} />
        <ItemAddForm
          onSubmit={this.onSubmitBtnClick} />
      </div>
    );
  }
}
