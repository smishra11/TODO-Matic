import React, { Component } from "react";

import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <>
        <div>
          <button className="btn btn-secondary">Show All Tasks</button>
          <button className="btn btn-secondary ml-4">Show Active Tasks</button>
          <button className="btn btn-secondary ml-4">
            Show Completed Tasks
          </button>
        </div>
        <ul className="list-group my-5">
          {items.map((item) => {
            return (
              <TodoItem
                key={item.id}
                title={item.title}
                handleDelete={() => handleDelete(item.id)}
                handleEdit={() => handleEdit(item.id)}
              />
            );
          })}
          <button
            type="button"
            className="btn btn-danger btn-block text-capitalize mt-5"
            onClick={clearList}
          >
            Clear list
          </button>
        </ul>
      </>
    );
  }
}
