import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const { title, handleDelete, handleEdit, handleComplete } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <input
          type="checkbox"
          className="form-check-input ml-1 checksize"
          onClick={handleComplete}
        />
        <h6 className="mt-1 ml-4">{title}</h6>
        <div className="todo-icon">
          <span className="mx-2 text-success btn" onClick={handleEdit}>
            <i className="fas fa-pen"></i>
          </span>
          <span className="mx-2 text-danger" onClick={handleDelete}>
            <i className="fas fa-trash"></i>
          </span>
        </div>
      </li>
    );
  }
}
