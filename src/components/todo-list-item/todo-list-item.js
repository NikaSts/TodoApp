import React from 'react';
// import PropsType from 'prop-types';
import './todo-list-item.css';


const TodoListItem = ({ label, important = false }) => {
  const style = {
    color: important ? '#17a2b8 ' : 'black',
    fontWeight: important ? 'bold' : 'normal',
  };
  return (
    <div className="todo-list-item">
      <span
        className="todo-list-item-label"
        style={style}>
        {label}
      </span>
      <button type="button" className="btn btn-outline-success btn-sm float-right ">
        <span className="sr-only">Delete</span>
        <i className="fa fa-exclamation" />
      </button>
      <button type="button" className="btn btn-outline-danger btn-sm float-right">
        <span className="sr-only">Set important</span>
        <i className="fa fa-trash-o" />
      </button>
    </div>
  );
};

export default TodoListItem;
