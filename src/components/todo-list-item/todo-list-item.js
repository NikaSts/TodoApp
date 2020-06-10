import React from 'react';
// import PropsType from 'prop-types';
import './todo-list-item.css';


const TodoListItem = (props) => {
  const {
    label, onDeleted, onToggleImportant, onToggleDone, important, done,
  } = props;

  const isDone = done ? 'done' : '';
  const isImportant = important ? 'important' : '';
  const classNames = `d-flex todo-list-item ${isDone} ${isImportant}`;

  return (
    <div className={classNames}>
      <p
        className="todo-list-item-label"
        onClick={onToggleDone}
        onKeyPress={onToggleDone}
        role="button"
        tabIndex="0">
        {label}
      </p>

      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-right"
        onClick={onDeleted}
        onKeyPress={onDeleted}>

        <span className="sr-only">Set important</span>
        <i className="fa fa-trash-o" />
      </button>

      <button
        type="button"
        className="btn btn-outline-success btn-sm float-right"
        onClick={onToggleImportant}
        onKeyPress={onToggleImportant}>

        <span className="sr-only">Delete</span>
        <i className="fa fa-exclamation" />
      </button>

    </div>
  );
};

export default TodoListItem;
