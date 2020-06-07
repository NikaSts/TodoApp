import React, { Component } from 'react';
// import PropsType from 'prop-types';
import './todo-list-item.css';

export default class TodoListItem extends Component {
  constructor() {
    super();
    this.state = {
      done: false,
      important: false,
    };

    this.onLabelClick = this.onLabelClick.bind(this);
    this.onImportantBtnClick = this.onImportantBtnClick.bind(this);
  }

  onLabelClick() {
    this.setState(({ done }) => ({
      done: !done,
    }));
  }

  onImportantBtnClick() {
    this.setState(({ important }) => ({
      important: !important,
    }));
  }

  render() {
    const { label, onDeleted } = this.props;
    const { done, important } = this.state;

    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done';
    }
    if (important) {
      classNames += ' important';
    }

    return (
      <div className={classNames}>
        <span
          className="todo-list-item-label"
          onClick={this.onLabelClick}
          onKeyPress={this.onLabelClick}
          role="button"
          tabIndex="0">
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={this.onImportantBtnClick}
          onKeyPress={this.onImportantBtnClick}>

          <span className="sr-only">Delete</span>
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDeleted}
          onKeyPress={onDeleted}>

          <span className="sr-only">Set important</span>
          <i className="fa fa-trash-o" />
        </button>
      </div>
    );
  }
}
