import React, { Component } from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {
  constructor() {
    super();

    this.state = {
      label: '',
    };
    this.onLabelChange = this.onLabelChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onLabelChange(evt) {
    this.setState({
      label: evt.target.value,
    });
  }

  onFormSubmit(evt) {
    evt.preventDefault();
    const { onSubmit } = this.props;
    const { label } = this.state;
    onSubmit(label);
    this.resetForm();
  }

  resetForm() {
    this.setState({
      label: '',
    });
  }

  render() {
    const { label } = this.state;

    return (
      <form
        className="d-flex item-add-form"
        onSubmit={this.onFormSubmit}>
        <input
          type="text"
          className="add-form-input"
          placeholder="Add new task"
          onChange={this.onLabelChange}
          value={label} />
        <button
          type="button"
          className="btn btn-outline-info btn-sm float-right">

          <span className="sr-only">Cancel</span>
          <i className="fa fa-minus" />
        </button>

        <button
          type="submit"
          className="btn btn-outline-info btn-sm float-right">

          <span className="sr-only">Add task</span>
          <i className="fa fa-plus" />
        </button>
      </form>
    );
  }
}
