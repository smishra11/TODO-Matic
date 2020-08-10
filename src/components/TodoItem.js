import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const { title, handleDelete, handleEdit, handleComplete } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between align-items-center mb-2">
        <div className="ml-2">
          <input
            type="checkbox"
            className="form-check-input"
            onClick={handleComplete}
          />
          <h6 className="mt-1 ml-2">{title}</h6>
        </div>
        <div className="todo-icon">
          <span className="text-success btn" onClick={handleEdit}>
            <i className="fas fa-pen"></i>
          </span>
          <span className="ml-1 text-danger btn" onClick={handleDelete}>
            <i className="fas fa-trash"></i>
          </span>
        </div>
      </li>
    );
  }
}
