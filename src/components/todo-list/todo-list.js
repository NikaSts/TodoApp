import React from 'react';
// import PropsType from 'prop-types';
import TodoListItem from '../todo-list-item';
import './todo-list.css';


const TodoList = ({ todos }) => {
  const listElements = todos.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem {...itemProps} />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      {listElements}
    </ul>
  );
};


export default TodoList;